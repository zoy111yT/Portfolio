"""Check published page resources and basic accessible HTML without a build."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.links = []
        self.images = []
        self.main_count = 0
        self.has_viewport = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "main":
            self.main_count += 1
        if tag == "meta" and attrs.get("name") == "viewport":
            self.has_viewport = True
        if tag == "img":
            self.images.append(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        for name in ("href", "src"):
            if attrs.get(name):
                self.links.append(attrs[name])


def main():
    root = Path(__file__).resolve().parents[1]
    errors = []
    files = set()
    pages = {}
    for source in [root / "index.html", *sorted((root / "pages").glob("project*.html"))]:
        page = Page()
        page.feed(source.read_text(encoding="utf-8"))
        pages[source.resolve()] = page

    for source, page in pages.items():
        label = source.relative_to(root)
        if not page.has_viewport:
            errors.append(f"{label}: missing mobile viewport")
        if page.main_count != 1:
            errors.append(f"{label}: expected one main landmark")
        if "#main" not in page.links:
            errors.append(f"{label}: missing skip-to-content link")
        for image in page.images:
            if "alt" not in image or not image.get("src"):
                errors.append(f"{label}: image missing alt or source")
            if not all(image.get(name, "").isdigit() and int(image[name]) > 0 for name in ("width", "height")):
                errors.append(f"{label}: image missing positive width/height")
        for link in page.links:
            parsed = urlsplit(link)
            if parsed.scheme or parsed.netloc:
                continue
            target = (source.parent / unquote(parsed.path)).resolve() if parsed.path else source
            if not target.is_relative_to(root) or not target.is_file():
                errors.append(f"{label}: missing local file: {parsed.path}")
                continue
            files.add(target)
            if parsed.fragment and target in pages and unquote(parsed.fragment) not in pages[target].ids:
                errors.append(f"{label}: missing anchor: {link}")

    for path in ['pages/project-beyond-the-interface.html', 'pages/project-memorial-grove.html', 'pages/project-tipping-point.html', 'pages/project-the-undead-repair-shop.html', 'pages/project-connected.html', 'pages/project01.html', 'pages/project03.html']:
        if path not in pages[root / "index.html"].links:
            errors.append(f"Project entry missing from homepage: {path}")

    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print(f"Passed: {len(pages)} pages, {len(files)} local resources, anchors, image attributes and project entries.")
    print("Unprovided artwork uses labeled placeholders; see docs/missing-files.md.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

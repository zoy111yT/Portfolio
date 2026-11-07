"""Check homepage assets and entry points without a Node/Webpack build.

This checks the published homepage, not the incomplete content of project pages.
See docs/missing-files.md for the separately tracked missing project material.
"""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys


class Homepage(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        for name in ("href", "src"):
            if attrs.get(name):
                self.links.append(attrs[name])


def main():
    root = Path(__file__).resolve().parents[1]
    page = Homepage()
    page.feed((root / "index.html").read_text(encoding="utf-8"))
    errors = []
    files = set()
    for link in page.links:
        parsed = urlsplit(link)
        if parsed.scheme or parsed.netloc:
            continue
        if not parsed.path:
            if parsed.fragment and unquote(parsed.fragment) not in page.ids:
                errors.append(f"Missing homepage anchor: {link}")
            continue
        target = (root / unquote(parsed.path)).resolve()
        if not target.is_relative_to(root) or not target.is_file():
            errors.append(f"Missing local file: {parsed.path}")
        else:
            files.add(target)

    for number in range(1, 5):
        path = f"pages/project{number:02}.html"
        if path not in page.links:
            errors.append(f"Project entry missing from homepage: {path}")

    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print(f"Passed: {len(files)} homepage resources and all four project entries.")
    print("Project page content is tracked separately in docs/missing-files.md.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

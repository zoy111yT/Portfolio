# Web Interface Guidelines review

Reference: [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines), including the current `command.md` rules.

The existing collage homepage and four independent project pages are retained.

## Corrections

| Area | Correction |
| --- | --- |
| Mobile | All pages declare a viewport. Project navigation wraps and has 44px touch targets. Narrow homepage navigation wraps into two rows. Safe-area padding protects edge controls. |
| Keyboard | Skip links and visible focus indicators are available on all pages. Book, city markers, dates, and locations use native buttons. Focus remains on the selected date. |
| Dialog | City details use a native modal dialog with a title, focus containment, Escape dismissal, and focus return. |
| Motion | Ticker has a pause control; reduced motion disables its autoplay. Particle animation has pause/resume, starts paused for reduced motion, and stops when off-screen or the document is hidden. |
| Content | All images declare alt text and dimensions. Deferred images load lazily. Unprovided artwork uses a labeled local placeholder, retaining original paths for later replacement. |
| Readability | Text labels are larger. Low-contrast red index numbers are darker. Mood badges use dark text. |
| State | Book page, city detail, day, and location selections are represented in the URL and restored on reload. Day and zone history restores with Back/Forward. |
| Performance | Canvas geometry is updated through ResizeObserver. Pointer-move layout measurements are replaced with native location controls. Fewer particles render on small screens. Transitions name their properties. |
| Regression checks | GitHub checks all five pages for resources, anchors, image attributes, viewport, main landmark, skip link, and project navigation. |

## Validation

- Chromium: all five pages at 320, 390, 768, 1024 and 1440px without horizontal overflow.
- Keyboard: book paging; modal open, Tab containment, Escape and focus return; date and location selection with retained focus.
- Functional: image loads, live mood text, selection persistence on reload, pause controls and reduced-motion behavior. No page script errors or failed local resource requests in the tested flows.
- axe-core 4.10.3: no reported WCAG A/AA violations across 14 default/interactive states, covering all five pages at 1440 and 390px, plus open city dialogs and selected mood states.
- Python: `python3 scripts/check_site.py` passes; a missing stylesheet or missing image description fails the check.

Automated results cover the checks above; they are not a complete accessibility certification.

## Content still needed

Only two zine pages were supplied. The book presents those two pages rather than allowing users to turn into missing images. Gallery and city photos remain placeholders. The city-map background and RRR documents are not supplied. See [missing-files.md](missing-files.md) for original filenames and restoration instructions. Placeholder replacement does not recreate these materials.

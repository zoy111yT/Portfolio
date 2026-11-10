# Built-in language switch

The globe button in each page header switches the portfolio interface between English and Simplified Chinese. The chosen language is stored as `en` or `zh-CN` under the localStorage key `portfolio-language` and applies across page navigation and reloads. If storage is unavailable, switching still works on the current page.

`assets/js/language.js` contains curated Chinese interface translations. The original HTML and project scripts keep their English source strings. A mutation observer localizes newly rendered book controls, mood dates, location details, animation controls, image recovery messages and accessible labels. Original text is retained per DOM node so switching back restores the original English. URLs, email addresses, phone numbers, numeric project data and interactions remain unchanged.

`assets/css/language.css` styles the compact globe control and a few Chinese text adjustments. Page headings, palettes, artwork and animations keep the existing design.

Original project images, map image labels, screenshots and PDF contents are not machine-translated. Product/tool names and the designer's English wordmark retain their original spelling. New English interface copy should receive a corresponding dictionary entry before publication. Book/map strings with page numbers or dates use explicit formatting patterns; the mobile day picker uses compact Chinese day labels.

The control uses a native keyboard-accessible button, updates the document language and title, and localizes supported aria labels and image descriptions. It makes no translation-service requests and needs no third-party widget or browser extension.

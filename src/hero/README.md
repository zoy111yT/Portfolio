# Interactive skills hero

Adapted from the Rubber Spheres source supplied by the site owner, originally by Originkit:
https://www.originkit.dev/components/rubber-spheres?preset=base

`RubberSpheres.tsx` retains the supplied physics, image decals and Three.js renderer. The Framer property inspector is removed for static hosting. Skill selection follows the owner's portfolio; decals use original brand colors rather than the PDF's grayscale icons. Figma and Maya are from Devicon, ChatGPT and DeepSeek from Iconify's Simple Icons/Remix Icon collections, Procreate and Cinema 4D from Icons8. Adobe lettermarks, TVPaint lettering and the Midjourney sailboat are locally rendered SVG treatments. Additions include transparent paper-background composition, gentle idle movement, pause/reduced-motion handling, offscreen suspension, touch events, and a rendered image fallback.

Run `npm ci` then `npm run build:hero`; commit the generated JS and license notice. GitHub Pages serves the bundle directly and needs no Node server. Skill textures are local PNGs; no third-party brand image service is requested.

Icon sources: https://github.com/devicons/devicon (MIT), https://simpleicons.org (CC0), https://remixicon.com (Apache 2.0), https://icons8.com (icon attribution). Brand marks belong to their respective owners.

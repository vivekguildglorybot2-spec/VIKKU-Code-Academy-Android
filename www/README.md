# VIKKU CODE ACADEMY — V7 VISUAL REFRESH

## Project files

- `index.html` — application shell and CDN references.
- `styles.css` — responsive dark academy UI, lesson cards and coding workspace.
- `app.js` — career-path data, 100-level curriculum generator, quizzes, local progress, Hindi UI, and playground logic.

## Included in this V7 build

- 30 career paths, including frontend, backend, full stack, Python, Java, C, C++, C#, JavaScript, TypeScript, React, Node.js, MERN, Flutter, Android, iOS, data analysis/science, AI/ML, SQL, cybersecurity, networking, DSA, Unity, Godot, Python games, Roblox and Git/GitHub.
- 100 structured levels per path: 25 path-specific topics, each split into concept, guided practice, independent practice and mini-project stages.
- Every level renders a topic-specific explanation, why/where context, code example, exercise, challenge, objectives and a knowledge-check quiz.
- Quiz validation: five questions per level; each question has exactly four non-empty distinct options, one correct answer and three distractors. Answer positions are randomized, feedback is shown, and a wrong answer can be retried without erasing previous progress.
- Hindi language toggle, Hindi lesson explanations and Hindi quiz wording. Code and programming keywords are not translated.
- Demo learner profile, XP, bookmarks, achievements, level completion and local progress.
- V5/V6 local progress is read where available; V7 onboarding completion is a new setting.
- CodeMirror syntax highlighting when its CDN is available; a plain textarea fallback if it is unavailable.
- HTML/CSS/JavaScript sandboxed preview, editor tabs, run, reset, save/load, output messages and clear output.
- Optional Three.js rotating-cube preview demo.
- Desktop resizable editor/preview panels and stacked mobile layout.

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Keep an internet connection available for CodeMirror, Three.js and Google Fonts CDN assets. If CodeMirror is unavailable, the basic textarea editor fallback is used.

## Deploy to Netlify

1. Sign in to Netlify.
2. Choose **Add new site** → **Deploy manually**.
3. Extract this ZIP on your device/computer.
4. Upload the `VIKKU_Code_Academy_V7` folder (the folder containing `index.html`, `styles.css` and `app.js`) to the Netlify deploy area.
5. Wait for the deploy to finish and open the generated site URL.

No build command or publish directory is needed for this static site.

## Important limitations — read before publishing

- **Authentication:** This is a local demo profile, not secure authentication. There is no backend authentication, account recovery or cloud sync. The profile name is a local demo profile, not a verified account.
- **Storage:** XP, progress, bookmarks and code are saved in this browser's localStorage on this device. Clearing browser data may erase them. There is no cross-device sync.
- **Language coverage:** Global Hindi mode translates the main interface, lesson explanations, exercises and quiz text. Career names, technical topic names and programming code remain in English where appropriate. This build does not yet provide a professionally human-reviewed Hindi translation for every technical paragraph and tooltip across all 3,000 generated lesson stages.
- **Curriculum depth:** The 100-level structure is generated from 25 curated, path-specific topics and four progressive learning stages. It is a substantial working curriculum framework, but not 3,000 individually hand-authored, expert-reviewed lessons. Some examples are illustrative and should be expanded/reviewed before use as a formal course.
- **Code execution:** Only HTML/CSS/JavaScript execute in the browser preview. Python, Java, C/C++, C#, Dart, Swift, Kotlin, GDScript, Luau and other languages have learning examples but no compiler/runtime integration. No fake successful execution is shown for those languages.
- **3D:** The Three.js option is a small interactive cube demo, not a general 3D renderer for every course. It requires the Three.js CDN.
- **External dependencies:** CodeMirror, Three.js and Google Fonts load from CDNs. No API key or paid service is required for the included features.

## Checks and testing notes

- JavaScript syntax validation was run on the updated V7 app.
- The existing V6 curriculum and quiz data were retained unchanged; its earlier validation reported 30 paths, 3,000 generated level records and 15,000 quiz questions.
- A complete interactive browser test was not completed in this build environment. Please test the onboarding flow and HTML/CSS/JavaScript runner in Chrome on Android before publishing.

A full interactive browser test could not be completed in the build environment because its browser automation navigation was blocked by the environment. Before public launch, test the site in Chrome on an Android phone and in a desktop browser, especially the CodeMirror CDN fallback, iframe preview and panel-resize interaction.


## V7 visual and onboarding update

- Rebranded the visible academy as **VIKKU Code Academy**.
- Added a neon purple/blue landing page inspired by the supplied visual reference, with responsive layout and animated accents.
- Added a guided setup flow: learner name, interests, developer path, experience level and daily learning goal.
- Added a level-up dashboard with XP progress, milestones and a direct link to the code playground.
- Replaced emoji-style feature icons in the new landing/setup/dashboard screens with inline SVG icons.
- Retained the existing learning roadmap, lesson/quiz system and local progress storage.
- Kept the real browser-based HTML/CSS/JavaScript preview. The preview is sandboxed; other languages are not compiled by this static build.

## V7 notes

The new onboarding profile and learning progress are stored locally in the browser. Existing V6 learning data is still read during migration, but the V7 onboarding completion flag is a new setting. The code playground runs HTML, CSS and JavaScript only. It is not a remote compiler or secure production execution service.


## V8 practical coding update

- Added brand-inspired technology marks to career cards, including the yellow/black JavaScript mark, Java, Python, React, HTML, CSS, Node.js, Godot, Full Stack, Frontend and Backend styles. These are simplified text/CSS marks, not official trademark asset files.
- Added a line-by-line code explanation panel with Hindi and English language selection. It recognises common JavaScript terms, HTML tags and CSS properties; explanations are educational guides and may need human review for complex code.
- Added a Three.js 3D Starter button. It fills the HTML/CSS/JS editor with an editable scene, camera, light, rotating cube and resize handling. Select 3D Model · Three.js and press Run.
- Expanded the playground toolbar with Explain Code and 3D Starter actions. Existing HTML/CSS/JavaScript runner, local save/load and lesson roadmap remain.
- 3D preview needs internet access for the Three.js CDN. The static site still does not compile Python, Java, C/C++, Kotlin or other server/native languages.

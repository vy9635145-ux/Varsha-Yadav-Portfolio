# Varsha Yadav — Web Developer Portfolio

A responsive portfolio made with HTML, CSS, and vanilla JavaScript.

## Run locally
1. Extract the ZIP file.
2. Open `index.html` in your browser, or use VS Code with the Live Server extension.
3. An internet connection is needed for Google Fonts and Lucide icons. The site layout still works if those external services are unavailable.

## Personalize before publishing
- **Profile photo:** Put your image at `assets/images/profile.jpg`. The hero section automatically shows a placeholder if the image is missing.
- **Projects:** Edit `js/projects.js` to change descriptions, technology tags, and live/GitHub links. Replace the TripGuide links when its own public repository or live deployment is ready.
- **Education:** College name is added. Add your expected graduation year in `index.html` when ready.
- **Resume:** Add your PDF at `assets/resume/varsha-yadav-resume.pdf` and add a download link in the hero section if desired.
- **Contact form:** This uses `mailto:` to open the visitor's email application. It does not send email directly or store submissions. For a true web form, connect a backend or form service.
- **Skills:** Only list tools and skills you can confidently discuss in an interview.

## Publish with GitHub Pages
1. Create a new GitHub repository for this portfolio.
2. Upload the extracted project files while keeping the folder structure.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. After deployment, test the public site on mobile and desktop.

## Structure
- `index.html` — page content and structure
- `css/style.css` — visual styling
- `css/responsive.css` — responsive layouts
- `css/animations.css` — motion effects
- `js/main.js` — navigation, project rendering, filters, and UI interactions
- `js/projects.js` — project data
- `js/contact.js` — contact form validation and email-app handoff

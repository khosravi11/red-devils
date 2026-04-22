# Berkeley Red Devils Website

## Short Summary

Custom React website for the Berkeley Red Devils, a local AAU basketball program in Berkeley, California. The site is designed as a community-facing marketing and contact experience for families, with clear calls to action, mobile-friendly layout, coach highlights, media coverage, and a simple contact workflow.

## Live Demo

No public deployment is linked yet.

Recommended next step: deploy the current build to Vercel or Netlify, then add that URL here and in the GitHub repository "Website" field.

## Screenshots

Add screenshots to `docs/screenshots/` using these suggested filenames:

- `docs/screenshots/home-desktop.png`
- `docs/screenshots/gallery-mobile.png`
- `docs/screenshots/contact-section.png`

Then replace the placeholders below:

```md
![Homepage hero](docs/screenshots/home-desktop.png)
![Mobile gallery](docs/screenshots/gallery-mobile.png)
![Contact section](docs/screenshots/contact-section.png)
```

## Features

- Responsive single-page website tailored to a real youth basketball program
- Hero section with current registration messaging and clear call to action
- Featured media section linking to external coverage
- Image gallery with autoplay, keyboard navigation, touch swipe, and thumbnail selection
- Program overview and coach bios to help families evaluate the organization
- Click-to-call contact actions for mobile users
- Contact form powered by EmailJS for lightweight form delivery without a backend
- Social links and partner branding for community credibility

## Tech Stack

- React 18
- Create React App
- Bootstrap 5
- Font Awesome
- Animate.css
- EmailJS
- Jest and React Testing Library

## Project Structure

```text
.
|-- public/
|   |-- images/
|   |-- pdf/
|   `-- videos/
|-- src/
|   |-- components/
|   |-- App.js
|   |-- App.css
|   |-- index.js
|   `-- setupTests.js
|-- .env.example
|-- .gitignore
|-- package.json
`-- README.md
```

## Installation

```bash
npm install
npm start
```

The app runs locally at `http://localhost:3000`.

## Environment Variables

Create a local `.env` file in the project root and add:

```bash
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Use `.env.example` as the template. Do not commit your real `.env` file.

If real EmailJS values were ever committed to this repository, rotate them in the EmailJS dashboard before making the repo public-facing.

## Available Scripts

- `npm start` runs the development server
- `npm test` runs the test suite
- `npm run build` creates a production build in `build/`

## Challenges and Decisions

- Kept the project honest as a frontend-only site instead of overstating it as a full platform
- Used EmailJS to support contact form delivery without introducing backend hosting overhead
- Structured the homepage as a practical community website: clear contact paths, coach credibility, media proof points, and mobile-first access for families
- Preserved real-world content and assets so the repository reads like client/community work rather than a tutorial exercise

## Future Improvements

- Add a public deployment URL and repository website field
- Capture polished desktop and mobile screenshots for the README
- Add a lightweight CMS or content workflow if non-developers need to update seasonal registration copy
- Expand tests around navigation, contact form states, and responsive behavior
- Compress large media assets further if page weight becomes a concern

## Author

Built by [Sahar Khosravi](https://github.com/khosravi11).

If you are reviewing this project in an interview context, this repo is intended to show practical frontend work for a real community organization: content structure, responsive UI, third-party integration, and production-minded polish.

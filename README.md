# Berkeley Red Devils Website

## Short Summary

Custom React website for the Berkeley Red Devils, a local AAU basketball program in Berkeley, California. The site provides a community-facing experience for families with clear calls to action, mobile-friendly layout, coach highlights, media coverage, and a lightweight contact workflow. It was intentionally built as a frontend-only site so the client can maintain a public web presence without backend infrastructure or ongoing server costs.

## Live Demo

https://reddevilsaau.com/

## Screenshots

This repo does not currently include screenshots. The live site above is the best way to review the project.

## Features

- Responsive single-page website tailored to a real youth basketball program
- Hero section with current registration messaging and clear call to action
- Featured media section linking to external coverage
- Image gallery with autoplay, keyboard navigation, touch swipe, and thumbnail selection
- Program overview and coach bios to help families evaluate the organization
- Click-to-call contact actions for mobile users
- Embedded Google Form for team tryout registration
- Social links and partner branding for community credibility

## Tech Stack

- React 18
- Create React App
- Bootstrap 5
- Font Awesome
- Animate.css
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
|-- .gitignore
|-- package.json
`-- README.md
```

## Installation

```bash
npm install
npm start
```

The site runs locally at `http://localhost:3000`.

## Available Scripts

- `npm start` runs the development server
- `npm test` runs the test suite
- `npm run build` creates a production build in `build/`

## Challenges and Decisions

- Kept the project honest as a frontend-only site instead of overstating it as a full platform
- Embedded the team registration workflow with Google Forms to avoid introducing backend hosting overhead
- Chose a frontend-only architecture intentionally so the client would not need to pay for backend hosting or maintain server-side infrastructure
- Structured the homepage as a practical community website: clear contact paths, coach credibility, media proof points, and mobile-first access for families
- Preserved real-world content and assets so the repository reads like client/community work rather than a tutorial exercise

## Future Improvements

Not included in this README. This document is intentionally focused on the current project scope.

## Author

Built by [Saam Khosravi](https://github.com/khosravi11).

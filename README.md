# Joseph Michael Abellanosa — QA Analyst Portfolio

A responsive five-page portfolio starter based on the supplied November 2, 2026 resume and the additional updates supplied in chat.

## Stack
- HTML: separate page files
- CSS: `styles/main.css`
- TypeScript: `src/main.ts` and `src/projects.ts`
- Vite: local development and multi-page production build

## Run locally
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

Build production files with `npm run build` (output: `dist/`).

## Pages
- `index.html` — Home
- `about.html` — About
- `skills.html` — Skills
- `projects.html` — Projects
- `experience.html` — Experience
- Contact details are included in `about.html` under `#contact`.

## Resume-backed information included
- Intellismart Technology, Inc. — Quality Assurance Analyst – Manual & Automation Testing, May 23, 2023 – November 6, 2026 (end date updated per user's instruction).
- Level9Virtual — Virtual Assistant, September 19, 2022 – February 17, 2023.
- BS Information Technology, San Beda University, 2017–2021.
- MTA Database Fundamentals Certificate (2020).
- Dean's Lister: First Semester A.Y. 2018–2019; Second Semester A.Y. 2019–2020.
- HRIS manual testing across web and mobile, payroll, timekeeping, employee records, test case execution, data/calculation validation, defect reporting, and Playwright automation focused on timekeeping.
- Technical focus updated to remove Java, emphasize TypeScript for frontend and Playwright, and C# for backend.

## Before publishing
- Confirm the phone number formatting and whether you want it public.
- Add LinkedIn and GitHub profile URLs.
- Confirm the exact scope and status of the three project entries. HRIS automation is based on resume-described work; Payroll UI Frontend and Payroll Calculation Backend are labeled as portfolio-build directions because the resume does not establish them as completed projects.
- Add any omitted education, earlier roles, frameworks, database technologies, or tools only if accurate.
- Do not publish proprietary HRIS/payroll data, confidential screenshots, or employer-owned source code without permission.


## Latest layout notes
- Navigation contains five pages: Home, About, Skills, Projects, and Experience.
- Contact information is part of the About page at `about.html#contact`.
- Project cards use a compact horizontal logo/content layout on desktop and stack vertically on narrow screens.
- Project headings use high-contrast white text.

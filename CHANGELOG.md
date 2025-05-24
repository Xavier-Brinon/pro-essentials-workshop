# Changelog / Dev Journal

## [Unreleased]

- Initial creation of `CHANGELOG.md` to document repository-wide development progress and changes.
- Restructured the repository from a classic single-package setup to a monorepo using two packages:
  - `course`: Contains the course material and exercises.
  - `app01`: The first full stack app, based on the exercise "TS in the build process, Use vite for a front end app".
- Instead of following the exercise exactly, adopted a monorepo structure and used TanStack Start for the frontend app instead of Vite.
- To run the first app (`app01`) in its basic template form, use the command `npm run dev` from the root of the repository and follow the instructions provided in the terminal.

### 2024-06-11
- Added `router.tsx` in `packages/app01/app` with TanStack Router integration and type augmentation.
- Set up repository changelog to track updates and serve as a dev journal.
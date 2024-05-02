# Eloquent

By Hannah Carino

## About

A minimalist note-taking application built with NextJS and React. My goal is to learn about more front-end technlogies in depth while pursuing my own passion with aesthetic productivity applications.

## Development

### Concepts and Structure

The eloquent repository contains all information required to run and develop the application.

- `app` is the front end of the application where all user interface components are created.
  - Developers must be familiar with the NextJS development style for successful development.
- The `convex` folder is the back end of the application. This lets us write a schema for databases, set up authentication, file storage, functions and other semantics for a seamless workflow.
- The `hooks` folder contains useful functions that help us detect the state of the front end.
- The `components` directory consists of the design system assets.
  - We are using ShadCN (https://ui.shadcn.com/)as the component library as it is open source and lets us download all components locally. We can modify them however we like to suit our needs.

### Prerequisites

- Node: https://nodejs.org/en/download
- Convex CLI: https://docs.convex.dev/cli
  - Download with `npm install convex`

### Run the Application

Assumes you have all the prerequisites above.

- `npm install` to install all dependencies
- `npx convex dev` for the backend
- `npm run dev` for the front-end development environment

## Roadmap

1. UI for landing page - React and NextJS ✅
2. Introducing a database ✅
3. Register and login functionality ✅
4. Responsive sidebar layout ✅
5. User dropdown & details ✅
6. Schema and API for text editing ✅
7. Sidebar Items
8. Document List
9. Trash and archive/soft delete functionality
10. Search
11. Settings
12. Navbar with breadcrumbs
13. Banner
14. Overlay toolbar
15. Icons and cover images to documents
16. Advanced file upload
17. Text editor with BlockNote
18. Publishing and sharing pages
19. Deployment of application

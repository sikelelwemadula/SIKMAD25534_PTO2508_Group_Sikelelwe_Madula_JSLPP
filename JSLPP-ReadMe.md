# Final Project — Kanban Task Manager

This final project is a fully responsive Kanban-style task management app built with vanilla HTML, CSS, and JavaScript. It combines the skills learned throughout the course into one polished product: responsive layout, dynamic UI state, theme toggling, modal forms, sidebar navigation, and local persistence.

## Key Features

- Responsive Kanban board with **TODO / DOING / DONE** columns.
- **Sidebar navigation** with board list and theme toggle.
- **Mobile/tablet adaptive UI** with overlay sidebar and compact controls.
- **Dark mode support** with custom styling for cards, header, modals, and sidebar.
- **Modal forms** for task creation and editing.
- **Task persistence** using browser `localStorage`.
- **Interactive sidebar controls** including hide/show and close actions.

## What Was Built

- `index.html` contains the app structure: sidebar, main header, task columns, and modal dialogs.
- `styles.css` handles the responsive layout, dark mode styling, mobile/tablet UI, and component presentation.
- `scripts/main.js` launches the app and loads feature-specific modules.
- `scripts/ui/sidebarManager.js` manages sidebar visibility, overlay behavior, and responsive sidebar event handling.
- `scripts/tasks/taskManager.js` (and related task modules) handle task creation, updating, and rendering.
- `scripts/tasks/formUtils.js` manages modal input forms and validation.
- `scripts/utils/localStorage.js` saves app state so tasks and theme persist across sessions.

## Skills Demonstrated

- DOM manipulation and event handling
- Responsive CSS layout and media queries
- Theme toggling and conditional styling
- Modal dialog UX and custom close controls
- State persistence with `localStorage`
- Modular JavaScript architecture
- User interface polish for mobile/tablet and desktop

## Responsive Behavior

- On desktop, the sidebar appears permanently on the left.
- On tablet and mobile, the sidebar switches to an overlay and can be shown/hidden by tapping the header icon or close actions.
- The task board adapts from a multi-column grid to a single-column mobile layout.

## How to Use

1. Open `index.html` in a browser.
2. Add a new task using the **Add New Task** button.
3. Toggle between **light and dark mode** with the theme control.
4. Close or show the sidebar from mobile/tablet using the header icon and sidebar controls.
5. Task data is stored locally and persists after refresh.

## Why This Project Matters

This project ties together the end-of-course skills for JSL into a real interface: it shows us how to build a fully interactive single-page app and how to make that app work across screen sizes and themes.

## Folder Structure

- `index.html` — main markup
- `styles.css` — app styling and responsive rules
- `scripts/main.js` — application initialization
- `scripts/ui/` — UI-specific modules like sidebar management and rendering
- `scripts/tasks/` — task data and form handling
- `scripts/utils/` — persistence helpers and utility functions
- `assets/` — icons and image assets

---

This final project is the culmination of the course: it brings interaction, responsiveness, theme control, and persistent app state together in one final build. 

## Contributions

Please note, this is a CodeSpace project. If you are viewing this file you do not have permission to make any changes. This is strictly an education aid.


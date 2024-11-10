# User Dashboard Project

A comprehensive user dashboard application built with **Next.js**, **Zustand** for state management, **Tailwind CSS** for styling, and **ShadCN** for UI components. This project allows you to manage user information through features like adding, editing, and deleting users, with data persisting locally in the browser's local storage.

## Features

- **User Dashboard**: A clean interface to display user profile, it expand when you click on the User .
- **User management**: A clean interface to display user profile in a table, allows sorting,filtering, searching, editing and delete user profile.
- **Add & Edit User**: A modal popup for adding new users or editing existing user details.
- **State Management**: Implemented using Zustand with persistence to local storage, ensuring data retention even after browser refreshes.
- **Reusable Code**: Components and functions are structured to maximize reusability.
- **Features folder**: Contains all features components.
- **Error Handling**: `try` and `catch` blocks in functions gracefully handle errors and provide feedback with toast messages, also prepared to receive api calls.
- **Conditional Rendering**: Components dynamically update based on user actions and local storage data.
- **Tailwind CSS**: Quick, responsive styling.
- **ShadCN Components**: Pre-built, customizable UI components from the ShadCN library.
- **Nuqs**: To manage and control my modals.

## Getting Started

First, run the development server:

```bash
cd my-users
# 
npm install
# 
npm run dev
# or
bun run  dev

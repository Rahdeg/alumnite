User Dashboard Project
A comprehensive user dashboard application built with Next.js, Zustand for state management, Tailwind CSS for styling, and ShadCN for UI components. This project allows you to manage user information through features like adding, editing, and deleting users, while persisting data locally in the browser's local storage.

Features
User Dashboard: A clean interface to display user information with sorting options.
Add & Edit User: A modal popup for adding new users or editing existing user details.
State Management: Implemented using Zustand with persistence to local storage, ensuring data retention even after browser refreshes.
Reusable Code: Components and functions are structured to maximize reusability.
Error Handling: try and catch blocks in functions to gracefully handle errors and provide feedback with toast messages.
Conditional Rendering: Components dynamically update based on user actions and local storage data.
Badges & Icons: User roles are displayed with icons and badges for easy differentiation.
Reverse Ordering: Users are displayed from the most recently added to the oldest.
Tailwind CSS: Tailwind CSS is used for quick, responsive styling.
ShadCN Components: ShadCN library is used for pre-built, customizable UI components.
Getting Started
First, run the development server:

bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

Project Structure
/src/components: Contains reusable UI components.
/src/store: Zustand store configuration and state management.
/src/pages: Dashboard and other main pages.
/src/configs: Initial data configurations.
/src/types: TypeScript type definitions for users, roles, and status.
Important Files
useUserStore.ts: Zustand store with state management logic and local storage persistence.
UserDashboard.tsx: Main dashboard component displaying user info.
AddUserModal.tsx: Modal popup for adding or editing user information.
Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Usage Instructions
Add User: Use the "Add User" button on the dashboard to open the modal and add a new user.
Edit User: Click on a user entry to edit their details.
Delete User: Remove a user from the dashboard with the delete option.
Role & Status Management: Assign roles (Admin, User, Guest) and toggle active/inactive status for users.
Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.

License
This project is licensed under the MIT License.


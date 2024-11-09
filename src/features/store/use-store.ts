/* eslint-disable @typescript-eslint/no-unused-vars */

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { UserStore } from "./types";
import { initialUsers } from "@/configs/databases/users";
import { Role, Status, User } from "@/configs/types";
import { toast } from "sonner";

const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      users: [],

      initializeUsers: () => {
        try {
          const storedUsers = get().users;
          if (!storedUsers || storedUsers.length === 0) {
            set({ users: initialUsers });
          }
        } catch (error) {
          toast.error("Failed to initialize users.");
        }
      },

      getUsers: () => {
        try {
          const users = get().users;
          return [...users].reverse();
        } catch (error) {
          toast.error("Failed to fetch users.");
          return [];
        }
      },
      getUserById: (id: string) => {
        try {
          const users = get().users;
          return users.find((user) => user.id === id);
        } catch (error) {
          toast.error("Failed to fetch user details.");
        }
      },

      addUser: (user: User) => {
        try {
          set((state) => ({
            users: [...state.users, user],
          }));
          toast.success("User added successfully.");
        } catch (error) {
          toast.error("Failed to add user.");
        }
      },

      editUser: (id: string, updatedUser: Partial<User>) => {
        try {
          set((state) => ({
            users: state.users.map((user) =>
              user.id === id ? { ...user, ...updatedUser } : user
            ),
          }));
          toast.success("User updated successfully.");
        } catch (error) {
          toast.error("Failed to update user.");
        }
      },

      removeUser: (id: string) => {
        try {
          set((state) => ({
            users: state.users.filter((user) => user.id !== id),
          }));
          toast.success("User deleted successfully.");
        } catch (error) {
          toast.error("Failed to delete user.");
        }
      },

      removeUsers: (ids: string[]) => {
        try {
          set((state) => ({
            users: state.users.filter((user) => !ids.includes(user.id)),
          }));
          toast.success("Users deleted successfully.");
        } catch (error) {
          toast.error("Failed to delete users.");
        }
      },

      changeRole: (id: string, newRole: Role) => {
        try {
          set((state) => ({
            users: state.users.map((user) =>
              user.id === id ? { ...user, role: newRole } : user
            ),
          }));
          toast.success("User's role updated.");
        } catch (error) {
          toast.error("Failed to update user's role.");
        }
      },

      changeStatus: (id: string, newStatus: Status) => {
        try {
          set((state) => ({
            users: state.users.map((user) =>
              user.id === id ? { ...user, status: newStatus } : user
            ),
          }));
          toast.success("User's status updated.");
        } catch (error) {
          toast.error("Failed to update user's status.");
        }
      },
    }),
    {
      name: "users-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        // Ensure `initialUsers` are set if no persisted data is found
        if (state) state.initializeUsers();
      },
    }
  )
);

export default useUserStore;

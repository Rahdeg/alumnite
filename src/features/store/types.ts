import { Role, Status, User } from "@/configs/types";

export type UserStore = {
  initializeUsers(): unknown;
  users: User[];
  getUsers: () => User[];
  getUserById: (id: string) => User | undefined;
  addUser: (user: User) => void;
  editUser: (id: string, updatedUser: Partial<User>) => void;
  removeUser: (id: string) => void;
  removeUsers: (ids: string[]) => void;
  changeRole: (id: string, newRole: Role) => void;
  changeStatus: (id: string, newStatus: Status) => void;
};

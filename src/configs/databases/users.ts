import { Role, Status, User } from "../types";

export const initialUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: Role.User,
    status: Status.Active,
    profileImage: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: Role.Admin,
    status: Status.Inactive,
    profileImage: "https://via.placeholder.com/150",
  },
];

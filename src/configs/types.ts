export enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

export enum Status {
  Active = "Active",
  Inactive = "Inactive",
}

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
  profileImage?: string; // Allow URLs or File objects for images
};

"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { UserAction } from "./user-actions";
import { User } from "@/configs/types";
import { cn, roleConfig } from "@/lib/utils";
import { AdminAvatar } from "./admin-avatar";
import { Badge } from "@/components/ui/badge";
import * as Icons from 'react-icons/fa';





export const columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "role",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Role
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const role = row.original.role;
            const config = roleConfig[role];

            const IconComponent = Icons[config.icon as keyof typeof Icons];
            return (
                <Badge variant={role} >
                    <p className="  mr-2"> <IconComponent /></p>
                    {role}
                </Badge>
            )

        }
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const status = row.original.status;
            return (
                <div className=" flex items-center gap-x-2 text-sm font-medium">
                    <div className={cn(" rounded-full size-4", status === "Active" ? "bg-green-600" : "bg-red-600")} />
                    <p className=" line-clamp-1">{status} </p>
                </div>
            )

        }
    },
    {
        accessorKey: "profileImage",
        header: "Profile Image",
        cell: ({ row }) => {

            const name = row.original.name;
            const image = row.original.profileImage;


            return (
                <div className=" flex items-center justify-center">
                    <AdminAvatar className=" size-6" name={name} image={image} />
                </div>
            )

        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const id = row.original.id;
            return (
                <UserAction id={id} >
                    <Button variant="ghost" className="size-8 p-0">
                        <MoreHorizontal className=" size-4" />
                    </Button>
                </UserAction>
            )
        }
    },

];
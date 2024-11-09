"use client"

import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn, fileToBase64 } from "@/lib/utils";
import { editUserSchema } from "../types";
import useUserStore from "@/features/store/use-store";
import { DottedSeparator } from "@/components/dotted-separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Role, Status, User } from "@/configs/types";
import { Switch } from "@/components/ui/switch";
import { useEditUserModal } from "../hooks/use-edit-user-modal";

interface EditUserFormProps {
    onCancel?: () => void;
    initialValues: User;
}

export const EditUserForm = ({ onCancel, initialValues }: EditUserFormProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const { close } = useEditUserModal()

    const { editUser } = useUserStore();


    const inputRef = useRef<HTMLInputElement>(null);

    const form = useForm<z.infer<typeof editUserSchema>>({
        resolver: zodResolver(editUserSchema),
        defaultValues: {
            ...initialValues,
            status: initialValues.status === "Active" ? true : false
        }
    })

    const onSubmit = async (values: z.infer<typeof editUserSchema>) => {

        setIsLoading(true);

        let image;

        if (values.profileImage instanceof File) {
            const base64Image = await fileToBase64(values.profileImage);
            image = base64Image;
        } else {
            image = values.profileImage;
        }



        const finalValues = {
            ...values,
            profileImage: image ?? "",
            status: values.status ? Status.Active : Status.Inactive,
        }



        editUser(initialValues.id, finalValues)
        setIsLoading(false);
        close();
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            form.setValue("profileImage", file)
        }
    }


    return (
        <Card className=" w-full h-full border-none shadow-none">
            <CardHeader className=" flex p-7">
                <CardTitle className=" text-xl font-bold">
                    Edit a User
                </CardTitle>
            </CardHeader>
            <div className=" px-7">
                <DottedSeparator />
            </div>
            <CardContent className=" p-7">
                <Form {...form}  >
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className=" flex flex-col gap-y-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isLoading}
                                                type="text"
                                                placeholder="Enter users name"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isLoading}
                                                type="email"
                                                placeholder="Enter users email"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />

                            <DottedSeparator className="py-4" />
                            <FormField
                                control={form.control}
                                name="profileImage"
                                render={({ field }) => (
                                    <div className=" flex flex-col gap-y-2">
                                        <div className=" flex items-center gap-x-5">
                                            {
                                                field.value ? (
                                                    <div className=" size-[72px] relative rouded-md overflow-hidden">
                                                        <Image
                                                            fill
                                                            className=" object-cover"
                                                            src={field.value instanceof File ? URL.createObjectURL(field.value) : field.value}
                                                            alt="logo"
                                                        />
                                                    </div>
                                                ) : (
                                                    <Avatar className=" size-[72px]">
                                                        <AvatarFallback>
                                                            <ImageIcon className=" size-[36px] text-neutral-400" />
                                                        </AvatarFallback>
                                                    </Avatar>
                                                )
                                            }
                                            <div className=" flex flex-col">
                                                <p className=" text-sm">Profile Image</p>
                                                <p className=" text-sm text-muted-foreground">JPG,PNG,SVG or JPEG, max 1mb</p>
                                                <input
                                                    className="hidden"
                                                    accept=".jpeg, .png, .jpg, .svg"
                                                    type="file"
                                                    ref={inputRef}
                                                    title="image"
                                                    disabled={isLoading}
                                                    onChange={handleImageChange}
                                                />
                                                {
                                                    field.value ? (
                                                        <Button type="button" disabled={isLoading} variant="destructive" size="sm" className="w-fit mt-2" onClick={() => {
                                                            field.onChange("");
                                                            if (inputRef.current) {
                                                                inputRef.current.value = "";
                                                            }
                                                        }}>
                                                            Remove Image
                                                        </Button>
                                                    ) : (
                                                        <Button type="button" disabled={isLoading} variant="default" size="sm" className="w-fit mt-2" onClick={() => inputRef.current?.click()}>
                                                            Upload Image
                                                        </Button>
                                                    )
                                                }

                                            </div>
                                        </div>
                                    </div>

                                )}
                            />
                            <DottedSeparator className="py-4" />

                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Role
                                        </FormLabel>
                                        <Select defaultValue={field.value} onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger disabled={isLoading}>
                                                    <SelectValue placeholder="Select Role" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <FormMessage />
                                            <SelectContent>
                                                <SelectItem value={Role.Admin}>
                                                    Admin
                                                </SelectItem>
                                                <SelectItem value={Role.Guest}>
                                                    Guest
                                                </SelectItem>
                                                <SelectItem value={Role.User}>
                                                    User
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>

                                )}
                            />
                            <div>
                                <h3 className="mb-4 text-sm font-medium">Status</h3>
                                <FormField
                                    control={form.control}
                                    name="status"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <FormLabel className="text-base">
                                                    {field.value === true ? "Active" : "Inactive"}
                                                </FormLabel>

                                            </div>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}

                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>



                        </div>



                        <DottedSeparator className="py-7" />
                        <div className=" flex items-center justify-between">

                            <Button
                                className={cn(!onCancel && "invisible")}
                                onClick={onCancel} disabled={isLoading} size="lg" type="button" variant="secondary">
                                Cancel
                            </Button>
                            <Button disabled={isLoading} size="lg" type="submit" >
                                Update User
                            </Button>
                        </div>

                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

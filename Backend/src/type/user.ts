import { Role } from "@prisma/client";

export interface NewUser {
    personnelId: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
};

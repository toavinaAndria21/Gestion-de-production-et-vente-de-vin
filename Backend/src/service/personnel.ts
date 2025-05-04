import prisma from "../config/prisma";
import { Role } from "@prisma/client";
interface NewUser {
    cin: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
}
export class personnelService {
    static async getAll(){
        return await prisma.personnel.findMany();
    }

    static async create(data:NewUser) {
        return await prisma.personnel.create({
            data:{
                personnelId: data.cin,
                name: data.name,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                role: data.role
            }
        });
    }

    static async login(email:string, password:string) {
        const user = await prisma.personnel.findUnique({
            where: {
                email: email,
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        if (user.password !== password) {
            throw new Error("Invalid password");
        }
        return user;
    }

    static async update(cin:string, data:Partial<NewUser>) {
        return await prisma.personnel.update({
            where: {
                personnelId: cin,
            },
            data: {
                ...data,
            },
        });
    }

    static async delete(cin:string) {
        return await prisma.personnel.delete({
            where: {
                personnelId: cin,
            },
        });
    }
    static async getById(cin:string) {
        return await prisma.personnel.findUnique({
            where: {
                personnelId: cin,
            },
        });
    }

    static async getByNameAndLastName(searchTerm: string) {
        return await prisma.personnel.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: searchTerm,
                            mode: "insensitive",
                        },
                    },
                    {
                        lastName: {
                            contains: searchTerm,
                            mode: "insensitive",
                        },
                    },
                ],
            },
        });
    }
    
    static async getUserRole(cin: string) {
        const user = await prisma.personnel.findUnique({
            where: {
                personnelId: cin,
            },
        });
        return user?.role;
    }
}
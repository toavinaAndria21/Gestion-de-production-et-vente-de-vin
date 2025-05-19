import prisma from "../config/prisma";
import { NewUser } from "../type/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class personnelService {
    static async getAll(){
        return await prisma.personnel.findMany();
    }

    static async create(data:NewUser) {
        const existing = await prisma.personnel.findUnique({
            where: { personnelId: data.personnelId },
          });
          
          if (existing) {
            throw new Error("Un utilisateur avec ce CIN existe déjà");
          }
        return await prisma.personnel.create({
            data:{
                personnelId: data.personnelId,
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

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }

        const secret = process.env.JWT_SECRET
        if (!secret) {
            throw new Error("JWT secret is not defined");
        }

        const token = jwt.sign({
            personnelId: user.personnelId,
            email: user.email,
            role: user.role,
        },
        secret as string,
        { expiresIn: '1d' });
        
        return {
            user:{
                name: user.name,
                lastName: user.lastName,
                personnelId: user.personnelId,
                email: user.email,
                role: user.role,
            },
            token,
        };

    }

    static async update(cin:string, data:Partial<NewUser>) {
        const existing = await prisma.personnel.findUnique({
            where: { personnelId: cin },
          });
          
          if (!existing) {
            throw new Error("Aucun utilisateur trouvé avec ce CIN");
          }
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

    static async disable(cin: string) {
        const existing = await prisma.personnel.findUnique({
            where: { personnelId: cin },
          });
          
          if (!existing) {
            throw new Error("Aucun utilisateur trouvé avec ce CIN");
          }

        return await prisma.personnel.update({
          where: { personnelId: cin },
          data: { status: 'Inactif' },
        });
      }
      
}
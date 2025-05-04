import prisma from "../config/prisma";
import { Client } from "../type/client";

export class ClientService {
    static async getAll() {
        return await prisma.client.findMany();
    }

    static async create(data: Client) {
        return await prisma.client.create({
            data: {
                name: data.name,
                lastName: data.lastName,
                adress: data.adress,
                email: data.email,
                password: data.password,
            },
        });
    }

    static async update(id: number, data: Partial<Client>) {
        return await prisma.client.update({
            where: {
                clientId: id,
            },
            data: {
                ...data,
            },
        });
    }

    static async delete(id: number) {
        return await prisma.client.delete({
            where: {
                clientId: id,
            },
        });
    }
}
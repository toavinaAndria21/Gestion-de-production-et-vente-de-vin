import prisma from "../config/prisma";
import { Format } from "../type/format";
export class FormatService {
    static async getAll() {
        return await prisma.format.findMany();
    }

    static async create(data: Format) {
        return await prisma.format.create({
            data: {
                label: data.label,
                quantity: data.quantity,
                unit: data.unit,
            },
        });
    }

    static async update(id: number, data: Partial<Format>) {
        return await prisma.format.update({
            where: {
                formatId: id,
            },
            data: {
                ...data,
            },
        });
    }

    static async delete(id: number) {
        return await prisma.format.delete({
            where: {
                formatId: id,
            },
        });
    }
}
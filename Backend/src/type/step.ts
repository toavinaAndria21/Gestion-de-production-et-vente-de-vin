    import { DurationUnit } from '@prisma/client';

    export interface Step {
        stepId?: number;
        productorId: string;
        label: string;
        duration: number;
        unit: DurationUnit;
        description: string;
        createdAt: Date;
    }
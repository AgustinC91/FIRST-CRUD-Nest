import { TaskStatus } from "../task.entity";
import {IsNotEmpty, IsString, MinLength, IsOptional, IsIn} from 'class-validator'


export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    title: string;
    @IsString()
    description: string;
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus;
}
import { IsString, IsNumber } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  name: string;
  @IsNumber()
  cost: number;
  createdAt: string;
}

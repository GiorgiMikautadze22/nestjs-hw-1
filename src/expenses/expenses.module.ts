import { Module } from '@nestjs/common';
import { ExpenseController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
@Module({
  imports: [],
  controllers: [ExpenseController],
  providers: [ExpensesService],
})
export class ExpenseModule {}

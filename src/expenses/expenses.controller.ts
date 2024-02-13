import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpenseManager } from 'interfaces';

@Controller('/expenses')
export class ExpenseController {
  constructor(private expensesService: ExpensesService) {}
  @Get()
  getExpenses() {
    return this.expensesService.getExpenses();
  }

  @Get('/:id')
  getExpense(@Param('id') id) {
    return this.expensesService.getExpense(parseInt(id));
  }

  @Post()
  createExpense(@Body() body: ExpenseManager) {
    return this.expensesService.createExpense(body);
  }

  @Put(':id')
  updateExpense(@Param('id') id, @Body() body: ExpenseManager) {
    return this.expensesService.updateExpense(parseInt(id), body);
  }

  @Delete(':id')
  deleteExpense(@Param('id') id) {
    return this.expensesService.deleteExpense(parseInt(id));
  }
}

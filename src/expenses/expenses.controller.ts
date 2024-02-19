import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpenseManager } from 'interfaces';
import { KeyGuard, UserGuard } from './expenses.guard';
import { CreateExpenseDto } from './dtos/create-user.dto';

@Controller('/expenses')
export class ExpenseController {
  constructor(private expensesService: ExpensesService) {}
  @UseGuards(KeyGuard)
  @Get()
  getExpenses() {
    return this.expensesService.getExpenses();
  }

  @UseGuards(KeyGuard)
  @Get('/:id')
  getExpense(@Param('id') id) {
    return this.expensesService.getExpense(parseInt(id));
  }

  @UseGuards(UserGuard)
  @Post()
  createExpense(@Body() body: CreateExpenseDto) {
    return this.expensesService.createExpense(body);
  }
  @UseGuards(UserGuard)
  @Put(':id')
  updateExpense(@Param('id') id, @Body() body: ExpenseManager) {
    return this.expensesService.updateExpense(parseInt(id), body);
  }
  @UseGuards(UserGuard)
  @Delete(':id')
  deleteExpense(@Param('id') id) {
    return this.expensesService.deleteExpense(parseInt(id));
  }
}

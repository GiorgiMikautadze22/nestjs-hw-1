import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExpenseManager } from '../../interfaces';

const moment = require('moment');
const path = require('path');
const fs = require('fs').promises;
const filePath = path.join(__dirname, '../../../data.json');

async function readExpenseManager() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const expenseManager = JSON.parse(data);
    return expenseManager;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
}

@Injectable()
export class ExpensesService {
  async getExpenses(): Promise<ExpenseManager[]> {
    try {
      const expenseManager = await readExpenseManager();
      return expenseManager;
    } catch (error) {
      console.log('Error getting expenses:', error);
    }
  }

  async getExpense(id: number): Promise<ExpenseManager> {
    try {
      const expenseManager = await readExpenseManager();
      const expeense = expenseManager.find(
        (expense: ExpenseManager) => expense.id === id,
      );

      if (!expeense) {
        throw new HttpException('User not found', 404);
      }
      return expeense;
    } catch (error) {
      console.log('Error getting expense:', error);
    }
  }

  async createExpense(expense: ExpenseManager): Promise<ExpenseManager> {
    try {
      const expenseManager = await readExpenseManager();
      const lastId = expenseManager[expenseManager.length - 1].id;
      expense.id = lastId ? lastId + 1 : 1;
      expense.createdAt = moment().format('DD/MM/YYYY');
      expenseManager.push(expense);
      await fs.writeFile(filePath, JSON.stringify(expenseManager, null, 2));
      console.log(expenseManager);

      return expense;
    } catch (error) {
      console.log('Error creating expense:', error);
    }
  }

  async updateExpense(
    id: number,
    expense: ExpenseManager,
  ): Promise<ExpenseManager> {
    try {
      const expenseManager = await readExpenseManager();
      const index = expenseManager.findIndex(
        (exp: ExpenseManager) => exp.id === id,
      );
      if (index === -1) {
        throw new HttpException('User not found', 404);
      }
      let currentExpense = expenseManager[index];
      const ChnagedExpense = {
        ...currentExpense,
        ...expense,
      };

      expenseManager[index] = ChnagedExpense;
      await fs.writeFile(filePath, JSON.stringify(expenseManager, null, 2));
      console.log(expenseManager);
      return expense;
    } catch (error) {
      console.log('Error updating expense:', error);
    }
  }

  async deleteExpense(id: number): Promise<ExpenseManager> {
    try {
      const expenseManager = await readExpenseManager();
      const index = expenseManager.findIndex(
        (exp: ExpenseManager) => exp.id === id,
      );
      if (index === -1) {
        throw new HttpException('User not found', 404);
      }
      const deletedExpense = expenseManager[index];
      expenseManager.splice(index, 1);
      await fs.writeFile(filePath, JSON.stringify(expenseManager, null, 2));
      console.log(expenseManager);
      return deletedExpense;
    } catch (error) {
      console.log('Error deleting expense:', error);
    }
  }
}

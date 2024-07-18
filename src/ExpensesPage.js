import React from 'react';
import { useBudgets } from './contexts/BudgetsContext';
import { Table, Container } from 'react-bootstrap';

export default function ExpensesPage() {
  const { budgets, expenses } = useBudgets();

  const groupedExpenses = budgets.map(budget => {
    const budgetExpenses = expenses.filter(expense => expense.budgetId === budget.id);
    return { ...budget, expenses: budgetExpenses };
  });

  return (
    <Container className="my-3">
      <h1 className="mb-3">All Expenses</h1>
      {groupedExpenses.map(group => (
        <div key={group.id}>
          <h2>{group.name}</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {group.expenses.map(expense => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </Container>
  );
}

import { useState } from "react";
import ExpensesFilter from "../UI/ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const selectedYear = (value) => {
    setYear(value);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <div className="div-container">
      <div>
        <ExpensesFilter selected={year} onSelectedYearChange={selectedYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
}
export default Expenses;

import { useState } from "react";
import ExpensesFilter from "../UI/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const selectedYear = (value) => {
    setYear(value);
  };
  return (
    <div className="div-container">
      <div>
        <ExpensesFilter selected={year} onSelectedYearChange={selectedYear} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </div>
    </div>
  );
}
export default Expenses;

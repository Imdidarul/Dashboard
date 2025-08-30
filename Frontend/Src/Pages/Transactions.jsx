import { useEffect, useState } from "react";
import { getTransactions, addTransaction } from "../services/transactionService";
import { Card, CardContent } from "../Components/Ui/card";
import  Button from "../Components/Ui/button";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const loadTransactions = async () => {
    const res = await getTransactions();
    setTransactions(res);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  const handleAdd = async () => {
    await addTransaction({ title: "Test Expense", amount: 100, type: "expense" });
    loadTransactions();
  };

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold mb-2">Transactions</h2>
        <Button onClick={handleAdd} className="mb-4">Add Transaction</Button>
        <ul>
          {transactions.map((t) => (
            <li key={t._id} className="flex justify-between border-b p-2">
              {t.title} – ${t.amount} ({t.type})
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

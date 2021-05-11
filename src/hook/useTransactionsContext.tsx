import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface transactionsProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type transactionsInputProps = Omit<transactionsProps, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode,
}

interface TransactionContextData {
  transactions: transactionsProps[];
  createTransaction: (transactions: transactionsInputProps) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<transactionsProps[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionsInput: transactionsInputProps) {
    const response = await api.post('/transactions', {
      ...transactionsInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactionsContext() {
  const context = useContext(TransactionsContext);

  return context;
}
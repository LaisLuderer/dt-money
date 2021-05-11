import { useState } from 'react';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal/NewTransactionModal';
import { TransactionsProvider } from './hook/useTransactionsContext';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

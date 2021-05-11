import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactionsContext } from '../../hook/useTransactionsContext';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactionsContext();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  /* armazenar qual dos botões está selecionado. Entrada|Saída */
  const [type, setType] = useState('income');

  function handleSetTypeIncome() {
    setType('income');
  }

  function handleSetTypeOutcome() {
    setType('outcome');
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      type,
      amount,
      category,
    });

    setTitle('');
    setAmount(0);
    setType('income');
    setCategory('');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button type='button' onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction} >
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>

          <RadioBox
            type="button"
            onClick={handleSetTypeIncome}
            isActive={type === 'income'}
            activeColor='#33cc95'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={handleSetTypeOutcome}
            isActive={type === 'outcome'}
            activeColor='#e52e4d'
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container >
    </Modal>
  );
}
import { useTransactionsContext } from '../../hook/useTransactionsContext';

import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';


export function Summary() {
  const { transactions } = useTransactionsContext();

  const calcSummary = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === 'income') {
      accumulator.income += transaction.amount;
      accumulator.total += transaction.amount;
    }
    else {
      accumulator.outcome += transaction.amount;
      accumulator.total -= transaction.amount;
    }

    return accumulator;
  }, {
    income: 0,
    outcome: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            /* no formato de moeda esse numero */
            style: 'currency',
            /* tipo da moeda = Real */
            currency: 'BRL'
          }).format(calcSummary.income)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeImg} alt="Saída" />
        </header>
        <strong className='outcomeValue'>
          -
          {new Intl.NumberFormat('pt-BR', {
          /* no formato de moeda esse numero */
          style: 'currency',
          /* tipo da moeda = Real */
          currency: 'BRL'
        }).format(calcSummary.outcome)}
        </strong>
      </div>

      <div className='total'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            /* no formato de moeda esse numero */
            style: 'currency',
            /* tipo da moeda = Real */
            currency: 'BRL'
          }).format(calcSummary.total)}
        </strong>
      </div>
    </Container>
  );
}
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { Container } from "./styles";


export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="entradas" />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <p>Entradas</p>
          <img src={outcome} alt="saidas" />
        </header>
        <strong>R$ 1.259,00</strong>
      </div>

      <div>
        <header>
          <p>Entradas</p>
          <img src={total} alt="total" />
        </header>
        <strong>R$ 16.141,00</strong>
      </div>
    </Container>
  );
}
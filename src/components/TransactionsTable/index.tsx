import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          <td>Desenvolvimento de site</td>
          <td>R$ 12.000,00</td>
          <td>Venda</td>
          <td>13/04/2021</td>
        </tbody>

        <tbody>
          <td>Hamburguer</td>
          <td>- R$ 59,00</td>
          <td>Alimentação</td>
          <td>10/04/2021</td>
        </tbody>

      </table>
    </Container>
  );
}
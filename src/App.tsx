import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transactions',
          mount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    });
  }
})

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard/>
    </>
  );
}

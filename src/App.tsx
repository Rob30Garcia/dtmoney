import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboar } from "./components/Dashboard";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboar />
    </>
  );
}

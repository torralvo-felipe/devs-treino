import { UserInfo } from "./components/UserInfo";

const App = () => {
  const isLoggeed = true;

  if(!isLoggeed) {
    return <h1>Faça login para acessar o conteúdo</h1>
  }

  return (
    <div>
      <h1>Olá, Vite + React!</h1>
      <UserInfo />
    </div>
  );
}

export default App;
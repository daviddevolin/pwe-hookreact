import React, { useContext } from "react";
import { AuthProvider, AuthContext } from "./AuthProvier";

const UserName = () => {
  const [user, setUser] = useContext(AuthContext);

  return (
    <div>
      Olá {user.name}
      <button onClick={() => setUser(false)}>Sair</button>
    </div>
  );
};

const Login = () => {
  const [, setUser] = useContext(AuthContext);

  return <button onClick={() => setUser({ name:document.getElementById('input').value })}>Entrar</button>;
};

const Main = () => {
  const [user] = useContext(AuthContext);
  return user ? <UserName /> : <Login />;
};

export default function App() {
  return (
    <AuthProvider>
      <>
        {/* <h1>Codar.me - React Context API</h1> */}
        <input placeholder="nome" id="input"/>
        
        <Main />
      </>
    </AuthProvider>
  );
}
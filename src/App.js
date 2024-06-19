import logo from './logo.png';
import './App.css';
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: 115, height: 115, marginTop: 30 }} />
        <AuthProvider>
        <RoutesApp />
        <GlobalStyle />
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
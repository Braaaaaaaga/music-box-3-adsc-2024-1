// Importações necessárias
import "./utils/globals.css"; // Estilos globais da aplicação
import Rotas from "./routes"; // Componente de rotas da aplicação
import 'react-toastify/dist/ReactToastify.css'; // Estilos para as notificações do Toastify
import { ToastContainer } from 'react-toastify'; // Componente de container para as notificações do Toastify

// Componente principal App
function App() {
  return (
    <>
      {/* Renderização do componente de rotas */}
      <Rotas />
      {/* Renderização do container de notificações do Toastify */}
      <ToastContainer />
    </>
  );
}

// Exportação do componente App
export default App;
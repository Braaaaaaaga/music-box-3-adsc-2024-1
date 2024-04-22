import "./utils/globals.css";
import Rotas from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <Rotas />
      <ToastContainer />
    </>
  );
}
export default App;
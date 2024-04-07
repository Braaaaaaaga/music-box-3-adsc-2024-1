// Importa a instância configurada do Axios para fazer requisições HTTP.
import api from "./api";

// Define o componente App, o principal do aplicativo.
function App() {

  // Função para fazer uma requisição GET usando a instância do Axios importada.
  function listar() {
    api.get()
      .then((respostaObtida) => {
        // Se a requisição for bem-sucedida, exibe a resposta no console.
        console.log(respostaObtida);
      })
      .catch((erroOcorrido) => {
        // Se a requisição falhar, exibe o erro no console.
        console.log(erroOcorrido);
      })
  }

  // Renderiza o conteúdo do componente, incluindo um título e um botão que, ao ser clicado, chama a função `listar`.
  return (
    <>
      <h1>Titulo</h1>
      <button onClick={listar}>Listar</button>
    </>
  );
}

// Torna o componente App disponível para uso em outras partes do aplicativo.
export default App;
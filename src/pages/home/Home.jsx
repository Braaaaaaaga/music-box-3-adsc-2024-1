// Importa React de 'react' para criar componentes
import React from "react";
// Importa o arquivo de estilos CSS específico para este componente
import styles from "./Home.module.css";
// Importa o logotipo a ser usado na NavBar
import logo from "../../utils/assets/logo.svg";
// Importa o componente NavBar para ser usado como parte do layout
import NavBar from "../../components/navbar/NavBar";
// Importa a imagem de fundo principal da página
import imgPrincipal from "../../utils/assets/img-fundo-principal.png";

// Define o componente funcional Home
const Home = () => {
    return (
        // Fragmento React para agrupar múltiplos elementos sem adicionar um nó extra ao DOM
        <>
            {/* Renderiza o componente NavBar, passando o logotipo importado como propriedade */}
            <NavBar logoInicio={logo} />
            {/* Contêiner para a imagem de fundo e o título da página */}
            <div className={styles["background-image"]}>
                {/* Imagem de fundo principal */}
                <img src={imgPrincipal} alt="Imagem de fundo" />
                {/* Contêiner para o título e o botão de ação */}
                <div className={styles["titulo"]}>
                    {/* Título da página com uma parte destacada */}
                    <h1>
                        Deixe a música <span> sair da caixa</span>
                    </h1>
                    {/* Botão de ação para "Começar", provavelmente leva o usuário a explorar ou se inscrever */}
                    <button>Começar</button>
                </div>
            </div>
        </>
    );
};
// Exporta o componente Home para que possa ser usado em outras partes da aplicação
export default Home;

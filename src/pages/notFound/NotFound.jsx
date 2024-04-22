import React from "react"; // Importa React, necessário para usar JSX e componentes
import styles from "./NotFound.module.css"; // Importa o arquivo CSS para estilização do componente
import logo from "../../utils/assets/logo.svg"; // Importa o logotipo a ser usado na NavBar
import NavBar from "../../components/navbar/NavBar"; // Importa o componente NavBar
import imgNotFound from "../../utils/assets/404.svg"; // Importa a imagem que representa o erro 404

// Define o componente funcional NotFound
const NotFound = () => {
    return (
        // Fragmento React, permite agrupar uma lista de filhos sem adicionar nós extras ao DOM
        <>
            <NavBar logoInicio={logo} /> {/* Inclui a NavBar no topo da página, passando o logo como propriedade */}
            <div className={styles["content"]}> {/* Define um contêiner com classe para estilização específica */}
                <h1>Página não encontrada</h1> {/* Título exibido para o usuário indicando que a página não foi encontrada */}
                <img src={imgNotFound} alt="Erro 404" /> {/* Mostra uma imagem de erro 404 */}
            </div>
        </>
    );
};

export default NotFound; // Exporta o componente NotFound para que possa ser utilizado em outras partes da aplicação
// Importa o React de 'react' para permitir a criação de componentes.
import React from 'react';
// Importa o arquivo de estilos CSS específico para este componente.
import styles from './NavBar.module.css';
// Importa o hook useNavigate do React Router DOM para possibilitar a navegação entre páginas.
import { useNavigate } from 'react-router-dom';
// Importa o hook useLocation do React Router DOM para obter informações sobre a localização atual.
import { useLocation } from 'react-router-dom';

// Define o componente NavBar como uma função que recebe propriedades, neste caso, 'logoInicio'.
const NavBar = ({ logoInicio }) => {
    // Utiliza o hook useNavigate para obter uma função de navegação.
    const navigate = useNavigate();
    // Utiliza o hook useLocation para obter o objeto de localização atual.
    const location = useLocation();
    // Verifica se a página atual é a página de adicionar música.
    const isAdicionarPage = location.pathname === "/adicionar";
    // Determina a classe do botão com base na página atual.
    const buttonClass = isAdicionarPage ? `${styles['logo-fim']} ${styles['active']}` : styles['logo-fim'];
    
    // Retorna o JSX que representa a barra de navegação.
    return (
        <nav className={styles["navbar"]}>
            {/* Elemento de imagem que representa o logo do início */}
            <img onClick={() => navigate("/")} src={logoInicio} className={styles["logo-inicio"]} alt="Logo Início" />
            {/* Botão que permite alternar entre as páginas de adicionar música e visualizar músicas */}
            <button onClick={() => isAdicionarPage ? navigate("/musicas") : navigate("/adicionar")} className={buttonClass}>
                {isAdicionarPage ? "Ver Músicas" : "Adicionar"}
            </button>
        </nav>
    );
};

// Exporta o componente NavBar para que possa ser usado em outras partes da aplicação.
export default NavBar;
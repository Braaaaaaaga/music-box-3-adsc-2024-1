// Importa o React de 'react' para permitir a criação de componentes.
import React from 'react';
// Importa o arquivo de estilos CSS específico para este componente.
import styles from './NavBar.module.css';

// Define o componente NavBar como uma função que recebe propriedades, neste caso, 'logoInicio'.
const NavBar = ({ logoInicio }) => {
    return (
        // Cria a barra de navegação utilizando a tag <nav> com uma classe aplicada para estilização.
        <nav className={styles["navbar"]}>
            {/* Inclui uma imagem (logotipo) na barra de navegação. 
                A origem da imagem é determinada pela propriedade 'logoInicio' passada ao componente. 
                A classe "logo-inicio" é aplicada para estilização específica da imagem. */}
            <img src={logoInicio} className={styles["logo-inicio"]} alt="Logo Início" />
            {/* Inclui um botão na barra de navegação com o texto "Ver Musicas".
                A classe "logo-fim" é aplicada para estilização, apesar do nome sugerir que deveria ser para um logotipo, 
                parece ser usado aqui para estilizar o botão. */}
            <button className={styles['logo-fim']}>Ver Musicas</button>
        </nav>
    );
};

// Exporta o componente NavBar para que possa ser usado em outras partes da aplicação.
export default NavBar;

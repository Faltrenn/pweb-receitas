import React from "react";

const Home: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Bem-vindo à Home Page!</h1>
      <p>
        Essa é a página inicial do nosso site. Explore as outras páginas para
        ver mais conteúdo.
      </p>
      <a href="/about" style={{ color: "blue", textDecoration: "underline" }}>
        Saiba mais sobre nós
      </a>
    </div>
  );
};

export default Home;

import React from "react";

const About: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Sobre Nós</h1>
      <p>
        Somos uma equipe dedicada a criar experiências incríveis na web. Nosso
        objetivo é trazer valor e inovação através de tecnologia.
      </p>
      <a href="/contact" style={{ color: "blue", textDecoration: "underline" }}>
        Entre em contato
      </a>
    </div>
  );
};

export default About;

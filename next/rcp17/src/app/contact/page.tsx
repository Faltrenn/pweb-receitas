import Link from "next/link";
import { MariaPrea, JoaoPrea, Mensagem } from "./componentes";
import { HeaderComponent } from "./components/header";
import { FooterComponent } from "./components/footer";
import ComponentA from "../about/page";

import React from "react";

const Contact: React.FC = () => {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div>
        <HeaderComponent />
        <br />
        <h1>Entre em Contato Conosco</h1>
        <p>
          Temos o prazer de ouvir sua opinião! Envie-nos suas sugestões ou
          dúvidas.
        </p>
        <Link href="/contact/subrota" passHref>
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Acesse a Sub-Rota
          </span>
        </Link>
        <br />
        <br />
        <MariaPrea />
        <JoaoPrea />
        <ComponentA />
        <br />
        <Mensagem mensagem="Sua mensagem foi recebida com sucesso. Em breve, entraremos em contato!" />
        <FooterComponent />
      </div>
      <h2>Fale Conosco</h2>
      <p>
        Para mais informações, entre em contato através do e-mail:{" "}
        <strong>suporte@exemplo.com</strong>
      </p>
      <p>Caso prefira, você também pode nos encontrar nas redes sociais:</p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link href="https://www.instagram.com/empresa" passHref>
            <span rel="noopener noreferrer">Instagram</span>
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/empresa" passHref>
            <span rel="noopener noreferrer">Facebook</span>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/empresa" passHref>
            <span rel="noopener noreferrer">Twitter</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

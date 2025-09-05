import { Copyright, Github, Linkedin, Mail } from "lucide-react";
import "./Footer.css";
import "./Footer.css";
// import Lupa from "./Lupa";

function Footer() {
  return (
    <section className="footer">
      <div className="container-footer">
        <p>
          <span>
            <Copyright />
          </span>{" "}
          2025 Nalanda Santos. Todos os direitos reservados.
        </p>
        {/* <div className="links-footer">
          <a href="https://github.com/nalandasouza" target="_blank">
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/nalanda-santos-60b65a264"
            target="_blank"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:nalandasantos.dev@gmail.com">
            <Mail size={24} />
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Footer;

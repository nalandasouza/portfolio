import { Github, Linkedin, Mail, Phone } from "lucide-react";
import "./Contacts.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Contacts() {
  useEffect(() => {
    ScrollReveal().reveal(".contacts-link", {
      origin: "top",
      duration: 2500,
      distance: "15%",
    });
  }, []);

  return (
    <section id="contacts" className="contacts">
      <h2>Contatos</h2>
      <p className="invite">
        Vamos conversar sobre seu próximo projeto? Estou disponível para novas
        oportunidades e pronta para colaborar. Se você busca alguém dedicada e
        comprometida, entre em contato!
      </p>
      <div className="container-contacts">
        <div className="contacts-link">
          <a className="social" href="mailto:nalandasantos.dev@gmail.com">
            <span>
              <a className="contacts-icon">
                <Mail size={28} />
              </a>
            </span>
            <div className="text-contacts">
              <h3>E-mail</h3>
              <p>nalandasantos.dev@gmail.com</p>
            </div>
          </a>

          <a
            className="social"
            href="https://linkedin.com/in/nalanda-santos-60b65a264"
            target="_blank"
          >
            <span>
              <a className="contacts-icon">
                <Linkedin size={28} />
              </a>
            </span>
            <div className="text-contacts">
              <h3>Linkedin</h3>
              <p>@nalandasantos</p>
            </div>
          </a>
        </div>
        <div className="contacts-link">
          <a
            className="social"
            href="https://wa.me/75999475942?text=Ol%C3%A1%20Nalanda!%20Gostaria%20de%20conversar%20sobre%20projetos%20e%20possibilidades%20de%20desenvolvimento%20com%20voc%C3%AA."
            target="_blank"
          >
            <span>
              <a className="contacts-icon">
                <Phone size={28} />
              </a>
            </span>
            <div className="text-contacts">
              <h3>Telefone</h3>
              <p>(75) 99947-5942</p>
            </div>
          </a>
          <a
            className="social"
            href="https://github.com/nalandasouza"
            target="_blank"
          >
            <span>
              <a className="contacts-icon">
                <Github size={28} />
              </a>
            </span>
            <div className="text-contacts">
              <h3>Github</h3>
              <p>@nalandasouza</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

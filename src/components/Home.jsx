import { Download, Github, Linkedin, Mail, SendHorizontal } from "lucide-react";
import "./Home.css";
import { CircleGrid } from "react-awesome-shapes";
import Typewriter from "../utils/Typewriter";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Home() {
  useEffect(() => {
    ScrollReveal().clean(".big-anim, .mob-inv, .media-texts");

    ScrollReveal().reveal(".big-anim", {
      origin: "left",
      duration: 1000,
      distance: "10%",
    });

    ScrollReveal().reveal(".mob-inv", {
      origin: "right",
      duration: 1000,
      distance: "10%",
    });

    ScrollReveal().reveal(".media-texts", {
      origin: "top",
      duration: 1000,
      distance: "10%",
    });

    ScrollReveal().reveal(".media-p", {
      origin: "top",
      duration: 1500,
      distance: "10%",
    });
  }, []);

  return (
    <section id="about" className="about">
      <div className="texts">
        {/* <h1>
          Olá, eu sou <span>Nalanda Santos &lt;&#47;&gt;</span>
        </h1> */}
        <Typewriter html="Olá, eu sou <span>Nalanda Santos <&#47></span>" />
        <p className="big-anim">
          Sou uma <strong>desenvolvedora full-stack</strong> em constante
          evolução. Transformo ideias em aplicações completas, criando
          interfaces intuitivas que fazem sentido para quem está do outro lado
          da tela. Mais do que linhas de código, o que me move é criar
          experiências digitais que entreguem valor real, com eficácia e
          intenção. Estou focada em desenvolver soluções que resolvem problemas
          e que geram impacto positivo para pessoas e negócios. E sim, o café é
          meu copiloto fiel nessa jornada — forte e amargo.
        </p>
        <div className="buttons">
          <a
            href="/assets/curriculo.pdf"
            id="download"
            className="btn btn_outlined"
            download="Desenvolvedora Fullstack - Nalanda Santos.pdf"
          >
            Download CV <Download size={16} />
          </a>
          <a
            href="https://wa.me/75999475942?text=Ol%C3%A1%20Nalanda!%20Gostaria%20de%20conversar%20sobre%20projetos%20e%20possibilidades%20de%20desenvolvimento%20com%20voc%C3%AA."
            className="btn btn_filled"
            target="_blank"
          >
            Entrar em contato <SendHorizontal size={16} />
          </a>
        </div>
      </div>
      <div className="media-home">
        <div className="profile">
          <div className="media-texts">
            {/* <h1>
              Olá, eu sou <br /> <span>&lt; Nalanda Santos &#47;&gt;</span>
            </h1> */}
            <Typewriter html="Olá, eu sou <br><span>&lt&nbspNalanda Santos&nbsp&#47></span>" />
            <img className="tab-inv" src="./assets/img-profile.png" alt="Foto da desenvolvedora" />
            <div className="buttons">
              <a
                href="/assets/curriculo.pdf"
                id="download"
                className="btn btn_outlined"
                download="Desenvolvedora Fullstack - Nalanda Santos.pdf"
              >
                Download CV <Download size={16} />
              </a>
              <a
                href="https://wa.me/75999475942?text=Ol%C3%A1%20Nalanda!%20Gostaria%20de%20conversar%20sobre%20projetos%20e%20possibilidades%20de%20desenvolvimento%20com%20voc%C3%AA."
                className="btn btn_filled"
              >
                Entrar em contato <SendHorizontal size={16} />
              </a>
            </div>
          </div>
          <div className="mob-inv">
            <CircleGrid
              position="absolute"
              color="var(--accent)"
              size="150px"
              zIndex={1}
              top="-4%"
              left=""
              className="circle one"
            />
            <CircleGrid
              position="absolute"
              color="var(--accent)"
              size="150px"
              zIndex={1}
              top="27%"
              left="26%"
              className="circle one"
            />
            <img src="./assets/img-profile.png" alt="Foto da desenvolvedora" />
            <div className="links">
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
            </div>
          </div>
        </div>
        <div className="media-card">
          <h3 className="media-sub">Sobre mim</h3>
          <p className="media-p">
            Sou uma <strong>desenvolvedora full-stack</strong> em constante
            evolução. Transformo ideias em aplicações completas, criando
            interfaces intuitivas que fazem sentido para quem está do outro lado
            da tela. Mais do que linhas de código, o que me move é criar
            experiências digitais que entreguem valor real, com eficácia e
            intenção. Estou focada em desenvolver soluções que resolvem
            problemas e que geram impacto positivo para pessoas e negócios. E
            sim, o café é meu copiloto fiel nessa jornada — forte e amargo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;

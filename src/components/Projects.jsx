import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Projects() {
  const projects = [
    {
      title: "Blog Fullstack",
      description: "Aplicação web fullstack com autenticação, CRUD de postagens, upload de imagens, responsividade e filtro por categorias. Desenvolvido com React no front-end e Node.js + MySQL no back-end. Deploy completo na AWS.",
      tech: ["React", "Nodejs", "MySQL ", "Express"],
      githubLink: "https://github.com/nalandasouza/blog-fullstack",
      projLink: "https://demo-blog.nalanda.dev/",
      image:
        "https://github.com/nalandasouza/blog-fullstack/blob/main/screenshots/responsive.png?raw=true",
    },
    {
      title: "Site institucional para nutricionista (Freelance)",
      description: "Site responsivo desenvolvido com HTML, CSS e JavaScript, utilizando jQuery e ScrollReveal para animações. Design mobile-first, otimizado para performance e SEO básico, com integração a WhatsApp, Instagram e e-mail.",
      tech: ["HTML", "CSS", "JavaScript", "Jquery"],
      githubLink: null,
      projLink: "https://nayellenutri.com/",
      image: "./assets/img-nayellenutri.png",
    },
    {
      title: "Sistema de Gestão de Autores e Livros",
      description:
        "Aplicação backend com Node.js, Express e MongoDB, que realiza operações CRUD para autores e livros, com paginação, filtros e tratamento de erros personalizado.",
      tech: ["Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/nalandasouza/api-nodejs",
      projLink: null,
      image: "./assets/img-code.png",
    },
    {
      title: "Landing page para restaurante",
      description: "Desenvolvida com HTML, CSS e JavaScript (jQuery + ScrollReveal), inclui design moderno, navegação fluida, seção de avaliações e integração com redes sociais/WhatsApp. Totalmente responsiva.",
      tech: ["HTML", "CSS", "JavaScript", "Jquery"],
      githubLink: "https://github.com/nalandasouza/landing-page",
      projLink: "https://landing-page-ebon-alpha.vercel.app/",
      image:
        "https://raw.githubusercontent.com/nalandasouza/landing-page/refs/heads/main/screenshot.png",
    },
    {
      title: "API RESTful para To-Do List",
      description:
        "API RESTful desenvolvida com Node.js, Express e MySQL. Inclui rotas completas de CRUD, conexão com banco de dados e estrutura organizada para facilitar a manutenção e escalabilidade.",
      tech: ["Node.js", "Express", "MySQL"],
      githubLink: "https://github.com/nalandasouza/backend-todolist",
      projLink: null,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      title: "Calculadora IMC",
      description:
        "Aplicação web responsiva que calcula o IMC a partir do peso e altura, exibindo resultados claros. Desenvolvida com HTML, CSS e JavaScript, com foco em design moderno e usabilidade.",
      tech: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/nalandasouza/calculadora-IMC",
      projLink: "https://calculadora-imc-opal.vercel.app",
      image: "https://github.com/nalandasouza/calculadora-IMC/blob/main/screenshot.png?raw=true",
    },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".projects-container", {
      origin: "left",
      duration: 2500,
      distance: "10%",
    });
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="card-project">
            <img src={project.image} alt="Imagem do projeto" />
            <div className="content-card">
              <div className="proj-texts">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stacks">
                  {project.tech.map((stack, index) => (
                    <span key={index}>{stack}</span>
                  ))}
                </div>
              </div>
              <div className="proj-links">
                {project.githubLink &&
                  <a className="btn btn_outlined" href={project.githubLink} target='_blank'>
                    <Github size={24} />
                    <p>Código</p>
                  </a>
                }
                {project.projLink &&
                  <a className="btn btn_filled" href={project.projLink} target='_blank'>
                    <ExternalLink size={24} />
                    <p>Demo</p>
                  </a>
                }
              </div>
            </div>
          </div>
        ))}
        
      </div>
      <a href="https://github.com/nalandasouza" className="btn btn_outlined btn-github" target="_blank">Ver todos os projetos no Github</a>
    </section>
  );
}

export default Projects;

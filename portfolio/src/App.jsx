import React, { useState } from "react";

const PROJECTS = [
  {
    title: "Multilog — Checklist Digital",
    tag: "Projeto sob demanda",
    desc: "[[ Espaço reservado — em breve as informações completas sobre o projeto Multilog vão aqui. ]]",
    stack: [],
    status: "Em breve",
    placeholder: true,
  },
  {
    title: "Sistema de Farmácia Hospitalar",
    tag: "Sistema",
    desc: "Sistema de gestão para farmácia hospitalar — controle de estoque, dispensação e rastreabilidade de medicamentos.",
    stack: ["Spring Boot", "PostgreSQL", "Docker"],
    status: "Concluído",
  },
];

function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">GL</span>
      <div className="nav-links">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">Ciência da Computação — Mackenzie</p>
      <h1>
        Gabriel Lopes
        <span className="hero-sub">constrói sistemas e pensa em segurança.</span>
      </h1>
      <p className="hero-desc">
        Desenvolvedor full stack em formação, com foco em backend (Spring Boot,
        Docker, PostgreSQL) e trilha crescente em cibersegurança — caminhando
        para atuar com AppSec e Security Engineering.
      </p>
      <div className="hero-cta">
        <a href="#projetos" className="btn-primary">Ver projetos</a>
        <a href="#contato" className="btn-ghost">Falar comigo</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="about">
      <h2>Sobre</h2>
      <p>
        Estudo Ciência da Computação na Universidade Presbiteriana Mackenzie,
        em São Paulo, e construo produtos enquanto aprendo — do back-end à
        segurança da aplicação. Gosto de projetos que resolvem um problema
        real: de sistemas internos para empresas a SaaS pensados para gerar
        receita própria.
      </p>
      <p>
        Hoje divido o tempo entre a graduação, projetos autorais e um roteiro
        de estudos que une desenvolvimento backend e cibersegurança — a ideia
        é sair da faculdade pronto para atuar tanto construindo quanto
        protegendo sistemas.
      </p>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className={`card ${project.placeholder ? "card-placeholder" : ""}`}>
      <div className="card-top">
        <span className="card-tag">{project.tag}</span>
        <span className="card-status">{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      {project.stack.length > 0 && (
        <div className="card-stack">
          {project.stack.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="projetos" className="projects">
      <h2>Projetos</h2>
      <div className="grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "gabriel@gabriellopes.com";

  const copyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contato" className="contact">
      <h2>Vamos conversar</h2>
      <p>
        Aberto a oportunidades em desenvolvimento backend e segurança de
        aplicações. Manda uma mensagem.
      </p>
      <button className="btn-primary" onClick={copyEmail}>
        {copied ? "E-mail copiado ✓" : email}
      </button>
      <div className="social-links">
        <a href="https://github.com/gabriellopessanches" target="_blank" rel="noreferrer">GitHub</a>
        <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>Gabriel Lopes © {new Date().getFullYear()}</span>
      <span>gabriellopes.com</span>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

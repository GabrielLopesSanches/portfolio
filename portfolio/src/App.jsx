import React, { useState } from "react";

const STACK = ["Java", "Spring", "React", "Docker", "PostgreSQL", "Redis"];

const PROJECTS = [
  {
    n: "01",
    title: "Multilog — Checklist Digital",
    tag: "Sob demanda",
    desc: "[[ Espaço reservado — em breve as informações completas sobre o projeto Multilog vão aqui. ]]",
    stack: [],
    status: "Em breve",
    placeholder: true,
  },
  {
    n: "02",
    title: "Sistema de Farmácia Hospitalar",
    tag: "Sistema de gestão",
    desc: "Controle de estoque, dispensação e rastreabilidade de medicamentos para farmácia hospitalar.",
    stack: ["Spring Boot", "PostgreSQL", "Docker"],
    status: "Concluído",
  },
];

function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">
        Gabriel <em>Lopes</em>
      </span>
      <div className="nav-links">
        <a href="#inicio"><b>01</b> Início</a>
        <a href="#sobre"><b>02</b> Sobre</a>
        <a href="#projetos"><b>03</b> Projetos</a>
        <a href="#contato"><b>04</b> Contato</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <p className="eyebrow">Olá, eu sou o Gabriel</p>
      <h1 className="hero-title">
        <span className="line">BACKEND</span>
        <span className="line accent-serif">&amp; segurança</span>
      </h1>
      <div className="hero-row">
        <p className="hero-desc">
          Estudante de Ciência da Computação no Mackenzie, construindo
          sistemas com Spring Boot e React enquanto trilho um caminho rumo a
          AppSec e Security Engineering.
        </p>
        <div className="hero-cta">
          <a href="#projetos" className="btn-pill btn-pill-solid">Ver projetos</a>
          <a href="#contato" className="btn-pill">Falar comigo</a>
        </div>
      </div>
      <ul className="stack-row">
        {STACK.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="about">
      <p className="about-lede">
        Onde a técnica encontra a prática, Gabriel constrói aplicações que
        resolvem problemas reais — do back-end à segurança da aplicação.
      </p>
      <p>
        Estudo Ciência da Computação na Universidade Presbiteriana Mackenzie,
        em São Paulo, e construo produtos enquanto aprendo. Gosto de projetos
        que resolvem um problema real: de sistemas internos para empresas a
        SaaS pensados para gerar receita própria.
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

function ProjectRow({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`proj-row ${project.placeholder ? "proj-placeholder" : ""}`}>
      <button className="proj-head" onClick={() => setOpen((o) => !o)}>
        <span className="proj-n">{project.n}</span>
        <span className="proj-title">{project.title}</span>
        <span className="proj-status">{project.status}</span>
        <span className="proj-toggle">{open ? "fechar" : "ver mais"}</span>
      </button>
      {open && (
        <div className="proj-body">
          <p>{project.desc}</p>
          {project.stack.length > 0 && (
            <div className="proj-stack">
              {project.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="projetos" className="projects">
      <h2>Projetos</h2>
      <div className="proj-list">
        {PROJECTS.map((p) => (
          <ProjectRow key={p.title} project={p} />
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
      <button className="btn-pill btn-pill-solid" onClick={copyEmail}>
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

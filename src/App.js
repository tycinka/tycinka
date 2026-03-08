import './index.css';
import Home from "./components/home/Home";
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Card from "./components/card/Card";
import Main from './layout/main';

function App() {
  return (
    <Main>
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="works">
          <Card link="https://www.boliga.cz/" title="Boliga.cz" year="2024" content="API built with Ruby on Rails, leveraging PostgreSQL for structured data management and advanced querying. Features include RESTful API design, authentication, background job handling, and modular architecture optimized for scalability, maintainability, and secure data flow." />
        </section>
      </main>
    </Main>
  );
}

export default App;

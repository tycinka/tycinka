import './index.css';
import Home from "./components/home/Home";
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Card from "./components/card/Card";
import Main from './layout/main';
import boliga from './assets/boliga.jpg';

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

        <section id="works" className="section-wrapper">
          <div className="works-heading">
            <h2>Things I've Built</h2>
          </div>
          <img className="works-image" src={boliga} alt="Boliga.cz homepage screenshot" />
          <Card link="https://www.boliga.cz/" title="Boliga.cz" year="2026" content="A REST API for a team-based badminton league: it handles seasons, groups, matches, rankings, and payments. It runs on Ruby on Rails and PostgreSQL, with Sidekiq for monthly automation, JWT for auth, and Postgres advisory locks to keep concurrent jobs safe." />
        </section>
      </main>
    </Main>
  );
}

export default App;

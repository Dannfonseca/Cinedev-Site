import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Home.css";
import fotoHome from "../../../public/fotoCinemaHome.png";

function Home() {
  return (
    <motion.div
      className={styles.divPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.homeDiv}>
        <Link to="/filmes">
          <img id="fotoHome" src="https://cultura.uol.com.br/upload/tvcultura/noticias/20201017080002_6minutos_shutterstock-204105922-1440x1080.jpg" width='1920px' height='700px'/>
        </Link>
        <div className="homeDiv">
          <h1> Sobre Nós</h1>
          <p className="sobre" id="sobreHome">
            {" "}
            Somos uma empresa criada por programadores que pensaram na proposta de trazer filmes
            sobre programação e tecnologia. Existe uma demanda grande
            do mercado te tecnologia por cinemas nichados na área
            e é exatamente esse público que visamos. Trazendo filmes premiados e
            um catálogo diferente a cada mês, além dos nossos eventos mensais e
            semestrais. Venha participar dessa aventura tecnológica em ver
            filmes incríveis e premiados!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;

import "./App.css";
import Perfil from "./componentes/Perfil";
import Contador from "./componentes/Contador";

function App() {
  return (
    <div className="App">
      <div class="contenedor-principal">
        <h1>Mis desarrolladores favoritos son</h1>
        <Perfil
          nombre="Brais Moure"
          pais="España"
          imagen="brais"
          cargo="Ingeniero de Software"
          empresa="MoureDev"
          perfil="Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev"
          linkedin="https://www.linkedin.com/in/braismoure/"
          youtube="https://www.youtube.com/@mouredev"
          twitter="https://twitter.com/mouredev"
        />
        <Perfil
          nombre="Soy Dalto"
          pais="Argentina"
          imagen="dalto"
          cargo="Ingeniero de Software"
          empresa="SoyDalto"
          perfil="Canal de programación y desarrollo #1 de Argentina."
          linkedin="https://www.linkedin.com/in/soy-dalto/"
          youtube="https://www.youtube.com/soydalto"
          twitter="https://twitter.com/SoyDalto"
        />
        <Perfil
          nombre="Fazt"
          pais="Colombia"
          imagen="fazt"
          cargo="Ingeniero de Software"
          empresa="Fazt"
          perfil="Fazt, el popular creador de contenido y programador, es originario de Colombia. Su nombre completo es José Manuel Lucas Fazt y es conocido por sus tutoriales y videos relacionados con la programación"
          linkedin="https://www.linkedin.com/groups/12455671/"
          youtube="https://www.youtube.com/fazttech"
          twitter="https://twitter.com/FaztTech"
        />
      </div>
    </div>
  );
}

export default App;

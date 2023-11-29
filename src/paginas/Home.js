import { Link } from "react-router-dom";
import Creaciones from "../Creations.json";

export default function Home() {
  console.log(localStorage.getItem('favoritos'))
  return (
    <div><br></br><br></br><br></br><br></br>
      <div className="TituloLista">
      No te pierdas de ver:
      </div>

        <div ><Link to={`/Creation/${Creaciones.list[3].name}`}>
        <div className="Listas">
          <div className="NombreLista">{Creaciones.list[3].name}</div>
        </div>
        <img src={Creaciones.list[3].image} className="image"/></Link>
        </div>

        <div ><Link to={`/Creation/${Creaciones.list[1].name}`}>
        <div className="Listas">
          <div className="NombreLista">{Creaciones.list[1].name}</div>
        </div>
        <img src={Creaciones.list[1].image} className="image"/></Link>
        </div>

        <div ><Link to={`/Creation/${Creaciones.list[4].name}`}>
        <div className="Listas">
          <div className="NombreLista">{Creaciones.list[4].name}</div>
        </div>
        <img src={Creaciones.list[4].image} className="image"/></Link>
        </div>

        <div ><Link to={`/Creation/${Creaciones.list[5].name}`}>
        <div className="Listas">
          <div className="NombreLista">{Creaciones.list[5].name}</div>
        </div>
        <img src={Creaciones.list[5].image} className="image"/></Link>
        </div>

        <div ><Link to={`/Creation/${Creaciones.list[6].name}`}>
        <div className="Listas">
          <div className="NombreLista">{Creaciones.list[6].name}</div>
        </div>
        <img src={Creaciones.list[6].image} className="image"/></Link>
        </div>

        <div ><Link to={`/Creation/${Creaciones.list[7].name}`}>
        <div className="Listas">
          <div className="NombreLista">{Creaciones.list[7].name}</div>
        </div>
        <img src={Creaciones.list[7].image} className="image"/></Link>
        </div>
        <br></br></div>
  );
}
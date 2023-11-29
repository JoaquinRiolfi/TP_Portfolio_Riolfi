import { Link } from "react-router-dom";
import Creaciones from "../Creations.json";

export default function Creations() {
  return (
    <div>
     <br />
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <br /><br /><br /><br /><br />
        <div style={{ textAlign: 'center', color: '#2e3440', fontSize: '48px', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Nunito, sans-serif' }}>
          Mis creaciones
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {Creaciones.list.map((creacion) => (
            <div key={creacion.name} style={{ textAlign: 'center', fontFamily: 'Nunito, sans-serif', fontSize: '14px', width: '30%', margin: '10px' }}>
              <Link to={`/Creation/${creacion.name}`}>
                <div style={{ marginBottom: '10px' }}>{creacion.name}</div>
                <img src={creacion.image} className="image" alt={creacion.name} style={{ width: '50%', height: 'auto' }} />
              </Link>
            </div>
          ))}
        </div>
        <br /><br />
      </div>
    </div>
  );
}

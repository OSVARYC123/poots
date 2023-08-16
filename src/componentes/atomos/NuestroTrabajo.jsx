import ImagenNuestroTrabajo from "../../assets/img/NuestroTrabajo.png";
import "../../assets/styles/NuestroTrabajo.css";

function NuestroTrabajo() {
  return (
    <div className="text-image-container-nt">
      <div className="image-content-nt">
        <img src={ImagenNuestroTrabajo} />
      </div>
      <div className="text-content-nt">
        <h2 className="txt-nt">Nuestro trabajo</h2>
        <p className="txt-descripcion">
          La mejor atención para nuestros clientes y la mayor disposición para
          que nuestros clientes queden satisfechos.
        </p>
      </div>
    </div>
  );
}
export default NuestroTrabajo;

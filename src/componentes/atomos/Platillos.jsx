import Plato1 from "../../assets/img/plato1.png";
import Plato2 from "../../assets/img/plato2.png";
import Plato3 from "../../assets/img/plato3.png";
import IconoPoots from "../../assets/img/IconoPoots.png"
import "../../assets/styles/Platillos.css";

function Platillos() {
  return (
    <div className="containerPlatillos">
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <div className="Pla1">
              <img src={Plato1} className="fotoPlatillos" />
              <h2 className="txt-nombrePlatillo">Pollo asado con verduras</h2>
              <p class="text-break">
                Las comidas mejores preparadas y con el mejor sazón de nuestros
                chefs para nuestros clientes
              </p>
            </div>
          </div>

          <div class="col">
            <div className="">
              <img src={Plato2} className="fotoPlatillos" />
              <h2 className="txt-nombrePlatillo">
                Filete de pollo con ensalada
              </h2>
              <p class="text-break">
                Platillo elaborado bajo en grasas por los mejores chefs.
              </p>
            </div>
          </div>

          <div class="col">
            <div className="">
              <img src={Plato3} className="fotoPlatillos3" />
              <h2 className="txt-nombrePlatillo">
                Pollo a la plancha con ensalada
              </h2>
              <p class="text-break">
                Comida preparada para cuidar la alimentacion bajo de grasas.
              </p>
              <img src="" />
            </div>
          </div>
        </div>
        <button className="btn-masPlatillos">
          <img src={IconoPoots}/>
          mostrar más platillos</button>
      </div>
    </div>
  );
}

export default Platillos;

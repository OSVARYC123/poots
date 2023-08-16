import "../../assets/styles/AcercaDe.css";
import Acercade from "../../assets/img/Acercade.png"
import { FaUsers } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { MdPayment } from "react-icons/md";


function AcercaDe() {
    return(
        <div className="rectangulo"> 

<div className="textoimagen">
        <div class="container text-center">
             <div class="zumzum">
             <div class="row">
    <div class="col">
    <div className="text-content">
      <div className="texto"> 
               <h2 className="txt-acerca">acerca de</h2>
             <p className="txt-descripcionacerca"> 
                Nuestro trabajo es llevado para cada uno de nuestros, 
                clientes que disfruten de Poot's
               con la mejor comida
               tradicional mexicana 
               de cada unos de los estados de 
              la república...</p>
              </div>


              <div className="conocermas">
                <div className="conocermas1">
              <button type="button" class="btn">conocer más</button>
              </div>
              </div>

          </div>
    </div>

    <div class="col">
    <div className="image-content">
                 <img src={Acercade} className="FotoAcercaDe"/> 
           </div>
    </div>
  </div>
</div>
</div>

  <div class="zum">
  <div class="row">
    <div class="col">
    <div class="card-body">
      <div className="car1">
        <div className="iperson"><FaUsers/></div>
      <h5 class="card-title"> Personal capacitado.</h5>
     <p class="card-text">Cada uno de nuestros trabajadores<br/> 
     tuvo la dedicación, entrega y<br/>
     compromiso para que nuestros clientes <br/> 
     disfruten de la mejor comida.</p>
          </div>
          </div>
    </div>

    <div class="col">
    <div class="card-body">
      <div className="car2">
        <div className="ifood"><MdFoodBank/></div>
         <h5 class="card-title">Comida de calidad.</h5>
        <p class="card-text">La comida es elabora con el fin de<br/>
        otorgar a nuestros clientes la mejor<br/>
        comida de cada estado del país. </p>
         </div>
         </div>
    </div>

    <div class="col">
    <div class="card-body">
      <div className="car3">
        <div className="ipay"><MdPayment/></div>
          <h5 class="card-title">Métodos de pago.</h5>
          <p class="card-text">Contamos con diversos métodos de <br/>
          pago para tener la mayor facilidad <br/>
         y comodidad para nuestros clientes. </p>
         </div>
          </div>
    </div>
  </div>
</div>
</div> 
      </div>


        );
}

export default AcercaDe;
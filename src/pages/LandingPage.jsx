// import Header from "../componentes/atomos/Header";
import Header2 from "../componentes/atomos/Header2"
import PortadaBienvenidos from "../componentes/atomos/PortadaBienvenidos";
import Comida from "../componentes/atomos/Comida";
import NuestroTrabajo from "../componentes/atomos/NuestroTrabajo";
import Platillos from "../componentes/atomos/Platillos";
// import CarouselPortada from "../componentes/atomos/CarouselPortada";
import AcercaDe from "../componentes/atomos/AcercaDe";
import Footer from "../componentes/atomos/Footer";

function LandingPage() {
  return (
    <>
      {/*       <Header></Header> */}
      <Header2></Header2>
      <PortadaBienvenidos></PortadaBienvenidos>
      <Comida></Comida>
      <NuestroTrabajo></NuestroTrabajo>
      <Platillos></Platillos>
      <AcercaDe></AcercaDe>
{/*       <CarouselPortada></CarouselPortada> */}
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
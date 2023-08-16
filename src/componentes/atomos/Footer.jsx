import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRef } from "react";
import "../../assets/styles/Footer.css";
import IconoPoots from "../../assets/img/IconoPoots.png";
import { GoLocation } from "react-icons/go";
import { MdCall } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Swal from 'sweetalert2'
import { PiTiktokLogoFill } from "react-icons/pi";
import { BiLogoFacebookCircle } from "react-icons/bi";


<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

function Footer() {
  const formDataF = useRef();
  const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formDataF.current);
    let URI = "http://localhost:80/Users";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Nombre: formData.get("name"),
        Telefono: formData.get("telefono"),
        Correo: formData.get("correo"),
      }),
    };
    fetch(URI, options).then((response) => response.json());
    Swal.fire({
      position: "top-center",
      height: 600,
      width: 614,
      padding:100,
      imageUrl:"https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png", 
      imageWidth:"200",
      imageHeight: "200",
      color: "#4B4124",
      title: "¡Registro exitoso!",
      text: JSON.stringify("Bienvenido"),
      confirmButtonText: "Aceptar",
      confirmButtonColor:"#568943",
      //showConfirmButton: false,
      // timer: 15500,
    });
  };

  return (
        <div className="fondo-footer">
      <div class="d-flex justify-content-around">
        <div className="formulario">
          <div className="p-2">
            <Form ref={formDataF}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="txt-formularios-nom">Nombre:</Form.Label>
                <Form.Control type="text" id="name" name="name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="txt-formularios-nom">Teléfono:</Form.Label>
                <Form.Control type="number" id="telefono" name="telefono" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="txt-formularios-nom">
                  Correo:
                </Form.Label>
                <Form.Control type="text" id="correo" name="correo" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">

                  <button variant="primary" size="lg" className="button-formulario"onClick={handlerClick}>
                  <img src={IconoPoots} />
                  enviar
                </button>
                
              </Form.Group>
            </Form>
          </div>
        </div>

      <div className="contacto">
      <div className="p-2">
        <div className="TC">
        <span><MdCall/> contacto</span>
        </div>
        <Container>
          <div className="num1">
          <Row>
            <Col>+52 999 888 7766</Col>
          </Row>
          </div>
          
          <div className="num2">
          <Row>
            <Col>+52 555 444 3321</Col>
          </Row>
          </div>
          
          <div className="correo">
          <Row>
            <Col>POOTS@GMAIL.COM</Col>
          </Row>
          </div>
          
        </Container>
      </div>
      </div>

      <div className="direccion">
      <div className="p-2">
        <div className="dn">
        <span><GoLocation/> direccion</span>
        </div>
        <Container>
          <div className="dire">
          <Row>
            <Col>2a norte #26 entre quinta y 6a oriente Col. Centro</Col>
          </Row>
          </div>
        </Container>
      </div>
      </div>

      <div className="redes-sociales">
      <div className="p-2">
        <div className="rs">
        <span>redes sociales</span>
        </div>
        <Container>

          <div className="rsi">
          <Row>
            <Col><BiLogoInstagramAlt/> @Poot´sPorLaBuenaVida</Col>
          </Row>
          </div>

          <div className="rst">
          <Row>
            <Col><PiTiktokLogoFill/> @Poot´sPorLaBuenaVida</Col>
          </Row>
          </div>

          <div className="rsf">
          <Row>
            <Col><BiLogoFacebookCircle/> @Poot´sPorLaBuenaVida</Col>
          </Row>
          </div>
        </Container>

      </div>
    </div>
    </div>
    </div>
  );
}

export default Footer;

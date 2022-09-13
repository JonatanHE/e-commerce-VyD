import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container-footer">
        <div className="row">
          <div className="col">
            <h4>VyD repuestos</h4>
            <ul className="list-unstyled">
              <li>11-1234-5678</li>
              <li>Buenos Aires, Argentina</li>
              <li>Claypole, Calle 123</li>
            </ul>
          </div>
          <div className="col">
            <h4>VyD repuestos</h4>
            <ul className="list-unstyled">
              <li>11-1234-5678</li>
              <li>Buenos Aires, Argentina</li>
              <li>Claypole, Calle 123</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} VyD Repuestos | Todos los derechos reservados |
            Términos de Servicio | Privados
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
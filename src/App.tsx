import React, { useState } from "react";
import "./App.css";
import { ConfirmationModal } from "./components/not-accessible-modal/ConfirmationModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const CloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <header>Accesibilidad web: Buscando el componente 360</header>
      <section>
        <p>Aquí tenemos un ejemplo de modal no accesible:</p>
        <button onClick={handleClick}>Abrir modal</button>
        {showModal && (
          <ConfirmationModal
            title="Modal 360"
            description="Los datos serán actualizados. ¿Estás seguro/a de que deseas realizar esta acción?"
            primaryButtonText="Cancelar"
            secondaryButtonText="Aceptar"
            // closeButtonText="Cerrar"
            onClose={CloseModal}
            onAccept={() => {}}
          />
        )}
        <p>
          La accesibilidad web es la práctica inclusiva de garantizar la
          accesibilidad a los sitios web, y que las herramientas y las
          tecnologías estén diseñados y desarrollados para que las personas con
          discapacidad puedan usarlas. Más específicamente, que todos aquellos
          usuarios puedan percibir, comprender, navegar, interactuar y
          contribuir con la web.
        </p>
        <p>
          La Organización Mundial de la Salud (OMS) recoge en sus informes un
          total de mil millones de personas con discapacidad. El acceso de estas
          personas a la tecnología debe tenerse en cuenta en la construcción de
          una sociedad igualitaria.
        </p>
        <p>
          Las limitaciones en la accesibilidad de los sitios web pueden ser:
        </p>
        <ul>
          <li>
            <a href="#">Visuales</a>
          </li>
          <li>
            <a href="#">Motrices</a>
          </li>
          <li>
            <a href="#">Auditivas</a>
          </li>
          <li>
            <a href="#">cognitivas</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;

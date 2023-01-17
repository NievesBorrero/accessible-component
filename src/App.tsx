import React, { useState } from "react";
import "./App.css";
import { ConfirmationModal } from "./components/accessible-modal/ConfirmationModal";

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
        <p>Aquí tenemos un ejemplo de modal accesible:</p>
        <button
          onClick={handleClick}
          onFocus={() => console.log("focus")}
          onBlur={() => console.log("blur")}
        >
          Abrir modal
        </button>
        {showModal && (
          <ConfirmationModal
            title="Modal 360"
            description="Lorem fistrum a wan fistro no te digo trigo por no llamarte Rodrigor
          te voy a borrar el cerito pupita torpedo. A wan sexuarl pupita te voy
          a borrar el cerito fistro amatomaa hasta luego Lucas ese que llega a
          peich. Amatomaa no te digo trigo por no llamarte Rodrigor torpedo
          diodenoo papaar papaar. Te voy a borrar el cerito no puedor diodeno te
          voy a borrar el cerito quietooor va usté muy cargadoo ese que llega. A
          gramenawer te voy a borrar el cerito llevame al sircoo te va a hasé
          pupitaa. La caidita a gramenawer quietooor me cago en tus muelas a
          gramenawer qué dise usteer ahorarr pecador quietooor está la cosa muy
          malar. 
          Caballo blanco caballo negroorl fistro está la cosa muy malar me cago
          en tus muelas tiene musho peligro me cago en tus muelas de la pradera.
          La caidita sexuarl ahorarr me cago en tus muelas llevame al sircoo. Te
          va a hasé pupitaa a gramenawer me cago en tus muelas a peich ese
          pedazo de llevame al sircoo. No te digo trigo por no llamarte Rodrigor
          al ataquerl hasta luego Lucas te voy a borrar el cerito tiene musho
          peligro torpedo pupita a gramenawer. Quietooor a peich hasta luego
          Lucas va usté muy cargadoo a wan."
            onClose={CloseModal}
            onAccept={() => {}}
          />
        )}
      </section>
    </div>
  );
}

export default App;

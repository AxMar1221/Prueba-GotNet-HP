import React, { useState } from "react";
import close from "../../assets/close.png";

export const Modal = (props) => {
  const { open, onClose } = props;

  const [inputData, setInputData] = useState({
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    gender: "",
    hogwartsStudent: "",
    hogwartsStaff: "",
    image: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputData({ ...inputData, [id]: value });
  };

  return (
    open && (
      <div className="modal">
        <div className="modal-content">
          <div className="header-modal">
            <h2>Agrega un personaje</h2>
            <button className="close-modal" onClick={onClose}>
              <img src={close} alt="closeModal" />
            </button>
          </div>
          <div className="form-content">
            <form>
              <div className="form-content-inputs">
                <div className="input">
                  <label htmlFor="name"> NOMBRE </label>
                  <input
                    type="type"
                    id="name"
                    value={inputData.name}
                    onChange={handleChange}
                    name="name"
                  />
                </div>
                <div className="input">
                  <label htmlFor="dateOfBirth"> CUMPLEAÑOS </label>
                  <input
                    type="text"
                    id="dateOfBirth"
                    className="form"
                    value={inputData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <label htmlFor="eyeColour"> COLOR DE OJOS </label>
                  <input
                    type="text"
                    id="eyeColour"
                    className="form"
                    value={inputData.eyeColour}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <label htmlFor="hairColour"> COLOR DE PELO </label>
                  <input
                    type="text"
                    id="hairColour"
                    className="form"
                    value={inputData.hairColour}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <section className="modal-select">
                <input type="radio" id="gender" value="female" />
                <label type="male">Mujer</label>
                <input type="radio" id="gender" value="male" />
                <label type="male">Hombre</label>

                <input type="radio" id="hogwartsStudent" value="student" />
                <label type="student">Estudiante</label>
                <input type="radio" id="hogwartsStaff" value="staff" />
                <label type="staff">Staff</label>
              </section>
              <div className="modal-footer">
                <button>GUARDAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

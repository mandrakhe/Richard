import "./App.css";
import logo from "../src/img/logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo"></img>{" "}
      <p className="prototipo">Prototipo de formulario (crear/modificar)</p>
      <div className="formulario">
        <p className="texto-azu" l>
          Los campos con asteriscos (*) son obligatorios
        </p>
        <form>
          <div className="formulario__container">
            <p className="inline">Nombre:</p>
            <input
              type="text"
              placeholder="Nombre completo del empleado"
            ></input>
          </div>
          <div className="formulario__container">
            <p className="inline">Correo : </p>
            <input type="text" placeholder="Nombre completo del emplea"></input>
          </div>
          <div className="formulario__container"id="genero">
            <label>
              <input type="checkbox" value="checkbox" /> Masculino
            </label>
            <label>
              <input type="checkbox" value="checkbox" /> Femenino
            </label>
          </div>

       
          <div className="formulario__container">
            <select name="Área">
              <option value="administracion">Administracion</option>
              <option value="empleado">Empleado</option>
              <option value="otracosa">Otra cosa 1</option>
            </select>
            <label>
              <input type="checkbox" id="cbox1" value="checkbox" /> Deseo
              recibir boloetin administrativo
            </label>
            <p>Roles</p>
            <label>
              <input type="checkbox" id="cbox1" value="checkbox" /> Profesional
              de proyectos - Desarrollador
            </label>
            <label>
              <input type="checkbox" id="cbox1" value="checkbox" /> Gerente
              estratégico
            </label>
            <label>
              <input type="checkbox" id="cbox1" value="checkbox" /> Auxiliar
              administrativo
            </label>
          </div>
          <div className="formulario__container" >
            <p>Descripción</p>
            <textarea
              name="textarea"
              rows="10"
              cols="50"
              placeholder="Descripción de la experiencia del empleado"
            ></textarea>
          </div>
          <div className="formulario__container"></div>

          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

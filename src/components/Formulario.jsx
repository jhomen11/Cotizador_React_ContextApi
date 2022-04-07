import { Fragment } from "react/cjs/react.production.min";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/UseCotizador";

const Formulario = () => {
  const { datos, handleChangeDatos } = useCotizador();

  return (
    <>
      <form>
        <div>
          <label htmlFor="marca">Marca</label>
            <select 
                name="marca" 
                onChange={e => handleChangeDatos(e)}
                value={datos.marca}
            >
            <option value="">-- Seleciona Marca --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="year">Año</label>
            <select 
                name="year"
                onChange={e => handleChangeDatos(e)}
                value={datos.year}
            >
            <option value="">-- Seleciona Año --</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div>
            <label>Elijge un Plan</label>
            <div>
              {PLANES.map((plan) => (
                <Fragment key={plan.id}>
                  <label htmlFor="plan">{plan.nombre}</label>
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    onChange={e => handleChangeDatos(e)}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <input type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;

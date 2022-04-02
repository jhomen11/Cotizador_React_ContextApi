import { MARCAS } from "../constants"
const Formulario = () => {
    return(
        <>
        
            <form>
                <div>
                    <label htmlFor="marca">Marca</label>
                    <select name="marca" id="">
                        <option value="">-- Seleciona Marca --</option>
                        {MARCAS.map(marca =>(
                            <option>{marca.nombre}</option>
                        ))}
                    </select>
                </div>
            </form>
        </>
    )
}

export default Formulario
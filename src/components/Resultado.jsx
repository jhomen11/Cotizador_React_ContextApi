import useCotizador from "../hooks/UseCotizador"
import { MARCAS, PLANES } from '../constants'


const Resultado = () => {

    const { resultado, datos } = useCotizador()
    const { marca, plan, year} = datos

    const [nombreMarca] = MARCAS.filter(m => m.id === Number(marca))
    const [nombrePlan] = PLANES.filter(p => p.id === Number(plan))

    if(resultado === 0 ) return null

  return (
    <div>
        <h2>Resumen</h2>
        <p><span>Marca: </span>{nombreMarca.nombre}</p>
        <p><span>Plan: </span>{nombrePlan.nombre}</p>
        <p><span>Año: </span>{year}</p>
        <p><span>Total Cotización: </span>{resultado}</p>
    </div>
  )
}

export default Resultado
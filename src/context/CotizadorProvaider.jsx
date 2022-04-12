import { createContext, useState } from "react"
import { obtererDiferenciYear, calcularMarca, calcularPlan, formatoDinero } from '../helpers'

const CotizadorContex = createContext()

const CotizadorProvaider = ({ children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError]= useState('')
    const [resultado, setResultado] = useState(0)

    const handleChangeDatos = e =>{

        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        
        //Base
        let resultado = 2000

        //Diferencia de años
        const diferencia = obtererDiferenciYear(datos.year)
        
        //Restar 3% por cada año antiguo
        resultado -= ((diferencia * 3) * resultado) / 100

        
        //Europeo 30%
        //Americano 15%
        //Asiatico 5%
        resultado *= calcularMarca(datos.marca)


        //Basico 20%
        //Completo 50%
        resultado *= calcularPlan(datos.plan)
        
        resultado = formatoDinero(resultado)

        setResultado(resultado)
        
    }

    return(
        <CotizadorContex.Provider
            value={{
                datos,
                error,
                resultado,
                setError,
                handleChangeDatos,
                cotizarSeguro
            }}
        >
            {children}
        </CotizadorContex.Provider>
    )
}

export {
    CotizadorProvaider
}

export default CotizadorContex

import { createContext, useState } from "react"

const CotizadorContex = createContext()

const CotizadorProvaider = ({ children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError]= useState('')

    const handleChangeDatos = e =>{

        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    } 

    return(
        <CotizadorContex.Provider
            value={{
                datos,
                error,
                setError,
                handleChangeDatos
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

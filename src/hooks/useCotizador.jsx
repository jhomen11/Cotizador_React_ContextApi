import { useContext} from 'react'
import CotizadorContex from '../context/CotizadorProvaider'

const useCotizador = () => {

    return useContext(CotizadorContex)
}

export default useCotizador
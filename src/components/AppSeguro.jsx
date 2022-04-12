import useCotizador from "../hooks/UseCotizador"
import Formulario from "./Formulario"
import Spinner from "./Spinner"


const AppSeguro = () => {

    const { resultado, cargando } = useCotizador()
    return(
        <>
            <header>
                <h1>Cotizador de Seguros de Autos</h1>
            </header>
            <main>
                <Formulario/>
                {cargando ? <Spinner/> : resultado }
            </main>
        </>
    )
}

export default AppSeguro
import useCotizador from "../hooks/UseCotizador"
import Formulario from "./Formulario"


const AppSeguro = () => {

    const { resultado } = useCotizador()
    return(
        <>
            <header>
                <h1>Cotizador de Seguros de Autos</h1>
            </header>
            <main>
                <Formulario/>
                {resultado}
            </main>
        </>
    )
}

export default AppSeguro
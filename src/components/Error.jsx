import useCotizador from "../hooks/UseCotizador"


const Error = () => {

    const {error} = useCotizador()
    return(
        <p>{error}</p>
    )
}

export default Error
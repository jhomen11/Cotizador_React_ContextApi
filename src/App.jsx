import AppSeguro from "./components/AppSeguro"
import { CotizadorProvaider } from "./context/CotizadorProvaider"

function App() {

  return (
    <CotizadorProvaider>
      <AppSeguro/>
    </CotizadorProvaider>
      
  )
}

export default App

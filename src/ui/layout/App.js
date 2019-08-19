import React , {Component,Fragment} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Formulario from "../widgets/Formulario"
import Contador from "../widgets/Contador"

class App extends Component {
    render(){
        return (
            <Fragment>
                <Header/>
                <Contador/>
                <Formulario /> 
                <Main/>
                <Footer/>  
            </Fragment>
        )
    }
}

export default App

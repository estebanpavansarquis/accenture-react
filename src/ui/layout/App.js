import React , {Component,Fragment} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

/*export default class App extends Component {*/

class App extends Component {

    constructor(){
        super()
        this.state = {
            links : ["usuarios","faq","contacto"],
            contador : 0
        }
    }

    sumarContador = () => {
        this.setState({contador : this.state.contador + 1})
    }
    
    render(){
        return (
            <Fragment>
                <Header links={this.state.links} />
                <p>Contador : {this.state.contador}</p>
                <button onClick={this.sumarContador}>+</button>
                <Main/>
                <Footer/>
            </Fragment>            
        )
    }
}

//Las exportaciones por default son UNICAS por archivo
export default App

//let App = () => { return "Hola Mundo" }
//let App = () => <p>Hola Mundo</p>
/* 
function App (){
    return <p>Hola Mundo</p>
} 
*/


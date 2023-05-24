import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import CardHome from "./components/CardHome";


function App() {
  return (
    <>
    <Container className="my-5 mainPage">
       <h1 className="display-4 text-center">Pratico con ReactJs ejercicio 7</h1>
       <hr/>
       <CardHome/>
    </Container>
    <footer className="bg-dark text-light text-center py-5">
      <p> &copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
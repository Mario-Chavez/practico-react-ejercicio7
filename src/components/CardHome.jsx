import { Card} from "react-bootstrap";
import { useEffect, useState } from "react";
import  data from "../data/data"
import CardEmpledos from "./CardEmpleados";

const CardHome = () => {
    const [datos, setDatos] = useState([])

    useEffect(() => {
      setDatos(data)
    }, [])
    


   
    return (
        <section>
            
            <Card>
                <Card.Body>
                    <CardEmpledos empleados={datos}/>
                </Card.Body>
            </Card>
           
        </section>
    );
};
 

export default CardHome;
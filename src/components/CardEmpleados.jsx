import { Card } from "react-bootstrap";
import Avatar from 'react-avatar';


const CardEmpledos = ({empleados}) => {
    
    return (
            <>
            {
                empleados.map((item,index)=> 
                <div className="row border border-dark my-4 p-2" key={index} >
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="d-flex justify-content-center">
                        <Avatar size="150" src={item.pic} round="100px"/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="">
                            <div>
                                <Card.Title className="my-4 fs-2">{item.fullName}</Card.Title>
                                    <div className="d-flex fw-bolder">
                                        {item.title} 
                                    <div className="rounded-pill bg-info mx-5 px-4 text-white">
                                        {item.department}
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            
            </>
        
        );
    };
 
export default CardEmpledos;
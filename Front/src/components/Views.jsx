import React,{useState}from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'


export default ({P, i})=>{
    
    const [show, setShow] = useState(false);

        return(
            <Container style={{ display:'flex', marginBlockStart:"1rem", flexDirection:'row', boxShadow :'5px 5px 10px -3px' }} >                               
                                <Container style={{width:"20%"}}>
                                <Card.Img  onClick={() => setShow(true)} variant="top" src={P.thumbnail} />
                                </Container>
                                <Container>
                                <Card.Title onClick={() => setShow(true)} >{P.title}</Card.Title>
                                <Card.Title>${P.price}</Card.Title>
                                <Card.Title>Cant.Disponible:{P.available_quantity}</Card.Title>
                                <Card.Title>Cant.vendida:{P.sold_quantity}</Card.Title>
                                </Container>
                                <Modal
                                    show={show}
                                    onHide={() => setShow(false)}
                                    dialogClassName="modal-70w"
                                    centered
                                >
                                    <Modal.Body style={{alighItems:"row"}}>
                                        <h3>Datos De Productos:</h3>
                                        <li>
                                            <ul>Estado:{P.condition}</ul>
                                            <ul>Venta en:{P.site_id}</ul>
                                            <ul>Precio Original:${P.original_price}</ul>
                                            <ul>Precio de venta:${P.price}</ul>   
                                        </li>
                                    </Modal.Body>
                                </Modal>                       
                </Container>
        )
}
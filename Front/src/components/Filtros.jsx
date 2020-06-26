import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default ({CantVendidaFunction,CondicionFunction, PrecioFunction, AscDescFunction})=>{

    return(
        <Container style={{display:"flex", flexDirection:"column", alignItems:'flex-start'}} >
            <h3>Filtro:</h3>
            <p>Asc o desc</p>
            <Button onClick={AscDescFunction} >Asc o desc</Button>
            <p>Cant. Vendida</p>
            <Button onClick={CantVendidaFunction} >Cant. Vendida</Button>
            <p>Precio</p>
            <Button onClick={PrecioFunction} >Precio</Button>
            <p>Condicion</p>
            <Button onClick={CondicionFunction} >Nuevo</Button>
        </Container>
    )
}
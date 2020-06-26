import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

export default ({handleSubmit, handleChange, props})=>{
    return(
            <Container className="d-flex p-2 bd-highlight justify-content-center" >
                        <Navbar.Brand href="/">Nubimetrics Challenge</Navbar.Brand>
                            <Form inline onSubmit={handleSubmit} >
                                <FormControl  type="text" placeholder="Search" className="mr-sm-2"  onChange={handleChange} />
                                <Button variant="bd-highlight" onClick={handleSubmit} >Search</Button>
                            </Form>
            </Container>
    )
}


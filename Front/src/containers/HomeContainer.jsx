import React from 'react'
import Container from 'react-bootstrap/Container'

export default class HomeContainer extends React.Component{
    render(){
        return(
            <Container style={{display:"flex", justifyContent:"center", alignItems:"center", height:"45rem"}}>
                <img src="https://ms-f7-sites-01-cdn.azureedge.net/docs/stories/nubimetrics-azure-machine-learning-app-data-hdinsight-es-argentina/resources/ac46212e-eb8e-4f6c-b180-8f9b44f6406a/1105269100626011595" alt="Nubimetrics"/>
            </Container>
        )
    }
}
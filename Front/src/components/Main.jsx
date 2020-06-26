import React from "react"
import {Route, Switch} from 'react-router-dom'
import {connect} from "react-redux"
import NavbarContainer from "../containers/NavbarContainer"
import ViewsContainer from '../containers/ViewsContainer'
import HomeContainer from "../containers/HomeContainer"
import Container from "react-bootstrap/Container"

class Main extends React.Component {
    constructor(props) {
      super(props);
    }

render(){
    return(
        <Container style={{margin:"0%", padding:"0%", maxWidth:"100%", maxHeight:"100%"}} >
            <NavbarContainer/>
            <Switch>
                <Route exact path="/" component={HomeContainer}/>
                <Route exact path="/search" component={ViewsContainer}/>
            </Switch>
        </Container>
    )
}
}
export default connect(null, null)(Main);
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import Navbar from '../components/Navbar'
import { fetchPublications } from '../redux/actions/searchActions'
import Container from 'react-bootstrap/Container'

class NavbarContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({input:e.target.value})
        
    }
    handleSubmit(e){
        e.preventDefault()
        if(this.state.input==""){
            alert("ingrese su busqueda")
        }
        else{
            this.props.fetchPublications(this.state.input)
            this.props.history.push("/search")       
        }
    }

    render(){
        return(
            <Container>
                <Navbar
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    props={this.props.state.publications.results}/>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state   
    };
};

const mapDispatchToProps = function(dispatch, owmprops) {
    return {
      fetchPublications: (input) => dispatch(fetchPublications(input))
    };
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarContainer))
  

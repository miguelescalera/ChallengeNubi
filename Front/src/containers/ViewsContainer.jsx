import React from 'react'
import {connect} from 'react-redux'
import Views from '../components/Views'
import Container from 'react-bootstrap/Container'
import Filtros from '../components/Filtros'
import {SearchPublications} from '../redux/actions/searchActions'
import Spinner from 'react-bootstrap/Spinner'


class ViewsContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            refresh:false
        }
        this.AscDescFunction=this.AscDescFunction.bind(this)
        this.PrecioFunction=this.PrecioFunction.bind(this)
        this.CondicionFunction=this.CondicionFunction.bind(this)
        this.CantVendidaFunction=this.CantVendidaFunction.bind(this)
    };

    AscDescFunction(){
        this.props.FiltroPublications(this.props.Publications.reverse())
        setTimeout(()=>this.setState({refresh:(!this.state.refresh)}),1000)
    };

    PrecioFunction(){
        this.props.FiltroPublications(this.props.Publications.sort(function(a, b){
            if(a.price < b.price)return -1
            if(a.price > b.price)return 1
            return 0
        })
        )
        setTimeout(()=>this.setState({refresh:(!this.state.refresh)}),1000)   
     };

    CondicionFunction(){
        this.props.FiltroPublications(this.props.Publications.sort(function(a, b){
            if(a.condition < b.condition)return -1
            if(a.condition > b.condition)return 1
            return 0
        })
        )
        setTimeout(()=>this.setState({refresh:(!this.state.refresh)}),1000)
    };

    CantVendidaFunction(){
        this.props.FiltroPublications(this.props.Publications.sort(function(a, b){
            if(a.sold_quantity < b.sold_quantity)return -1
            if(a.sold_quantity > b.sold_quantity)return 1
            return 0
        })
        )
        setTimeout(()=>this.setState({refresh:(!this.state.refresh)}),1000)    };

    render(){
        let Publications = this.props.Publications
        return( 
            <>
                {!Publications ?
                    ( <Spinner
                         as="span"
                         animation="grow"
                         size="sm"
                         role="status"
                         aria-hidden="true"
                        />    
                    ):(
                    <Container style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignContent:"center"}}>
                        <Container style={{width:"20%"}}>   
                            <Filtros 
                                AscDescFunction={this.AscDescFunction}
                                PrecioFunction={this.PrecioFunction}
                                CondicionFunction={this.CondicionFunction}
                                CantVendidaFunction={this.CantVendidaFunction} />
                        </Container>
                        
                        <Container style={{display:"flex", flexDirection:"column"}}>
                            {Publications.map((P,i)=>{
                                return(   
                                        <Views 
                                        P={P} key={i}/>  
                                    )
                                })
                            } 
                        </Container>
                    </Container>   
                    ) 
                }
            </>  
            
            )    
        }
    }


const mapStateToProps = (state) => {
    return {
        Publications:state.publications 
    };
};

const mapDispatchToProps = function(dispatch, owmprops) {
    return {
      FiltroPublications: (Publications) => dispatch(SearchPublications(Publications))
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(ViewsContainer)

import React from 'react';
import ExerciesForm from '../components/ExerciesForm';
import Card from '../components/Card';
import '../components/style/Form.css';
class ExerciesNew extends React.Component{
    state={
        form:{
            title:'',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        }
    }

    handleChange=e=>{
        //computer propety name almacenar data en el state
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
    };

    render(){
        return(
            <div className="containerForm">
                <h1>AGREGAR NUEVO EXERCICIO</h1>
                <div className="row">
                        <div className="col-sm">
                            <Card {...this.state.form}/>
                        </div>
                        <div className="col-sm">
                            <ExerciesForm 
                            onChange={this.handleChange} 
                            form ={this.state.form}
                            />
                        </div>
                </div>
            </div>
            
        )
    }

}
export default ExerciesNew;
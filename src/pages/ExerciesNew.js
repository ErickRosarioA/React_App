import React from 'react';
import ExerciesForm from '../components/ExerciesForm';
import Card from '../components/Card';

class ExerciesNew extends React.Component{
    state={
        form:{
            title:'',
            description:'',
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

            <div className="row">

                    <div className="col-sm">
                        <Card {...this.state.form}/>
                    </div>
                    <div className="col-sm">
                        <ExerciesForm onChange={this.handleChange} form ={this.state.form}/>
                    </div>
            </div>
        
        )
    }

}
export default ExerciesNew;
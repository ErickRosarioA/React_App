import React from 'react';
import Welcome from '../components/WelcomeApp';
import ExerciesC from '../components/Exercies';
import AddExercies from '../components/AddExerciesC';
import Loading from '../components/loading';
import ErroFatal from './500';   
class Exercies extends React.Component{
    //Neuva manera sin cosntrutor ni super para las props, solo state...s
    state={
        data:[],
        loading:true,
        error:null
    };

    //consumo del api aqui se vera el metodo de montado del componente es asycrono para la espera del la data
    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises =async()=>{
        try {
            let respu= await fetch('http://localhost:8000/api/exercises');
            let data= await respu.json();   
            this.setState({
                data,
                loading:false
                
            });
        } catch (error) {

            this.setState({
              loading:false,
              error
                
            });
        }



    }

    render(){
        if(this.state.loading ){
            return <Loading/>
        }
        if(this.state.error ){
            return <ErroFatal/>
        }
        return(
            <div>
                <Welcome
                username="Erick"
                />
                <ExerciesC exercies={this.state.data}/>
                <AddExercies/>
            </div>
        )
    }
}

export default Exercies;
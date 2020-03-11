import React from 'react'
import Card from '../components/Card';

function Exercies(props){
    return(
        <div>
        {
           props.exercies.map((exercie,i)=>{
                return(
                    <div style={{ margin:'10px' }} key={i}>
                        <Card
                        title={exercie.title}
                        description={exercie.description}
                        img={exercie.img}
                        leftColor={exercie.leftColor}
                        rightColor={exercie.rightColor}
                        />
                    </div>
                )
            })
        }
        </div>
    )
}

export default Exercies
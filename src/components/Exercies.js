import React from 'react'
import Card from '../components/Card';
//tambien puedo psar las propiedades como obejto directa (destruturing para las props)
const Exercies=({exercies})=>(
    <div>
    {
        exercies.map((exercie,i)=>{
            if(i<3){
                return(
                    <div style={{ margin:'10px' }}  key={i} >
                        <Card
                        key={exercie.id}
                        title={exercie.title}
                        description={exercie.description}
                        img={exercie.img}
                        leftColor={exercie.leftColor}
                        rightColor={exercie.rightColor}
                        />
                    </div>
                )
            }
         
        })
    }
    </div>
);

export default Exercies;
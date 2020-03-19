import React from 'react';
import '../components/style/Form.css';
import {Link} from  'react-router-dom';
class ExerciesForm extends React.Component{
//para manejar los eventos con sus this.propos se puede hacer:
//un contrutor y pasar por super() y llamar la fuction con this == this. fuction.bind(props)
//pero por babel React component es pmejor con fuction arry flechas => solo se haceuna vez
//los eventos solo se llaman en su fuction (handle + el nombre del event0)
// handleClik =()=>(
//     console.warn('click')
// );

    handleSubmit=e=>{
        e.preventDefault();
    };
    
    render(){
        const {onChange, form} = this.props;
        return(
            
            <div className="container">
            <form 
                onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Title" 
                        name="title"
                        onChange={onChange}
                        value={form.title}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Description" 
                        name="description"
                        onChange={onChange}
                        value={form.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Imagen" 
                        name="img"
                        onChange={onChange}
                        value={form.img}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Left-Color" 
                            name="leftColor"
                            onChange={onChange}
                            value={form.leftColor}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Right-Color" 
                            name="rightColor"
                            onChange={onChange}
                            value={form.rightColor}
                        />    
                    </div>
                </div>
                <div  className="row">
                    <div className="col-sm">
                        <button 
                        type="submit" 
                        className="myButton">
                        CREAR 
                        </button>
                    </div>
                    <div className="col-sm">
                        <Link to="/">
                            <div
                            className="myButtonCancel">
                            CANCELAR
                            </div>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
        );
    };

}
export default ExerciesForm;
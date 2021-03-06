import React from 'react';
import camaraOff from '../img/camaraOFF.png';
import './style/Card.css';
class Card extends React.Component{
constructor(props){
    super(props);
    this.state={
        img:'https://i.ya-webdesign.com/images/loading-gif-png-5.gif'
    }
}

componentDidMount(){
setTimeout(() => {
    this.setState({
        img:this.props.img
    });
}, 2000);
}

    render(){
        const {title,img,description,leftColor,rightColor}=this.props;
        return (
            <div className="card mx-auto Fitness-Card" 
            style={{
                backgroundImage:`linear-gradient(to right, ${leftColor || '#F76161'}, ${rightColor || '#FFFFFF'})`
            }}>
                <div className="card-body">
                    <div className="row center ">
                        <div className="col-6">
                            <img src={img || camaraOff} width="100px" height="100px" className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;
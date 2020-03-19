import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
const container= document.getElementById('root');

ReactDom.render(<App/>,container);











// const user={
//     name:'erick',
//     lastname: 'rosario',
//     avatarUrl:'https://gravatar.com/avatar/11598369e4443308d845d7211214b501?s=400&d=robohash&r=x'
// }

// function getNameComplete(user){
// return user.name+' '+user.lastname;
// };
// const element = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world!'
//   );
// const other=document.getElementById('other');
// const container= document.getElementById('root');

// const nameComplet=(
//     <div> 
//     <h2>Hola!!!!</h2>
//      <h1>{getNameComplete(user)}</h1> 
//      <img src={user.avatarUrl}  width="100px" height="100px"/>
//      </div>
//     );
// ReactDom.render(nameComplet,container);


// //creando renderizacion
// function relojoj() {
//     const element_2 = (
//       <div>
//         <h2>{new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDom.render(element_2, other);
//   };
//   setInterval(relojoj);


//   //creando componente con fuction
//   function NameComp(user) {
//     return <h1>Hello, {user.name}</h1>;
//   }
  
//   const element_1 = <NameComp name="ERICK VALOR" />;
//   ReactDom.render(
//     element_1,
//     document.getElementById('fuction')
//   );


//const title=document.createElement('h1');
// const container= document.getElementById('root');
// title.innerText="ERICK ESTA EN REACT";
// container.appendChild(title);
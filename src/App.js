import React from "react";
import "./App.css";

const BigArray = [
  { name:'Reggie', 
    lastName:'Johnson', 
    phone:'202-555-4354',
    color: true,
    id:1 }, 
  {  
    name:'James',
    lastName:'Bond',
    phone:'404-434-2222',
    color: true,
    id:2 }, 
  {   
    name:'Bruce',
    lastName:'Banner',
    phone:'327-444-5555',
    color: true,
    id:3 }                    
];


function Groot(props) {
  console.log(`inside of groot`)
  console.log(props)
  return(
  <div>
    <p >You need to contact {props.name} {props.lastName} at {props.phone}</p> 
    <button className={props.color ? 'orange' : 'green'}
        onClick = {() => props.setColor(props.id)}>       
    </button>
  </div>  
      
  )}

function Contact(props) {
  console.log(props)
  return(
    <div>
      {props.contactList.map(object =>        
      
      <Groot name={object.name} 
             lastName={object.lastName} 
             phone={object.phone}
             id={object.id}
             color={object.color}
             setColor={props.setColor}
             key={object.id} /> 

      )}
    </div>  
  ) }
  
class Button extends React.Component {
  state = {
    color: "orange",
    arr: BigArray
  };

  buttonColor = (id) => {
    let newArr = this.state.arr.map(a=> {
      if (a.id == id) {
        a.color = !a.color
      }
      return a
    })
    this.setState({ arr: newArr });
  }

  render() {    
    
    return (
      <div className={'container'}>
        <Contact contactList={BigArray} 
                 color={this.state.color} 
                 setColor={this.buttonColor}/>      
      </div>
    )
  }
}
export default Button;
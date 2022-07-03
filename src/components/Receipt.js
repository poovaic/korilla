import Topping from "./Topping.js"
import {v4 as uuidv4} from "uuid";//going to giveyou a unique id for each element
import {useState} from 'react'
function Receipt(props){
//console.log(props.receipt)
//console.log(person)
//whenever we update state, the function is called again.these receipts all have a value paid set to false. when we click on one, we update the state that component, that function, this case the receipt, we update prop on the object, we update the state, the function is called again. the function re renders, the prompt is said to true now. now the component is set to true now.
const[paid,setPaid]=useState(props.receipt.paid)
 if(props.receipt.paid){
    return null
 }else {
return (
    //automatic semicolon insertion if theres nothing near return
    <div className="receipt" onClick={(event)=>{
        props.receipt.paid=true;
        setPaid(props.receipt.paid)
        //console.log(props.receipt.paid)
        }}>
            {/* {props.receipt}you cannot use an object inside a JSX tag.you cannot return the whole object. but u can bring in a property of an object.like this->{props.receipt.person} */}
           <h3><span>Person:</span>{props.receipt.person}</h3> 
            <p><span>Main:</span>{props.receipt.order.main}</p>
            <p><span>Protein:</span>{props.receipt.order.protein}</p>
            <p><span>Rice:</span>{props.receipt.order.rice}</p>
            <p><span>Sauce:</span>{props.receipt.order.sauce}</p>
            
            <p><span>Drink:</span>{props.receipt.order.drink}</p>
            <p><span>Cost:</span>{props.receipt.order.cost}</p>
            <p><span>Toppings:</span></p>
            {props.receipt.order.toppings.map((topping,index)=>{
                    const uuid = uuidv4();

                return  <Topping key={uuid} topping = {topping}/>
                

            })}
            


</div>
)
        
      
}
}
export default Receipt
//node module called uuid. do  npm install uuid
import './App.css';
import{useState} from 'react';
import {v4 as uuidv4} from "uuid";//going to giveyou a unique id for each element
import Receipt from "./components/Receipt.js"//child
import {receipt1,receipt2,receipt3,rec} from "./Records.js"//doing destructuring here
import Header from "./components/Header.js"
//setReceipts is for updating the useState. when we map over something, usually in react is to give property of object and pass it on to jsx
//

function App() {
  const [receipts,setReceipts]=useState([receipt1,receipt2,receipt3,...rec])
  const mappedReceipts=receipts.map((receipt, index)=>{
    const uuid = uuidv4();
    return <Receipt receipt ={receipt} key={uuid}/>
  })
  console.log(mappedReceipts)
  
  return (
    
    <div className="App">
      <Header/>
      <div className="receiptArrange">
      {mappedReceipts}
      {/* <Receipt receipt = {receipt1}/>
      <Receipt receipt = {receipt2}/>
      <Receipt receipt = {receipt3}/> */}
</div>
    </div>
  )
}

export default App;



import React, { useEffect, useState } from "react";
import WineData from './WineData'
import winedata from "./WineData";
import { mean, median, mode } from "./Utitlity/Utility";
import Flavanoids from "./Components/Flavanoids";
import Gamma from "./Components/Gamma";



function App() {
  

  const [classwise,setClasswise]=useState([]);
  // Below function is for dividing the winedata classwise
  const classwisefuntion=()=>{
    let i=0;
    let flag=true;
      while(flag){
        let classdata=winedata.filter((ele,ind)=>{ 
          if(ele.Alcohol-1==i){
            return true;
          }
          return false;
        })
        if(classdata.length==0){
          flag=false;
        }
        else{
          classwise.push(classdata);
        }
        console.log(classdata);
        i++;
      }
  }
  classwisefuntion();
  return (
    <div>
      
      <div style={{display:"grid",justifyContent:"center",marginTop:"50px",marginBottom:"60px", fontSize:"50px"}}>
        <p>Tables with Calculated Data</p>
      </div>
      <p style={{textAlign:"center",fontSize:"26px",margin:"16px"}}>Flavanoids Table</p>
      {/* Component to render the flavanoids table*/ }
      <Flavanoids winedata={classwise} />
      <p style={{textAlign:"center",fontSize:"26px",margin:"16px"}}>Gamma Table</p>
      {/* Component to render the gamma table*/ }
      <Gamma winedata={classwise} />



      
    </div>
  );
}

export default App;

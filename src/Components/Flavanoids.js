import React from "react";
import { mean, median, mode } from "../Utitlity/Utility";
import './Flavanoids.css'

const Flavanoids=(props)=>{
    
    const classwise=props.winedata;
    return(
        <div style={{display:"grid",justifyContent:"center"}}>
            <div >
            <table>
        <tr>
          <th>Measures</th>
          {
            
            classwise.map((item,ind)=>{
              return(
                <th>
                  class{ind+1}
                </th>
              )
            })
          }
        </tr>
        <tr>
          <th>Flavanoids Mean</th>
          {
            classwise.map((item,ind)=>{
                let data=[];
                item.map((val,i)=>{
                    data.push(Number(val.Flavanoids));
                })
                // console.log("this is data",data)
              return(
                <td>{mean(data)}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>Flavanoids Median</th>
          {
            classwise.map((item,ind)=>{
                let data=[];
                item.map((val,i)=>{
                    data.push(Number(val.Flavanoids));
                })
              return(
                <td>{median(data)}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>Flavanoids Mode</th>
          {
            classwise.map((item,ind)=>{
                let data=[];
                item.map((val,i)=>{
                    data.push(Number(val.Flavanoids));
                })
              return(
                <td>{mode(data)}</td>
              )
            })
          }
        </tr>
        
      </table>

            </div>
        </div>
    )
}
export default Flavanoids;
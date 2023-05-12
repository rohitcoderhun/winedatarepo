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
                // storing only flavanoids value in data array so we have to pass this data array in mean
                item.map((val,i)=>{
                    data.push(Number(val.Flavanoids));
                })
                
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
                // storing only flavanoids value in data array so we have to pass this data array in median
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
                // storing only flavanoids value in data array so we have to pass this data array in mode
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
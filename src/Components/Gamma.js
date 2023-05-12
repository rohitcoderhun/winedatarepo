import React from "react";
import { mean, median, mode } from "../Utitlity/Utility";
import './Flavanoids.css'

const Gamma=(props)=>{
    const classwise=props.winedata;

    // Doing this to add new value gamma in each object of wine data
    classwise.map((data,ind)=>{
        data.map((ele,i)=>{
            let gamma=(ele.Ash*ele.Hue)/ele.Magnesium;
            gamma=gamma.toFixed(3);
            ele["gamma"]=Number(gamma);
        })
    })
    

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
          <th>Gamma Mean</th>
          {
            classwise.map((item,ind)=>{
                let data=[];
                // storing only gamma value in data array so we have to pass this data array in mean
                item.map((val,i)=>{
                    data.push(Number(val.gamma));
                })
                
              return(
                <td>{mean(data)}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>Gamma Median</th>
          {
            classwise.map((item,ind)=>{
                let data=[];
                // storing only gamma value in data array so we have to pass this data array in median
                item.map((val,i)=>{
                    data.push(Number(val.gamma));
                })
              return(
                <td>{median(data)}</td>
              )
            })
          }
        </tr>
        <tr>
          <th>Gamma Mode</th>
          {
            classwise.map((item,ind)=>{
                let data=[];
                // storing only gamma value in data array so we have to pass this data array in mode
                item.map((val,i)=>{
                    data.push(Number(val.gamma));
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

export default Gamma
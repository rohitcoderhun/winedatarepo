import React from "react";
import { mean, median, mode } from "../Utitlity/Utility";
import './Flavanoids.css'

const Gamma=(props)=>{
    const classwise=props.winedata;
    classwise.map((data,ind)=>{
        data.map((ele,i)=>{
            let gamma=(ele.Ash*ele.Hue)/ele.Magnesium;
            gamma=gamma.toFixed(3);
            ele["gamma"]=Number(gamma);
        })
    })
    console.log(classwise);

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
                item.map((val,i)=>{
                    data.push(Number(val.gamma));
                })
                // console.log("this is data",data)
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
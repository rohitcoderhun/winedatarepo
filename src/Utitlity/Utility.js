import React from "react";



export const mean=(props)=>{
    let totalsum=0;
    console.log("rohit",props)
    props.map(ele=>{
        totalsum=totalsum+ele;
    })
    let totalitems=props.length;
    console.log("totalitem",totalitems);
    console.log("totalsum",totalsum);
    let res=totalsum/totalitems;
    console.log("res",res);
    
    return res.toFixed(3);
}

export const median=(props)=>{
    let temparray=[];
    props.map(ele=>{
        temparray.push(ele);
    })
    temparray.sort(function(a, b){return a-b});
    if(temparray.length%2==0){
        let len=temparray.length;
        len=Math.floor(len/2);
        let res=(temparray[len]+temparray[len-1])/2;
        console.log("this is res",res);
        return res.toFixed(3);
    }
    console.log("this is tmep array",temparray);
    let len=temparray.length;
    len=Math.floor(len/2);
    let res=temparray[len-1];
    return res.toFixed(3);
}

export const mode=(props)=>{
    let freq={};
    // to find mode we have to find which no. have high frequency
    let maxfreq=0;
    let value=-1;
    props.map(ele=>{
        if(freq[ele]){
            freq[ele]=freq[ele]+1;
        }
        else{
            freq[ele]=1;
            
        }
        if(freq[ele]>maxfreq){
            maxfreq=freq[ele];
            value=ele;
        }
    })
    return value;
}




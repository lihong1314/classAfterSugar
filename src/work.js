import { hashHistory } from "react-router";


window.ToPage=function(page){
    if(window.data.data[page].type==="start"){
        hashHistory.replace("/Page0"+"?id="+page)
    }else 
    if(window.data.data[page].type==="game"){
        hashHistory.replace("/Page1"+"?id="+page)
    }else 
    if(window.data.data[page].type==="end"){
        hashHistory.replace("/Page2"+"?id="+page)
    }
    
} 



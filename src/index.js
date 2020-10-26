import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
function recur(obj){
    return(
        <>
        <obj.type name={obj.name} root={obj.root} style={obj.style}>
            {obj.children!==undefined?recur(obj.children):null}
        </obj.type>
        </>
    );
}
function generateCodeFromObject(obj){
    //return a code generated string
    return (
        <>
        {recur(obj)}
        </>
    )
   }
   
module.exports=generateCodeFromObject;


ReactDOM.render(<App />, document.getElementById("root"));
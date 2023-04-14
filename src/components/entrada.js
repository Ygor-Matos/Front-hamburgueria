import React from "react";

export default class entrada extends React.Component{

    render(){
        return(
            <div>
                <input type="Number" class="form-control" 
                id="PreçoDoHamburguer`" 
                onChange={(e)=>{this.setState({Preco: e.target.value})}}/>
            </div>




        )





        }






    }







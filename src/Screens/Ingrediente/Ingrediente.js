import React from "react";
import './Ingrediente.css';
import Preencher from "../../components/Preencher";
import axios from 'axios';


export default class Ingrediente extends React.Component{

    state={
        nome:'vamo ver se vai',
        ID:54621,
        saida:''
    }

    

    create = () =>{
        axios.post('http://localhost:8080/api/Ingrediente',
            {
                nome : this.state.nome,
            }
        ).then( response =>
            {
                console.log(response);
            }
        ).catch(error =>
            {
                console.log(error.response);
            }
        );   
    }


    imprimirIngrediente=()=>{
        const saida="O Ingrediente: "+this.state.nome+"\n"+" Foi registrado com Sucesso seu ID é:"+this.state.ID;
        this.setState({saida});
    }

    render(){
        return(

            <div class="Ingrediente">
                <Preencher title="Nome do Ingrediente"></Preencher>
                <input type="text" class="form-control" 
                id="NomeDoIngrediente" 
                placeholder="Ex: Pão, Carne, Salsicha..."
                onChange={(e)=>{this.setState({nome: e.target.value})}}/>
                <br/>
                

                <button onClick={this.create} class="btn btn-dark">Registrar Ingrediente</button>

                <br/>
                <br/>


                <div class="alert alert-dismissible alert-success">
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    {this.imprimirIngrediente} 
                </div>


            
            </div>
            


        )
        









    }

}
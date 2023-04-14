import React from "react";
import './Hamburguer.css';
import Preencher from "../../components/Preencher";
import axios from "axios";

export default class Hamburguer extends React.Component{
    state={
        Nome:'',
        Preco:0,
        Ingredientes:'',
        Saida:''
    }

    create =() =>{
        axios.post('http://localhost:8080/api/Hamburguer',
            {
            ingrediente: this.state.Ingredientes,
            nome :this.state.Nome,
            preco: this.state.Preco
            }
        ).then(response =>
            {
                console.log(response);
            }
            
        ).catch(error =>
            {
                console.log(error.response);
            }
        )
    }



    imprimirHamburguer=()=>{
        const Saida="Nome: "+this.state.Nome+" Preço:"+this.state.Preco+" Ingredientes:"+this.state.Preco;
        this.setState({Saida});
    }

    //{(e)=>{this.setState({Ingredientes: e.target.value})}}

    render(){
        return(
            <div>
                <Preencher title='Nome do Hamburguer'></Preencher>
                <input type="text" class="form-control" 
                id="NomeDoHamburguer" 
                placeholder="Ex:Vegano, de Carne, Moda da casa"
                onChange={(e)=>{this.setState({Nome: e.target.value})}}/>


                <Preencher title= 'Digite o preço:'></Preencher>
                <input type="Number" class="form-control" 
                id="PreçoDoHamburguer`" 
                onChange={(e)=>{this.setState({Preco: e.target.value})}}/>
                

                <Preencher title = 'Ingredientes'></Preencher>
                <input type="TEXT" class="form-control" 
                id="Ingredientes" placeholder="Ex: Pão, Carne, Salsicha..."
                onChange={(e)=>{this.setState({ingrediente: e.target.value})}}/>

                <br/>

                <button onClick={this.create} class="btn btn-dark">Registrar Hamburguer </button>
                <br/>
                <br/>
                <div class="alert alert-dismissible alert-success">
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    {this.state.Saida}
                </div>




            </div>









        )



    }








}
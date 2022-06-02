import React, { useState } from 'react';
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const[desc, setDesc] = useState("");
    const[amount, setAmount] = useState("");
    const[isExpense, setExpense] = useState("false");
    const[data, setData] = useState("");
    const[cnpj, setCNPJ] = useState("");
const generateID = () => Math.round(Math.random() * 1000);

const handleSave = () => {
      if (!desc || !amount){
          alert("informe a descrição e o valor!");
          return;
      } else if(amount < 1) {
          alert("O valor não pode ser negativo!");
          return;
      } else if(data < 1 ){
          alert("data invalida")
          return;
      }else if(data > 31 ){
        alert("data invalida")
        return;
      }

  const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
      data: data,
      cnpj: cnpj,
    };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
        setData("");
        setCNPJ("");
  };

    return (
    <>
        <C.Container>
      

            
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <C.Input 
                    value={desc} 
                    onChange={(e) => setDesc(e.target.value)}/>
            </C.InputContent>
        
        
            <C.InputContent>
                <C.Label>Valor </C.Label>
                <C.Input 
                    value={amount} 
                    type="number" 
                    onChange={(e) => setAmount(e.target.value)}/>
            </C.InputContent>


            <C.InputContent>
                <C.Label>Data </C.Label>
                <C.Input 
                    value={data} 
                    type="number" 
                    onChange={(e) => setData(e.target.value)}/>
            </C.InputContent>
            <C.InputContent>
                <C.RadioGroup>
                <C.Input 
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1" 
                    onChange={() => setExpense(!isExpense)}/>
               <C.Label htmlFor='rIncome'>Entrada</C.Label>
                
                <C.Input 
                    type="radio"
                    id="rExpenses"
                    name="group1"
                    onChange={() => setExpense(!isExpense)}/>
                <C.Label htmlFor='rExpenses'>Saída</C.Label>

                </C.RadioGroup>
                </C.InputContent>
                <C.Button onClick={handleSave}>Salvar</C.Button>
        </C.Container> 
        <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;


import React,{useState} from "react";
import Grid from "../Grid";
import * as c from "./styles";

const Form = ({ handleAdd,transactionsList, setTransactionsList }) => {
    const [desc,setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount){
            alert("Informe a descricao do e o valor");
            return;
        }else if(amount < 1 ){
            alert("O valor tem que ser positivo");
            return;
        }
        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };
        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };
    return (
        <>
            <c.Container>
                <c.InputContent>
                    <c.Label>Descricao</c.Label>
                    <c.Input value={desc} anChange ={(e) => setDesc(e.taarget.value)}/>
                </c.InputContent>
                <c.InputContent>
                    <c.Label>valor</c.Label>
                    <c.Input
                        value={amount}
                        type="number"
                        anChange={(e) => setAmount(e.taarget.value)}
                        />
                </c.InputContent>
                <c.RadioGroup>
                    <c.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        anChange ={() =>setExpense(!isExpense)}
                        />
                        <c.Label htmlFor="rIncome">Entrada</c.Label>
                        <c.Input
                            type="radio"
                            id="rExpenses"
                            name="group1"
                            anChange ={() => setExpense(!isExpense)}
                        />
                        <c.Label htmlFor="rExpenses">Saida</c.Label>
                </c.RadioGroup>
                <Form.Button onClick={handleSave}>ADICIONAR</Form.Button>
            </c.Container>
            <Grid itens={transactionsList} setItens={setTransactionsList}/>
        </>
    );
};

export default Form;
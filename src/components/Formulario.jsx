import Card from "./Card";
import { useState } from "react"

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(0);
    const [frutas, setFrutas] = useState("");
    const [correct, setCorrect] = useState(false)

    const sendForm = (e) => {
        e.preventDefault();
        
        if (nombre.trim() === nombre && nombre.length >= 3 && frutas.length >= 6) {
            setCorrect(!correct)
        }else{
           setCorrect(correct)
          alert("Por favor chequea que la información sea correcta")
        }
    }
    const sendName = (e) =>{
        setNombre(e.target.value);
    }
    const sendAge = (e)=>{
        setEdad(e.target.value);
    }
    const sendFrutas =(e) =>{
        setFrutas(e.target.value)
    }
   
  return (
    <>
    <h3>Formulario Frutas Favoritas</h3>
        <form onSubmit={sendForm}>
            <input 
            type="text"
            value={nombre}
            onChange={sendName}
            placeholder="Ingresa tu nombre" />
            <input 
            type="text"
            value={frutas}
            onChange={sendFrutas}
            placeholder="Ingrese la fruta de su preferencia" />
            <input 
            type="number"
            value={edad}
            onChange={sendAge}
            placeholder="Ingresa la edad" />
            <input type="submit"/>
        </form>
        {correct ? <Card name={nombre} fruit={frutas} age={edad}/> : <Card name={null} fruit={null} age={null}/>}
        
    </>
  )
}

export default Formulario
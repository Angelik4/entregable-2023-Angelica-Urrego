//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({name, fruit, age}) {
  return (
    <div>
      <h2>Esta es una card con la informacion</h2>
      <p>Tu nombre es: {name}</p>
      <p>Tu furta favorita es: {fruit}</p>
      <p>Tu edad actual son {age} años</p>
    </div>
  );
}

export default Card;

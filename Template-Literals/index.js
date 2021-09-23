const nombre = "Luis";
const apellido = "Esteban";

// Version Antigua concatenar con +
console.log(" Este es mi nombre:" + nombre + " " + apellido);

// Version actual y recomendada de concatenar
console.log(`Este es mi nombre :${nombre} Este es mi apellido: ${apellido}`);

// Esto en react lo puedes usar asi:

const Index = ({ bgColor }) => {
  return <div className={`bg-color-${bgColor}`}></div>;
};

export default Index;

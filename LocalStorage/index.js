

function guardar_localstorage() {
      let persona = {
        nombre: 'Luis',
        apellido: 'Fernandez',
        edad: 15,
        medidas = {
            altura: 1.20,
            peso: 55
        }
    }

  const nombre = "Alex";

  localStorage.setItem("nombre",  JSON.stringify(nombre));
}

guardar_localstorage();


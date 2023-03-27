//Agrega funcion de vue que realice una accion al llegar al final de la pagina


<template>
  <div>
    <form>
      <label for="name">Nombre:</label>
      <input type="text" v-model="name" />

      <label for="email">Email:</label>
      <input type="text" v-model="email" />

      <button @click.prevent="submitForm">Registrarse</button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {

    const name = ref('') // Estado para el nombre del usuario. 
    const email = ref('') // Estado para el email del usuario. 

    const submitForm = () => { // Función para enviar el formulario. 

      console.log('Nombre:', name.value) // Imprimir el nombre en la consola. 
      console.log('Email:', email.value) // Imprimir el email en la consola. 

    }
    // Nombre de la función que se ejecutará al llegar al final de la página
    const scrollToBottom = () => {
        // Obtener el elemento del DOM que contiene el contenido de la página
        let content = document.querySelector('#content');

        // Comprobar si el usuario ha llegado al final de la página
        if (content.scrollTop + content.clientHeight >= content.scrollHeight) {
            // Realizar una acción aquí, como mostrar una alerta o cargar más contenido 
            alert('Has llegado al final de la página!');
        } 
    } 
    onMounted(() => { // Se ejecuta cuando se monta el componente. 
      window.addEventListener('scroll', scrollToBottom); 
      console.log('Formulario de registro cargado') // Mensaje de confirmación en la consola. 

    })

    return { name, email, submitForm } // Devolver los estados y funciones al componente padre.  

  }  
}  
</script>
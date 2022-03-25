<template>
  <div>
<div class="row">
    <form @submit.prevent="validarUsuario" class="col s12">
     

      <div class="row">
        <div class="input-field col s12">
          <input v-model.trim="email" id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      
      <div class="row">
        <div class="input-field col s12">
          <input  v-model.trim="pass1" id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
        <div class="row">
        <div class="input-field col s12">
          <input v-model.trim="pass2" id="passwordConfir" type="password" class="validate">
          <label for="passwordConfir">Confirmar password</label>
        </div>
      </div>
      <button  class="btn" type="submit" name="action">Registrar
        <i class="material-icons right">send</i></button>
    </form>
  </div>
  
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data() {
    return {
      email:"",
      pass1:"",
      pass2:"",

    }
     },
    
    methods:{
    async  validarUsuario(){
        if(this.email.length!="" && this.pass1.length>0 && this.pass2.length>0){
          if(this.pass1===this.pass2){
              const API_KEY ="AIzaSyAXMfTGznMyxQ8FZn8GdKSqG1edSP5Mtf0";
              const res = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
                {
                  header: {
                    "Content-Type": "application/json",
                  },
                  email:this.email,
                  password:this.pass1,
                  returnSecureToken:true
                }
               
              );
               this.$router.push('/login');
           /*  const res = await fetch(
              `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
              {
                method: 'POST',
                body:JSON.stringify({
                  email:this.email,
                  password:this.pass1,
                  returnSecureToken:true
                })
              }                    
            ); */
            console.log(res); 
          }else{
            alert("Las contraseñas no coinciden");
            return false;
          }
        }else{
          alert("Debe llenar todos los campos");
          return false;
        }
      }
    }

}
</script>



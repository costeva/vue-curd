<template>
  <div>
    <div class="row">
     <!--<div  class="col s12 ">
    
    <div v-if="errors" class="card">
    <h4 class="header">Error</h4>
      <div class="card-stacked">
        <div class="card-content center-align">
        <i class="material-icons large">error</i>
          <p>{{errors}}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>-->
      <form @submit.prevent="validarLogin" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              v-model.trim="email"
              id="email"
              type="email"
              class="validate"
            />
            <label for="email">Email</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input
              v-model.trim="pass"
              id="password"
              type="password"
              class="validate"
            />
            <label for="password">Password</label>
          </div>
        </div>
  <button @click="showAlert">Hello world</button>
        <button class="btn" type="submit" name="action">
          Ingresar <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>

import axios from 'axios';

export default {
  name: 'logIn',
  data() {
    return {
      email:"",
      pass:"",
      errors:false,


    }
  },

  mounted() {
    this.showAlert();
  },

  methods:{

     showAlert() {
       
     this.$swal('Hello Vue world!!!');
    },

   async validarLogin(){
if(this.email.length!="" && this.pass.length>=6){
              const API_KEY ="AIzaSyAXMfTGznMyxQ8FZn8GdKSqG1edSP5Mtf0";
            try{
              const res = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
                {
                  header: {
                    "Content-Type": "application/json",
                  },
                  email:this.email,
                  password:this.pass,
                  returnSecureToken:true
                }
              );
              console.log(res);
              this.$router.push('/proyectos');
            }catch(error){
              console.log(error);

              this.errors=error.response.data.error.message;

              if(this.errors=="EMAIL_NOT_FOUND"){
                this.$swal=("El email no existe");
              }
              if(this.errors=="INVALID_PASSWORD"){
                this.$swal=("La contraseña es incorrecta");
              }
              if(this.errors=="USER_DISABLED"){
                this.$swal=("El usuario esta deshabilitado");
              }
              if(this.errors=="TOO_MANY_ATTEMPTS_TRY_LATER"){
                this.$swal=("Demasiados intentos, intente mas tarde");
              }
            }
          }
        }
      }
    }          
</script>

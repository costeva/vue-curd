<template>
 <div>
 <div class="form card-panel z-depth-5">
          <h5 class="center neon-sub-line">Login</h5>
            <p class="center">¡Ingrese los datos!</p>
    <form class="row formTop"  @submit.prevent="validarLogin">

 <div class="col-12 ftcAlto input-field ul " >
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <div class="input-group-text"><i class="material-icons  col-form-label">email</i></div>
      <input v-model.trim="email" type="email" class="form-control validate neon-input neon-input_disabled neon__purple" id="inputEmail3" placeholder="Email">
    </div>
  </div>


      <div class="col-12 ftcAlto input-field ul">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <div class="input-group-text"> <i class="material-icons col-form-label">lock</i></div>
      <input v-model.trim="pass" type="password" class="form-control validate neon-input neon-input_disabled neon__purple"  id="inputPassword3" placeholder="Pass">
    </div>
  </div>
            <div class="col-12">
    <button type="submit" class="btn btn-primary neon__purple" name="action">Ingresar <i class="material-icons right">send</i></button>
  </div>
    </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
// ES6 Modules or TypeScript

// CommonJS

export default {
  name: "logIn",
  data() {
    return {
      email: "",
      pass: "",
      errors: false,
    };
  },

  methods: {
    async validarLogin() {
      if (this.email.length != "" && this.pass.length >= 6) {
        const API_KEY = "AIzaSyAXMfTGznMyxQ8FZn8GdKSqG1edSP5Mtf0";
        try {
          const res = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
            {
              header: {
                "Content-Type": "application/json",
              },
              email: this.email,
              password: this.pass,
              returnSecureToken: true,
            }
          );
          console.log(res);
          localStorage.setItem("user", JSON.stringify(res.data));          
          this.$emit('login', res.data);
          this.$router.push("/proyectos");
        } catch (error) {
          console.log(error);

          this.errors = error.response.data.error.message;

          if (this.errors == "EMAIL_NOT_FOUND") {
            swal({
              title: "Error!",
              text: "El email no existe",
              icon: "error",
              button: "Aceptar",
            });
          }
          if (this.errors == "INVALID_PASSWORD") {
            swal({
              title: "Error!",
              text: "La contraseña es incorrecta",
              icon: "error",
              button: "Aceptar",
            });
          }
          if (this.errors == "USER_DISABLED") {
            swal({
              title: "Error!",
              text: "El usuario no existe",
              icon: "error",
              button: "Aceptar",
            });
          }
          if (this.errors == "TOO_MANY_ATTEMPTS_TRY_LATER") {
            swal({
              title: "Error!",
              text: "Demasiados intentos, prueba más tarde",
              icon: "error",
              button: "Aceptar",
            });
          }
        }
      }
    },
  },
};
</script>


<style scoped>


</style>
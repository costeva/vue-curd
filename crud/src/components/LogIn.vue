<template>
  <div>
    <div class="row formTop">
      <div class="col l3 m3 s12 "></div>
      <div class="col l6 m6 s12 ">
        <form class="" @submit.prevent="validarLogin">
          <div class="form form-panel z-depth-5">
            <h5 class="center neon-sub-line">Login</h5>
            <p class="center">Ingrese las datos correspondientes!</p>

            <div class="input-field ul">
              <i class="material-icons prefix button-icon-rotate email">email</i>
              <input
                v-model.trim="email"
                type="email"
                name="email"
                class="validate neon-input neon-input_disabled neon__purple"
              />
              <label>Ingrese su email</label>
            </div>

            <div class="input-field ul">
              <i class="material-icons prefix">lock</i>
              <input class="neon-input neon-input_disabled neon__purple" v-model.trim="pass" type="password" name="pass" />
              <label>Ingrese el password</label>
            </div>

            <button class="btn neon__purple left col s12" type="submit" name="action">
              Ingresar <i class="material-icons right">send</i>
            </button>

            <div class="clearfix"></div>
          </div>
        </form>
      </div>
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
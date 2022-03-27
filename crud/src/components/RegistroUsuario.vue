<template>
  <div>
    <div class="row formTop">
      <div class="col l3 m3 s12"></div>
      <div class="col l6 m6 s12">
        <form @submit.prevent="validarUsuario">
          <div class="form card-panel z-depth-5">
            <h4 class="center neon-sub-line">¡Crear nueva cuenta!</h4>
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input
                v-model.trim="email"
                type="email"
                name="email"
                id="disabled_input"
                class="validate neon-input neon-input_disabled neon__purple"
              />
              <label>Ingrese el email</label>
            </div>

            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input
                v-model.trim="pass1"
                type="password"
                name="pass1"
                id="disabled_input"
                class="validate neon-input neon-input_disabled neon__purple"
              />
              <label>ingrese la contraseña</label>
            </div>

            <div class="input-field">
              <i class="neon__purple  neon-input material-icons prefix">vpn_key</i>
              <input
                v-model.trim="pass2"
                type="password"
                name="pass2"
                id="disabled_input"
                class="validate neon-input neon-input_disabled neon__purple"
              />
              <label>Confirme la contraseña</label>
            </div>
            <p class="right">
              ¿Tenés cuenta?
              <a href="/login" class="modal-trigger">login</a>
            </p>
            <button class="btn neon__purple left col s12" type="submit" name="action">
              Registrame <i class="material-icons right">send</i>
            </button>
            <div class="clearfix"></div>
          </div>
        </form>
      </div>
      <div class="col l3 m3 s12"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      email: "",
      pass1: "",
      pass2: "",
    };
  },

  methods: {
    async validarUsuario() {
      if (
        this.email.length != "" &&
        this.pass1.length > 0 &&
        this.pass2.length > 0
      ) {
        if (this.pass1 === this.pass2) {
          const API_KEY = "AIzaSyAXMfTGznMyxQ8FZn8GdKSqG1edSP5Mtf0";
          const res = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
            {
              header: {
                "Content-Type": "application/json",
              },
              email: this.email,
              password: this.pass1,
              returnSecureToken: true,
            }
          );
          localStorage.setItem("user", JSON.stringify(res.data));
          this.$router.push("/login");
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
        } else {
          alert("Las contraseñas no coinciden");
          return false;
        }
      } else {
        alert("Debe llenar todos los campos");
        return false;
      }
    },
  },
};
</script>

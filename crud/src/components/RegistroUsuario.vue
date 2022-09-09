<template>
  <div>
 <div class="form card-panel z-depth-5">
            <h4 class="center neon-sub-line">¡Crear cuenta!</h4>
    <form class="row formTop" @submit.prevent="validarUsuario">

 <div class="col-12 ftcAlto input-field">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <div class="input-group-text"><i class="material-icons  col-form-label">email</i></div>
      <input v-model.trim="email" type="email" name="email" class="form-control validate neon-input neon-input_disabled neon__purple" id="inputEmail3" placeholder="Email">
    </div>
  </div>


      <div class="col-12 ftcAlto input-field">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <div class="input-group-text"> <i class="material-icons  col-form-label">lock</i></div>
      <input   v-model.trim="pass1" type="password" class="form-control validate neon-input neon-input_disabled neon__purple" name="pass1"  id="inputPassword3" placeholder="Password">
    </div>
  </div>

   

         <div class="col-12 ftcAlto">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <div class="input-group-text">  <i class="material-icons prefix col-form-label">vpn_key</i></div>
      <input   v-model.trim="pass2" type="password" name="pass2" class="form-control validate neon-input neon-input_disabled neon__purple" id="inputPassword3" placeholder="Confirmar Password">
    </div>
  </div>

            <div class="col-12 ftcAlto">
    <button type="submit" class="btn btn-primary neon__purple" name="action">Registrame <i class="material-icons right">send</i></button>
  </div>
   <p class="right ftcAlto">
              ¿Tenés cuenta?
              <a href="/login" class="modal-trigger">login</a>
            </p>
    </form>
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

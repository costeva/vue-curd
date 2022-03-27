<template>
    <div>
<nav class="nav">
    <div class="nav-wrapper">
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
      <li>
      <router-link class="roterColor"  v-if="!sesion" to="/">Registro</router-link>
      </li>
      <li>
      <router-link class="roterColor" v-if="!sesion" to="/login">Login</router-link>
      </li>
      <li>
      <router-link v-if="sesion" class="waves-effect waves-light btn neon__purple" to="/proyectos">Proyectos</router-link>
      </li>
<li>
      <router-link @click="cerrarSesion" v-if="sesion" class="waves-effect waves-light btn neon__purple" to="/">Cerrar Sesion</router-link>
      </li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
  <li>
   <router-link class="roterColor" v-if="!sesion" to="/">Registro</router-link>
   </li>
  <li>
  <router-link class="roterColor" v-if="!sesion" to="/login">Login</router-link>
  </li>
   <li>
      <router-link class="roterColor" v-if="sesion"  to="/proyectos">Proyectos</router-link>
      </li>

      <li>
      <router-link @click="cerrarSesion" v-if="sesion" class="waves-effect waves-light  btn neon__purple" to="/">Cerrar Sesion</router-link>
      </li>
  </ul>
          
    </div>
</template>
<script>
export default {
  props: ['sesion'],

    name: 'navbar',
      


methods: {
    cerrarSesion() {
    localStorage.removeItem("user");
    this.$emit('login', false);
      this.$router.push("/");
    },

    

    
  },

    mounted() {
      M.AutoInit();
      
      
    },


}
</script>

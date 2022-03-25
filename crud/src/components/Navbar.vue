<template>
    <div>
<nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
      <li>
      <router-link to="/">Home</router-link>
      </li>
      <li>
      <router-link to="/login">Login</router-link>
      </li>
      <li>
      <router-link class="waves-effect waves-light btn" to="/proyectos">Proyectos</router-link>
      </li>

      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
  <li>
   <router-link to="/">Registro</router-link>
   </li>
  <li>
  <router-link to="/login">Login</router-link>
  </li>
   <li>
      <router-link  to="/proyectos">Proyectos</router-link>
      </li>
  </ul>
          
    </div>
</template>
<script>
export default {
    name: 'navbar',
    data() {
        return {
            
        }

      
    },

    mounted() {
      M.AutoInit();
    },
    
}
</script>

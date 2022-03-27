<template>
<div id="nav">

    <Navbar @login="handleLogin" :sesion="sesion"></Navbar>  

  
  
  <router-view @login="handleLogin"/>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  data() {
    return {
      sesion:localStorage.getItem('user') ,
    }
  },
  

  components: {
    Navbar
  },

  methods: {
    handleLogin(user) {
      this.sesion = user;
    },
  },

  watch: {
     sesion(){
        const user =localStorage.getItem('user');
        if(user){
          return true;
        }
        return false;
    } 
  },


 


}

</script>
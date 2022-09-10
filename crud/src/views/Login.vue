<template>
  <div  class="container ftcAlto ">
      
<logIn @login="loginEmit"/>   

  </div>
</template>
<script>
import logIn  from '../components/LogIn.vue'
export default {
  components: {
    logIn
  },
 
    methods:{
        loginEmit(user){
            this.$emit('login',user);
        }
    
    
    }
}
</script>
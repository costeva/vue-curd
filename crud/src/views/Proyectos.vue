<template lang="es">
    <div class="container">
        <div class="row">
        <h1 class="neon-sub-line" >Mis Proyectos</h1>
        <hr/>
         <router-link class="btn"  to="/registro-proyecto">Nuevo Proyecto</router-link> 
       
    </div>
     <contenedor/>
     </div>
</template>
<script>
  import contenedor from '@/components/contenedor.vue';
export default {
  

    components: {
        contenedor
    }
    
}
</script>

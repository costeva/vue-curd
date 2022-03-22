<template lang="es">
    <div>
         <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{data.nombre}} </span>
          <p>{{data.descripcion}}</p>
           <div>
        <span v-for="(tecnologias,index) in data.tecnologias" :key="index" >{{index < data.tecnologias.length-1?`${tecnologias.toUpperCase()}, `: tecnologias.toUpperCase()}}</span> 
        </div>
        </div>  
       
        <div class="card-action">
         

         
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    data: Object,
  },
};
</script>



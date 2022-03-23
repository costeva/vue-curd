<template lang="es">
    <div>
         <div class="card blue-grey darken-1" v-if="data.data.status" >
        <div class="card-content white-text">
          <span class="card-title">{{data.data.nombre}} </span>
          <p>{{data.data.descripcion}}</p>
           <div>
        <span v-for="(tecnologias,index) in data.data.tecnologias" :key="index" >{{index < data.data.tecnologias.length-1?`${tecnologias.toUpperCase()}, `: tecnologias.toUpperCase()}}</span> 
        </div>
        <div class="card-action">
            <router-link class="btn col s6"  :to="`/editar/${data.id}`">Editar</router-link> 
            <button class="btn col s6" @click="eliminar">Eliminar</button>         
        </div>
         </div>  
      </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "Card",
  props: {
    data: Object,
  },
  
  methods: {
    async eliminar() {
      const res = await axios.patch(
        `https://crud-vue-11b7f-default-rtdb.firebaseio.com/Proyectos/${this.data.id}.json`,  {status:false}        
      );     
    },
  },

};
</script>



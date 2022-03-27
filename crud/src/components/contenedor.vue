<template >
  <div>
    <div class="row">
    
      <div class="col s12 m6">
      
        <Card @eliminar="deleteCard"  v-for="(proyecto,i) in proyectos" :key="i" :data="proyecto"  />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

import axios from "axios";

export default {
  components: {
    Card,
  },

  data: () => ({
    proyectos: [],
  }),

  mounted() {
    this.getProyectos();
  },

  methods: {
    async getProyectos() {
      const user = JSON.parse(localStorage.getItem("user"));
      
      const res = await fetch(
        `https://crud-vue-11b7f-default-rtdb.firebaseio.com/Proyectos/${user.localId}.json?auth=${user.idToken}`
      );
      
      const data = await res.json();

     for (const i in data) {
        
        this.proyectos.push( {
          id:i,
          data:data[i]
        } );
      }
    },

    deleteCard(id) {
      this.proyectos = this.proyectos.filter((proyecto) => proyecto.id !== id);
    },

  


  },
};
</script>

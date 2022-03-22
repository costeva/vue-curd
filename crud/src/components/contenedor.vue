<template >
<div>
    <div class="row">
    
    <div class="col s12 m6">
    <Card :data="proyectos"></Card> 
    </div>
  </div>
    </div>
</template>
<script>
import Card from '@/components/Card.vue';

import axios from 'axios';

export default {
    components: {
        Card
    },
    data() {
        return {
            proyectos:null,
        }
    },
    mounted() {
        this.getProyectos ();
    },

    methods: {
      async getProyectos() {
         await  axios.get('https://crud-vue-11b7f-default-rtdb.firebaseio.com/Proyectos/proyecto.json')
            .then(response => {
                this.proyectos=response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
}
</script>

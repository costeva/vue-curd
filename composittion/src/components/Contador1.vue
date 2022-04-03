<template >
    <div>
        <h2 :style="{color}">Contador1:{{contador}} </h2>
    </div>
</template>
<script>
import {inject} from 'vue';
export default {
     name: 'contador1',
     props: {
         
     },
     setup() {
         const contador=inject('valorCont');
         const color =inject('color');
         return {
             contador,
             color
         }
     }
 
 

    
}
</script>

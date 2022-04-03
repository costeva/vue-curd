<template lang="">
    <div>
        <button @click="accionContador">{{btnText}}</button>
       
    </div>
</template>
<script>
import {ref, computed} from 'vue'
export default {
 
  name: 'Btn',
 
  props:{
      btnText:String,
  },

  setup({btnText}, constext) {
      const accionContador=()=>{
          constext.emit('accion',btnText)
      }
 
    return {
      btnText,
        accionContador
      
    }
  }
    
  

}
</script>

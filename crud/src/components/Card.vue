<template lang="es">
    <div>
         <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{data.nombre}} </span>
          <p> {{data.descripcion}} </p>
        </div>
        <div>
        <span> {{data.tecnologias}} </span> 
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
name: 'Card',
props: {
   data:Object
        
    }
}
    

</script>

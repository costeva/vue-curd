<template>
  <div>
   <h1>{{title}}</h1>
   <hr/>
   <h2>constador:{{cont}}</h2>
<contador1/>

    <hr/>
<Btn btnText="Aumentar" @accion="aumentar"></Btn>
<Btn btnText="Disminuir" @accion="disminuir"></Btn>
      <hr/>
    <p>{{color}}</p>
  </div>
</template>

<script>
import Btn from './Btn'
import Contador1 from './Contador1'
import {ref,computed,provide} from "vue";
/* import {useContador} from '../hooks/useContador' */
export default {
  components: { Btn,Contador1}, 
 
  name: 'HelloWorld',
 
  props: ['msg'],
  setup(props) {
    
    const cont  =ref(0);
    const  aumentar=()=>cont.value++;
    const  disminuir=()=>cont.value--;
    const color = computed(()=>{
   return cont.value>0?'green':'red';
  });
  /*el provide te sirve para hacer global ese valor, luego hay que utilizar el inject donde lo quieras usar.*/
    provide('valorCont',cont);
    provide('color',color);
  



    return { cont, color, aumentar, disminuir};

    return {
      title: props.msg,
      ...useContador()
     
      
    }
  }
    
  

}
</script>

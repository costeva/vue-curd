/* import {ref,computed,provide} from "vue";
de esta manera podriamos utilizar el hoock junto con los provide y borrar todo lo que esta en HelloWorld.vue

export function useContador(){
    const cont  =ref(0);
    const  aumentar=()=>cont.value++;
    const  disminuir=()=>cont.value--;
  

     provide('valorCont',cont);
    provide('color',color);
  
  const color = computed(()=>{
   return cont.value>0?'green':'red';
  });


    return { cont, color, aumentar, disminuir};

 }  */
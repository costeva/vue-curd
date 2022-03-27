<template >
  <div class="container">
    <div class="row">
    <h2 class=" neon-sub-line">Editar Proyecto</h2>
    <hr/>
      <router-link class="btn" to="/proyectos">Volver</router-link>
      <form class="col s12" @submit.prevent="patcEdit">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="nombre"
              v-model="project.nombre"
              type="text"
              class="validate"
            />
            
          </div>
          <div class="input-field col s12">
            <input
              id="descripcion"
              v-model="project.descripcion"
              type="text"
              class="validate"
            />
            
          </div>
          <div>
            <p>
              <label>
                <input
                  type="checkbox"
                  v-model="project.tecnologias"
                  value="html"
                  class="filled-in"
                  checked="checked"
                />
                <span>HTML</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  v-model="project.tecnologias"
                  value="css"
                  class="filled-in"
                  checked="checked"
                />
                <span>Css</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  v-model="project.tecnologias"
                  value="js"
                  class="filled-in"
                  checked="checked"
                />
                <span>Js</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  v-model="project.tecnologias"
                  value="vue"
                  class="filled-in"
                  checked="checked"
                />
                <span>Vue</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  v-model="project.tecnologias"
                  value="php"
                  class="filled-in"
                  checked="checked"
                />
                <span>PhP</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  v-model="project.tecnologias"
                  value="react"
                  class="filled-in"
                  checked="checked"
                />
                <span>React</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  v-model="project.tecnologias"
                  value="mongo"
                  class="filled-in"
                  checked="checked"
                />
                <span>Mongo</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  v-model="project.tecnologias"
                  value="sql"
                  class="filled-in"
                  checked="checked"
                />
                <span>Sql</span>
              </label>
            </p>
          </div>
          <button
            class="btn waves-effect waves-light col s12 m2"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">Actualizar</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      /* creamos el objeto */
      project: {},
    };
  },

  mounted() {
    this.getEdit();
  },

  methods: {

   async getEdit(){
     const user = JSON.parse(localStorage.getItem('user'));
      const id = this.$route.params.id;

     const res = await axios.get(`https://crud-vue-11b7f-default-rtdb.firebaseio.com/Proyectos/${user.localId}/${id}.json?auth=${user.idToken}`);
      this.project = res.data;
    },
   
    async patcEdit(){
        const user = JSON.parse(localStorage.getItem('user'));
      const id = this.$route.params.id;
      const res = await axios.put(`https://crud-vue-11b7f-default-rtdb.firebaseio.com/Proyectos/${user.localId}/${id}.json?auth=${user.idToken}`, this.project);
      this.$router.push('/proyectos');
    },
 
  },
};


</script>

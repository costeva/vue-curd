<template >
  <div class="container">
    <div class="row">
     <h2 class=" neon-sub-line">Nuevo Proyecto</h2>
    <hr/>
      <router-link class="btn" to="/proyectos">Volver</router-link>
      <form class="col s12" @submit.prevent="registProyectos">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="nombre"
              v-model="project.nombre"
              type="text"
              class="validate neon-input neon-input_disabled neon__purple "
            />
            <label for="nombre">Nombre Proyecto</label>
          </div>
          <div class="input-field col s12">
            <input
              id="descripcion"
              v-model="project.descripcion"
              type="text"
              class="validate neon-input neon-input_disabled neon__purple"
            />
            <label for="descripcion">Descripción</label>
          </div>
          <div>
            <p>
              <label>
                <input
                  type="checkbox"
                  v-model="project.tecnologias"
                  value="html"
                  class="filled-in neon-input neon-input_disabled neon__purple"
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
                  class="filled-in neon-input neon-input_disabled neon__purple"
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
                  class="filled-in neon-input neon-input_disabled neon__purple"
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
                  class="filled-in neon-input neon-input_disabled neon__purple"
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
                  class="filled-in neon-input neon-input_disabled neon__purple"
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
                  class="filled-in neon-input neon-input_disabled neon__purple"
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
                  class="filled-in neon-input neon-input_disabled neon__purple"
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
                  class="filled-in neon-input neon-input_disabled neon__purple"
                  checked="checked"
                />
                <span>Sql</span>
              </label>
            </p>
            <div class="file-field input-field">
    </div>
          </div>
          <button
            class="btn waves-effect waves-light col s12 m2"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
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
      project: {
        nombre: "",
        descripcion: "",
        tecnologias: [],
        status: true,
       
      },
    };
  },

  methods: {
    async registProyectos() {
      const user = JSON.parse(localStorage.getItem('user'));
      const res = await axios.post(
        
        `https://crud-vue-11b7f-default-rtdb.firebaseio.com/Proyectos/${user.localId}.json?auth=${user.idToken}`,
        this.project
      );
      this.$router.push("/proyectos");

      
    },
  },
};

/* Agregar los v-model a los check-box*/
/*Crea hoja de styles con efecto neon para los input y tmb para los iconos.*/
</script>

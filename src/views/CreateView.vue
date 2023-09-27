<template>
<div class="container">
        <h5 style="color: black; opacity: 0.5; cursor: pointer;">Crear Proyecto</h5>
    <div class="row">
        <form @submit.prevent="createProjects" class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input v-model="projects.title" id="first_name" type="text" class="validate">
              <label for="first_name">Nombre del proyecto</label>
            </div>
            <div class="input-field col s12">
              <input v-model="projects.description" id="last_name" type="text" class="validate">
              <label for="last_name">Descripción del proeycto</label>
            </div>
            <p>
              <label>
                <input v-model="projects.priority" value="Mayor prioridad" type="checkbox" checked="checked" />
                <span>Mayor prioridad</span>
              </label>
            </p>
            <p>
              <label>
                <input v-model="projects.priority" value="Menor prioridad" type="checkbox" checked="checked" />
                <span>Menor prioridad</span>
              </label>
            </p>
            <div class="row">
            <button class="btn waves-effect waves-light col m7 s12" type="submit" name="action">
                <i class="material-icons center">send</i>
            </button>
            </div>
            <div class="row">
            <router-link to="/proyectos" class="col m7 s12 waves-effect waves-light amber lighten-1 btn"><i class="material-icons">arrow_back</i></router-link>
            </div>
          </div>
        </form>
    </div>
</div>
</template>
<script>
export default {
  data: ()=>({
      projects:{
        title:'',
        description:'',
        priority:[],
        status:true
      }
  }),
  methods: {
    async createProjects() {
        // console.log(this.projects);
            const user = JSON.parse(localStorage.getItem("user"))
            let url = `https://crud-vue-2defe-default-rtdb.firebaseio.com/projects/${user.localId}.json?auth=${user.idToken}`
            const res = await fetch(url,{
              method:"POST",
              body: JSON.stringify(this.projects)
            })
            // const data = await res.json()
            // this.projects = data;
            // console.log(data);
            
        }
  }
}
</script>
<style>

.row .material-icons{
    line-height: 37px
}
</style>

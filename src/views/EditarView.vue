<template>
    <div class="container">
            <h5 style="color: black; opacity: 0.5; cursor: pointer;">Editar Proyecto</h5>
        <div class="row">
            <form @submit.prevent="updateProject" class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input placeholder="Nombre del proyecto" v-model="projects.title" id="first_name" type="text" class="validate">
                  <label for="first_name"></label>
                </div>
                <div class="input-field col s12">
                  <input placeholder="Descripción del proyecto" v-model="projects.description" id="last_name" type="text" class="validate">
                  <label for="last_name"></label>
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
      data(){
        return{
          projects:{},
          id: this.$route.params.id
          
        }  
      },
      mounted(){
          this.getProject()
      },
      methods: {
        async getProject() {
                // const id = this.$route.params.id
                 const user = JSON.parse(localStorage.getItem("user"))
                const res = await fetch(`https://crud-vue-2defe-default-rtdb.firebaseio.com/projects/${user.localId}/${this.id}.json?auth=${user.idToken}`)
                const data = await res.json()
                this.projects = data;
                console.log(data);
                
    //         }
    //   }
    },
    async updateProject() {
       const user = JSON.parse(localStorage.getItem("user"))
      let url = `https://crud-vue-2defe-default-rtdb.firebaseio.com/projects/${user.localId}/${this.id}.json?auth=${user.idToken}`
            await fetch(url,{
              method:"PATCH",
              body: JSON.stringify(this.projects)
            })
                
    //         }
    //   }
    }
  }}
    </script>
    <style>
    
    .row .material-icons{
        line-height: 37px
    }
    </style>
    
<template>
          <div class="card horizontal" v-if="data.data.status">
                <div class="card-stacked">
                    <div class="card-content">
                        <span class="card-title">{{ data.data.title }}</span>
                        <p>{{ data.data.description }}</p>
                        <p><span v-for="(prio, i) in data.data.priority" :key="i">{{ prio }}</span></p>

                    </div>
                        <div class="card-action">
                            <div class="row">
                                <router-link :to="`/editar-proyect/${data.id}`" class="col s6 waves-effect waves-light amber lighten-1 btn"><i class="material-icons">edit</i></router-link>
                                <button @click="deleteProject" class="col s6 waves-effect
                                 waves-light red darken-1 btn"><i class="material-icons">delete</i></button>
                            </div>
                        </div>
                </div>
            </div>
</template>

<script>
export default {
    props:{
        data:Object,
    },
    methods: {
        async deleteProject(){
            const id = this.data.id
            const user = JSON.parse(localStorage.getItem("user"))
               const res = await fetch(`https://crud-vue-2defe-default-rtdb.firebaseio.com/projects/${user.localId}/${id}.json?auth=${user.idToken}`,{
                    method: "PATCH",
                    body: JSON.stringify({status: false})
                })
                const data = res.json()
                this.data.data.status=data["status"]
        }

    }
}
</script>

<style scoped>
nav i{
    line-height: 37px;
}
</style>
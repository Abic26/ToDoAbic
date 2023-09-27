<template>
    <div class="row">
        <div class="col s12 m7">
            <card-project v-for="(project, i) in projects" :key="i" :data="project"/>
        </div>
    </div>
</template>

<script>
import CardProject from './CardProject.vue'
export default {
    data: () => ({
        projects:[],
    }),
    components:{
        CardProject
    },
    mounted(){
        this.getProjects()
    },
    methods: {
        async getProjects() {
            const user = JSON.parse(localStorage.getItem("user"))
            let url = `https://crud-vue-2defe-default-rtdb.firebaseio.com/projects/${user.localId}.json?auth=${user.idToken}`
            const res = await fetch(url)
            const data = await res.json()

                for(let i in data){
                    // console.log(i);
                    this.projects.push({id: i,
                    data: data[i]})
                }
        }
    },

    

}
</script>

<style scoped>
div{
    color: black;
}
</style>
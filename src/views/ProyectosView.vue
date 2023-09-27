<template>
    <div class="container">
        <h1 style="opacity: 0.5;">Proyectos</h1>
        <br>
        <div class="row">
            <router-link to="/reg-proyects" class="col m7 s12 waves-effect waves-light amber lighten-1 btn"><i class="material-icons">add</i></router-link>
        </div>
        <contenedor/>
        
    </div>
</template>

<script>
import contenedor from "../components/contenedor.vue"
export default {
    components:{
        contenedor
    }

}

</script>
<style scoped>
.material-icons{
    line-height: 37px
}
.container h1{
    text-align: center;

}
.container .row{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 31%;
    width: 800px;
}
@media(max-width:1550px){
    .container .row{
    margin-left: -5%;
}
}
@media(max-width:1300px){
    .container .row{
    margin-left: -15%;
}
}
@media(max-width:1200px){
    .container .row{
    margin-left: -25%;
}
}
@media(max-width:830px){
    .container {
    margin-left: -5%;
}
}
@media(max-width:730px){
    .container {
    margin-left: 2%;
    width: auto;
}
}
@media(max-width:710px){
    .container,.container .row {
    width: auto;

}
}
@media(max-width:610px){
    .container,.container .row {
    width: auto;
    margin-right: 0;
    margin-left: 0;
}
}

</style>


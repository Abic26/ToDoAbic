<template>
    <div>
        <nav>
            <div class="nav-wrapper blue-grey">
                <router-link to="/" class="brand-logo">
                    <i style="margin-left: 30px;" class="material-icons center">archive</i>
                </router-link>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li>
                        <router-link v-if="!sesion" to="/">Registrar</router-link>
                    </li>
                    <li>    
                        <router-link v-if="!sesion" to="/login">Inicio de sesión</router-link>
                    </li>
                    <li>
                        <router-link v-if="sesion" to="/proyectos" class="waves-effect waves-light btn blue-grey lighten-1">Proyectos</router-link>
                    </li>
                    <li>
                        <router-link v-if="sesion" @click="cerrar_sesion" to="/" class="waves-effect waves-light btn red lighten-1">Cerrar Sesión</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    
      <ul class="sidenav" id="mobile-demo">
        <li>
            <router-link v-if="!sesion" to="/">Registrar</router-link>
        </li>
        <li>    
            <router-link v-if="!sesion" to="/login">Inicio de sesión</router-link>
        </li>
        <li>
            <router-link v-if="sesion" to="/proyectos" class="waves-effect waves-light btn blue-grey lighten-1">Proyectos</router-link>
        </li>
        <li>
            <router-link v-if="sesion" @click="cerrar_sesion" to="/" class="waves-effect waves-light btn red lighten-1">Cerrar Sesión</router-link>
        </li>
      </ul>
      
    </div>
    </template>
    
    <script>
    export default {
    mounted(){
        M.AutoInit();
    },
    methods:{
        cerrar_sesion(){
            localStorage.removeItem("user")
            location.reload()
            
        }
    },
    computed:{
        sesion(){
            const user = localStorage.getItem("user")
            if(user){
                return true
            }else{
                return false
            }
        }
    }
    }
    
    </script>
<template>
    <div class="row todo">
        <h5 style="opacity: 0.6;color: black;">Iniciar sesión</h5>

  <form @submit.prevent="validarUsuario" class="col s12">
    <div class="row">
      <div class="input-field col s12">
        <input v-model.trim="email" id="email" type="email" class="validate">
        <label for="email">Email</label>
      </div>
      <div class="input-field col s12">
        <input v-model.trim="pass1" id="password" type="password" class="validate">
        <label for="password">Contraseña</label>
      </div>
      <span style="color: red; opacity: 0.5;" v-if="errors">Correo o Contraseña invalido</span>
    </div>
    <button class="wave-effect waves-light btn m6 s12" type="submit">Iniciar Sesión</button>
  </form>

</div>
</template>

<script>
import router from '../router/index'

export default {
  data: ()=> ({
      email:"",
      pass1:"",
      errors: false,
  }),
  methods:{
      async validarUsuario(){
          if(this.pass1.length > 5 && this.email!=''){
                  const API_KEY 
                  ="AIzaSyB5gAon4-bRnIfofplodgjqlu8W3PDujxM"
                  try{
              const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,{
              method: "POST",
              body: JSON.stringify({
                  email: this.email,
                  password: this.pass1,
                  returnSecureToken:true
              })
          })
          const data = await res.json();
          if(data.error){
            this.errors=true 
            }else{
            this.errors=false 
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data))        
            router.push("/proyectos")
            // location.reload()
            // router.push("/proyectos")

            }}
            catch(error){}
          }else{
              return
          }
      }
  }
}

</script>
<style>
.todo{
  margin-top: 5%;
  margin-left: 35%;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  background:rgba(245, 245, 245, 0.709);
}
div.row button{
margin-left: 30%;
}
@media(max-width:1600px){
.todo{
  margin-left: 30%;
}

}
@media(max-width:848px){
.todo{
  margin-top: 10%;
  margin-left: 25%;
}

}
@media(max-width:630px){
.todo{
  margin-left: 20%;

}

}
@media(max-width:500px){
.todo{
  margin-left: 10%;
  width: 300px;
}

}
@media(max-width:333px){
.todo{
  margin-left: 5%;
  width: auto;
}

}
</style>
<template>
      <div class="row todo">
        <h5 style="opacity: 0.7; color: black;">Registrar usuario</h5>
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
        <div class="input-field col s12">
          <input v-model.trim="pass2" id="password_conf" type="password" class="validate">
          <label for="password">Confirmar Contraseña</label>
        </div>
      </div>
      <button class="wave-effect waves-light btn" type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
import router from '../router/index'
export default {
    data: ()=> ({
        email:"",
        pass1:"",
        pass2:""
    }),
    methods:{
        async validarUsuario(){
            if(this.pass1 === this.pass2 && this.pass1.length > 5 && this.email!=''){
                    const API_KEY 
                    ="AIzaSyB5gAon4-bRnIfofplodgjqlu8W3PDujxM"
                const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,{
                method: "POST",
                body: JSON.stringify({
                    email: this.email,
                    password: this.pass1,
                    returnSecureToken:true
                })
            })
            const data = await res.json();
            localStorage.setItem("user", JSON.stringify(data))
            location.reload()
            router.push("/proyectos")

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
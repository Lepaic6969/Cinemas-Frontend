import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import fetchData from '../../../helpers/fetchData.js';

const URL= 'https://movies-project-production-bb22.up.railway.app/api/v1/users';
export const  useUserStore=defineStore('users',{
    state:()=>({
        users:[],
        vacio:false
    }),
    actions:{
        async getUsers(){
            const {data}=await fetchData(URL);
           
            if(data.length ===0){
                console.log(data)
                this.vacio = true
                this.users = []
            }else{
                console.log(data)
                this.vacio = false
                this.users = data.data 
            }
                this.sortById();
        },
        
        getUserById(id){
            const index=this.users.map(el=>el._id).indexOf(id);
            return this.users[index]; 
        },
        
        async addUser(user){
            //this.users.push(user);
            //Petición HTTP...
            const data={
                name:user.name,
                lastName:user.lastName,
                password:user.password,
                email:user.email,
                phone:user.phone
            } 
            this.users = []
            await fetchData(URL,'post',data);
            this.getUsers()
            console.log("getett")
    }
}
});
import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://vue-udemy-47d60.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'aplication/json'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios
        Vue.prototype.axios = axios.create({
            baseURL: 'https://vue-udemy-47d60.firebaseio.com/',
            headers: {
                "Authorization": "abc123"
            }

        })

        Vue.prototype.axios.interceptors.request.use(config => {
            /*             console.log(config.method)
                                    if(config.method == 'post')
                                        config.method = 'put'  */
            return config
        }, error => Promise.reject(error))

        //pegando o ID do usuario (firebase) e colocando dentro do objeto usuario
        Vue.prototype.axios.interceptors.response.use(res => {
            /*             const arr = []
            
                        for(let chave in res.data){
                            arr.push({id: chave, ...res.data[chave]})
                            //forma antiga e depreciada => arr.push({id: chave, nome: res.data[chave].nome, email: res.data[chave].email})
                        }
                        res.data = arr */
            return res
        }, error => Promise.reject(error))
    }
})

import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';
const createStore = () => {

    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations: {
            /** @params state is the loadedPosts of state property
             * @params posts is the payload from whete it is to be committed
             */
            setPosts(state, payload) {
                state.loadedPosts = [...payload];
            },

            addPost(state, post) {
                state.loadedPosts.push({ ...post });
            },
            editPost(state, editedPost) {
                console.log(editedPost.id);
                console.log(editedPost);
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id );
                state.loadedPosts[postsIndex] = editedPost;

            },
            findPost(state, payload) {
                state.loadedPosts = payload;
            },
            setToken(state, token)
            {
                state.token = token.tokenValue;
            },
            clearToken(state) {
                state.token = null;
            }
            
        },
        actions: {
            
            /** call the api and commit it to the mutations 
             */
            nuxtServerInit(vueContext, context) {
                return axios.get(process.env.baseUrl + '/posts.json')
                .then(res => {
                    const postsArray = [];
                    for(const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key})
                    }
                    vueContext.commit('setPosts', postsArray);
                })
            },

            addPost(context,postData) {

               return axios.post(process.env.baseUrl + '/posts.json', postData)
            .then(response => {
                context.commit('addPost', {...postData, id: response.data.name });
            })
            .catch(e => console.log(e));
            
            },

            editPost(context, editedPost) {

                return axios.put(process.env.baseUrl + '/posts/' 
                + editedPost.id 
                + '.json?auth=' + context.state.token, editedPost)
                .then(res => {

                    context.commit('editPost', editedPost)
                })
                .catch(e => console.log(e))
            },
            
            
            getPostById(context, payload) {
                console.log(payload.id);
               return axios.get(process.env.baseUrl + '/posts/' + payload.id + '.json')
                .then(res => {
                    context.commit('findPost', {...res.data})
            })
            },
            authenticateUser(context, authData) {
                if(authData.isLogin) {
                var authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' 
            + process.env.fbAPIKey;
            }
            else{
              var authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' 
            + process.env.fbAPIKey;
            }
          console.log(authUrl);
          return axios.post( authUrl, {
              email:authData.email,
              password:authData.password,
              returnSecureToken:true
            }
            ).then((result) => {
              console.log(result.data.idToken);
              context.commit('setToken', { tokenValue: result.data.idToken });
              localStorage.setItem('token', result.data.idToken);
              localStorage.setItem('tokenExpiresIn', 
              new Date().getTime() 
              + result.data.expiresIn * 1000);
              Cookie.set('jwt',result.data.idToken);
              Cookie.set('expirationdate', new Date().getTime() 
              + result.data.expiresIn * 1000);
              context.dispatch('setLogoutTimer', result.data.expiresIn * 1000);
            }).catch(e => console.log(e));
      
        },
        setLogoutTimer(context, duration) {
            setTimeout(() => {
                context.commit('clearToken');
            }, duration);
        },
        initAuth(context, req) {

        if(req) {
                if(!req.headers.cookie) {
                    return;
                }
            const jwtCookie = req.headers.cookie.split(';')
            .find(c => c.trim().startsWith('jwt='));
            if(!jwtCookie) {
                return;
            }
            const token = jwtCookie.split('=')[1];
        } else{
                const token = localStorage.getItem('token');
                const expirationdate = localStorage.getItem('tokenExpiresIn')
    
                if(new Date() > +expirationdate || !token)
                {
                    return;
                }
            }
            const expirationdateforlogin = localStorage.getItem('tokenExpiresIn');
            const tokenval = localStorage.getItem('token');
            context.dispatch('setLogoutTimer', expirationdateforlogin - new Date().getTime());
            context.commit('setToken', { tokenValue: tokenval });
        }



        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
            getpost(state) {
                return state.loadedPosts;
            },
            isAuthenticated(state) {
                return state.token != null; 
            }

        }        
    })
}
export default createStore
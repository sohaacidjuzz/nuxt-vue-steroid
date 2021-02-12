import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {

    return new Vuex.Store({
        state: {
            loadedPosts: []
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
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id );
                state.loadedPosts[postsIndex] = editedPost;

            },
            findPost(state, payload) {
                state.loadedPosts = payload;
            }
            
        },
        actions: {
            
            /** call the api and commit it to the mutations 
             */
            nuxtServerInit(vueContext, context) {
                return axios.get('https://nuxt-js-66865-default-rtdb.firebaseio.com/posts.json')
                .then(res => {
                    const postsArray = [];
                    for(const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key})
                    }
                    vueContext.commit('setPosts', postsArray);
                })
            },

            addPost(context,postData) {

               return axios.post('https://nuxt-js-66865-default-rtdb.firebaseio.com/posts.json', postData)
            .then(response => {
                context.commit('addPost', {...postData, id: response.data.name });
            })
            .catch(e => console.log(e));
            
            },

            editPost(context, editedPost) {

                return axios.put('https://nuxt-js-66865-default-rtdb.firebaseio.com/posts/' 
                + editedPost.id 
                + '.json', editedPost)
                .then(res => {
                    context.commit('editPost', editedPost)
                })
                .catch(e => console.log(e))
            },
            
            
            getPostById(context, payload) {
                console.log(payload.id);
               return axios.get('https://nuxt-js-66865-default-rtdb.firebaseio.com/posts/' + payload.id + '.json')
                .then(res => {
                    context.commit('findPost', {...res.data})
            })
            }



        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
            getpost(state) {
                return state.loadedPosts;
            }

        }        
    })
}
export default createStore
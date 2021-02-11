import Vuex from 'vuex'

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
            }
        },
        actions: {
            /** @params state is the loadedPosts of state property
             * @params posts is the payload from whete it is to be committed
             */
            async setPosts({commit}) {
                //vuexContext.commit('setPosts', posts);

                return new Promise ((resolve, reject) => {
                    setTimeout(async () => {
                        commit('setPosts',[
                            {
                                id: "1",
                                title: 'My First Post',
                                author: 'Maximilan',
                                previewText: 'Supar amazing! that is amazing of first post!',
                                thumbNail: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg',
                                isAdmin: false
                            },
                            {
                                id: "2",
                                title: 'My Second Post',
                                author: 'Schamralauzer',
                                previewText: 'Supar amazing! that is amazing of second post!',
                                thumbNail: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg',
                                isAdmin: false
                            }
                        ])

                        resolve();
                    }, 1000)
                    
                })
            }



        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },

            getPostById: (state) => (id) => {
                return state.loadedPosts.find(element => element.id === id);
            }
        }        
    })
}
export default createStore
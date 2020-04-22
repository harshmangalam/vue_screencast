import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import Api from "@/services/Api"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        videos: [],
        currentUser: {},
        videoComments: [],
        snackbars: [],
    },
    mutations: {
        SET_SNACKBARS(state, snackbar) {
            state.snackbars = state.snackbars.concat(snackbar)
        },

        SET_VIDEOS(state, videos) {
            state.videos = videos
        },
        CREATE_VIDEO(state, video) {
            state.videos = state.videos.concat(video)
        },
        SET_VIDEO_COMMENTS(state, comments) {
            state.videoComments = comments
        },

        SET_CURRENTUSER(state, user) {
            state.currentUser = user;
            window.localStorage.currentUser = JSON.stringify(user);
        },

        LOGOUT_USER(state) {
            state.currentUser = {};
            window.localStorage.currentUser = JSON.stringify({});
        },

    },
    actions: {
        setSnackbar({ commit }, snackbar) {
            commit("SET_SNACKBARS", snackbar)
        },

        async fetchVideos({ commit }) {
            try {
                const res = await Api().get("/videos")
                const { videos } = res.data
                commit("SET_VIDEOS", videos)
            } catch (error) {
                console.log(error)
            }
        },
        async fetchVideoComments({ commit }, video_id) {
            try {
                const res = await Api().get(`/videos/${video_id}/comment`)
                const { comments } = res.data
                commit("SET_VIDEO_COMMENTS", comments)
            } catch (error) {
                console.log(error)
            }
        },



        async createVideos({ commit }, videoData) {
            try {
                const res = await Api().post("/videos", videoData)
                const { message, video } = res.data
                commit("CREATE_VIDEO", video)
                return {
                    text: message,
                    color: "success"
                }
            } catch (error) {
                console.log(error)
                return {
                    text: error.response.data.error,
                    color: 'error'
                }
            }

        },
        async likeVideo({ commit }, video_id) {
            try {
                const res = await Api().post(`/videos/${video_id}/like`)
                const videos = await Api().get(`/videos`)
                commit("SET_VIDEOS", videos.data.videos)
                return {
                    text: res.data.message,
                    color: "success"
                }

            } catch (error) {
                return {
                    text: error.response.data.error,
                    color: "error"
                }
            }
        },
        async deleteVideo({ commit }, video_id) {
            try {
                const res = await Api().delete(`/videos/${video_id}`)
                const videos = await Api().get(`/videos`)
                commit("SET_VIDEOS", videos.data.videos)
                return {
                    text: res.data.message,
                    color: "success"
                }

            } catch (error) {
                return {
                    text: error.response.data.error,
                    color: "error"
                }
            }
        },
        async commentVideo({ commit }, data) {
            try {
                const res = await Api().post(`/videos/${data.video_id}/comment`, data.commentData)
                const videos = await Api().get(`/videos`)
                const comments = await Api().get(`/videos/${data.video_id}/comment`)
                commit("SET_VIDEOS", videos.data.videos)
                commit("SET_VIDEO_COMMENTS", comments.data.comments)
                return {
                    text: res.data.message,
                    color: "success"
                }

            } catch (error) {
                return {
                    text: error.response.data.error,
                    color: "error"
                }
            }
        },


        async loadCurrentUser({ commit }) {
            try {
                const storage_user = JSON.parse(window.localStorage.currentUser);
                const user_data = await Api().get(`/users/${storage_user._id}`)
                const { user } = user_data.data
                commit("SET_CURRENTUSER", { ...user });
            } catch (error) {
                console.log(error);
            }
        },

        async login({ commit }, loginData) {
            try {

                const res = await axios.post("http://localhost:3001/api/users/login", loginData)
                console.log(res.data)
                const { message, user } = res.data
                const userData = {
                    ...user,

                }
                commit("SET_CURRENTUSER", userData);
                return {
                    text: message,
                    color: "success"
                }
            } catch (error) {
                return {
                    text: error.response.data.error,
                    color: 'error'
                }
            }
        },
        async logout({ commit }) {
            try {
                const res = await Api().get("/users/logout")
                const { message } = res.data
                commit("LOGOUT_USER")
                return {
                    text: message,
                    color: "success"
                }

            } catch (error) {
                console.log(error)
            }
        }

    },
    modules: {}
})
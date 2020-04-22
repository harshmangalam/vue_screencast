import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Videos from '../views/Videos/Videos.vue'
import ExploreVideos from '../views/Videos/ExploreVideos.vue'
import MyVideos from '../views/Videos/MyVideos.vue'
import FavouriteVideos from '../views/Videos/FavouriteVideos.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
    {
    path: "/videos",
    redirect:"/videos/my_videos",
    name: "Videos",
    component: Videos,
    children: [
      {
        path: "explore_videos",
        name: "ExploreVideos",
        component: ExploreVideos
      },

      {
        path: "my_videos",
        name: "MyVideos",
        component:MyVideos
      },
       {
        path: "favourite_videos",
        name: "FavouriteVideos",
        component:FavouriteVideos
      },
    
    ]
  },
  {
    path:"/dashboard",
    name:"Dashboard",
    component:Dashboard
  },
  {
    path:"/profile",
    name:"Profile",
    component:Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

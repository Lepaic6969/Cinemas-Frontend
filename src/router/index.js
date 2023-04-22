import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../modules/home/views/HomeView.vue')
    },
    {
      path: "/user/payment",
      name: "payment-steps",
      component: () => import("@/modules/payments/views/PaymentView.vue"),
      redirect: "/user/payment/step1",
      children: [
        {
          path: "step1",
          name: "step-1",
          component: () => import("@/modules/payments/components/Step1.vue"),
          // component: Step1,
        },
        {
          path: "step2",
          name: "step-2",
          component: () => import("@/modules/payments/components/Step2.vue"),
        },
        {
          path: "step3",
          name: "step-3",
          component: () => import("@/modules/payments/components/Step3.vue"),
        },
        {
          path: "step4",
          name: "step-4",
          component: () => import("@/modules/payments/components/Step4.vue"),
        },
      ],
    },

    // ruta admin
    {
      path: "/admin",
      name: "admin", 
      component: () => import("../modules/admin/main/layouts/AdminLayout.vue"),
      children: [ 
        {
          path: "",
          name: "admin-cinemas",
          component: () => import("../modules/admin/cinemas/views/CinemaView.vue"),
        },
        {
          path: "salas/:id",
          name: "admin-salas",
          component: () => import("../modules/admin/rooms/views/RoomView.vue"),
        },
        {
          path: "peliculas",
          name: "admin-peliculas",
          component: () => import("../modules/admin/movies/views/MovieView.vue"),
        },
        {
          path: "funciones",
          name: "admin-show",
          component: () => import("../modules/admin/shows/views/ShowView.vue"),
        },
            
      ],
    },

 
  ]
})

export default router

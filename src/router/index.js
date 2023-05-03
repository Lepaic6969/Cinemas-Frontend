import { createRouter, createWebHistory } from "vue-router";

import isAuthGuard from "./auth-guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../modules/home/layout/HomeLayout.vue"),
      children: [
        {
          path: "",
          name: "cards-home",
          component: () => import("@/modules/home/views/cardsView.vue"),
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
              component: () => import("@/modules/payments/components/Step4.vue"),
            },
          ],
        },
        {
          path: "/tickets",
          name: "tickets",
          component: () => import("../modules/tickets/views/TicketsView.vue"),
          beforeEnter: [isAuthGuard],
        },
        //Tura de Facturación.
        {
          path: "/user/billing",
          name: "billing",
          component: () => import("../modules/billing/views/BillingView.vue"),
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
          path: "funciones/:id",
          name: "admin-show",
          component: () => import("../modules/admin/shows/views/ShowView.vue"),
        },
        {
          path: "peliculas",
          name: "admin-peliculas",
          component: () => import("../modules/admin/movies/views/MovieView.vue"),
        },
        {
          path: "generos",
          name: "admin-generos",
          component: () => import("../modules/admin/genders/views/GenderView.vue"),
        },
      ],
    },
  ],
});

export default router;

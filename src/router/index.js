import { createRouter, createWebHistory } from "vue-router";

import cinemaRouter from "@/modules/cinema/router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../modules/home/views/HomeView.vue"),
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
    {
      path: "/cinema",
      ...cinemaRouter,
    },
  ],
});

export default router;

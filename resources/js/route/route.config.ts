import React from "react";
import {RouteItem} from "@/route/type";


/**
 * 全局路由表
 */
const routes: RouteItem[] = [
    {
        path: "/",
        element: React.lazy(() => import("../layout/landing")),
        meta: {name: "Incio"},
        children: [
            {
                index: true,
                element: React.lazy(() => import("../pages/landing/login")),
                meta: {name: "Inicio de Sesion"},
            },
            {
                path: '/register',
                element: React.lazy(() => import("../pages/landing/register")),
                meta: {name: "Registro de Sesion"},
            },
        ]
    }, {
        path: "/site",
        element: React.lazy(() => import("../layout/main")),
        meta: {name: "Incio"},
        children: [
            {
                index: true,
                element: React.lazy(() => import("../pages/sites/home")),
                meta: {name: "Inicio de Sesion"},
            },
            {
                path: 'terms',
                element: React.lazy(() => import("../pages/sites/terms")),
                meta: {name: "Términos y condiciones"},
            },
            {
                path: 'mechanics',
                element: React.lazy(() => import("../pages/sites/mechanics")),
                meta: {name: "Términos y condiciones"},
            },
            {
                path: 'brands',
                element: React.lazy(() => import("../pages/sites/brands")),
                meta: {name: "Marcas Participantes"},
            },
            {
                path: 'contacts',
                element: React.lazy(() => import("../pages/sites/contacts")),
                meta: {name: "Contactenos"},
            },
        ]
    }


]

export default routes

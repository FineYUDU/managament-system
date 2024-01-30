// * Angular
import { Routes } from '@angular/router';
// * Components
import { Page404Component } from './shared/components/page404/page404.component';

export const routes: Routes = [
    {
        path:'auth',
        loadComponent: ()=> import ('./modules/auth/auth.component'),
        children: [
            {
                path:'login',
                title:'Login',
                data:{translate:'menu-auth.login'},
                loadComponent: ()=> import('./modules/auth/pages/login/login.component'),
            },
            {
                path:'forgot-password',
                title:'Forgot Password',
                data:{translate:'menu-auth.forgot-password'},
                loadComponent: ()=> import('./modules/auth/pages/forgot-password/forgot-password.component'),
            },
            {
                path:'create-account',
                title:'Create Account',
                data:{translate:'menu-auth.create-account'},
                loadComponent: ()=> import('./modules/auth/pages/create-account/create-account.component')
            },
            {   path:'', redirectTo:'login',pathMatch:'full'},
        ]
    },
    {
        path:'dashboard',
        loadComponent: ()=> import ('./modules/dashboard/dashboard.component'),
        children:[
            {
                path:'main',
                title:'Main',
                loadComponent: ()=> import('./modules/dashboard/pages/main/main.component')
            },
            {   path:'', redirectTo:'main',pathMatch:'full'},
        ]
    },
    {
        path:'404',
        component:Page404Component
    },
    { path:'', redirectTo:'/auth', pathMatch:'full' },
    { path:'**', redirectTo:'/404', pathMatch:'full' }
];

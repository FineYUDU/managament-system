// * Angular
import { Routes } from '@angular/router';
// * Components
import { Page404Component } from './shared/components/page404/page404.component';

export const routes: Routes = [
    {
        path:'website',
        loadComponent: ()=> import('./modules/website/website.component'),
        children: [
            {
                path:'home',
                title:'Home',
                loadComponent: ()=> import('./modules/website/pages/home/home.component')
            },
            {   path:'', redirectTo:'home',pathMatch:'full'},
        ]
    },
    {
        path:'auth',
        loadComponent: ()=> import ('./modules/auth/auth.component'),
        children: [
            {
                path:'login',
                title:'Login',
                loadComponent: ()=> import('./modules/auth/pages/login/login.component')
            },
            {
                path:'forgot-password',
                title:'Forgot Password',
                loadComponent: ()=> import('./modules/auth/pages/forgot-password/forgot-password.component')
            },
            {
                path:'create-account',
                title:'Create Account',
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
                path:'profile',
                title:'Profile',
                loadComponent: ()=> import('./modules/dashboard/pages/profile/profile.component')
            },
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

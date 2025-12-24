import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Form } from './shared/form/form';

export const routes: Routes = [
    {path:'',component:Dashboard},
    /*{
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },*/
    {path:'form',component:Form},
    {
        path:'dashboard',
        loadChildren: ()=> import('./dashboard/dashboard').then(r => r.Dashboard)
    },
    {
         path:'teacher',
         loadChildren: ()=>import('./teacher/teacher.routes').then(r => r.routes)
    },
    {
         path:'student',
         loadChildren: ()=>import('./student/student.routes').then(r => r.routes)
    }

];

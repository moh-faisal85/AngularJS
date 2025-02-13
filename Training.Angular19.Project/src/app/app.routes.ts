import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/Forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/Forms/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { CustomPipeIntegrationComponent } from './components/custom-pipe-integration/custom-pipe-integration.component';
import { TabsComponent } from './reusable/tabs/tabs.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CircularProgressBarComponent } from './components/circular-progress-bar/circular-progress-bar.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'admin',
                component:AdminComponent
            },
            {
                path:'dataBinding',
                component:DataBindingComponent
            },
            {
                path:'ng-class',
                component:NgClassComponent
            },
            {
                path:'control-faisal',
                component:ControlStatementComponent
            },
            {
                path:'signal',
                component:SignalComponent
            },
            {
                path:'linked-signal',
                component:LinkedSignalComponent
            },
            {
                path:'TemplateForm',
                component:TemplateFormComponent
            },
            {
                path:'ReactiveForm',
                component:ReactiveFormComponent
            },
            {
                path:'get-api',
                component:GetApiComponent
            },
            {
                path:'post-api',
                component:PostApiComponent
            },
            {
                path:'customer',
                component:CustomerComponent
            },
            {
                path:'lifeCycle',
                component:LifeCycleComponent
            },
            {
                path:'forloop',
                component:NgForComponent
            },
            {
                path:'customPipe',
                component:CustomPipeIntegrationComponent
            },
            {
                path:'tabs',
                component:TabsComponent
            },
            {
                path:'cprogress',
                component:CircularProgressBarComponent
            },
            {
                path:'resourceApi',
                component: ResourceApiComponent
            }
        
        ]
    }
        
];

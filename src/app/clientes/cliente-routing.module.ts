import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientePageComponent } from './pages/listar-cliente-page/listar-cliente-page.component';
import { NuevoClientePageComponent } from './pages/nuevo-cliente-page/nuevo-cliente-page.component';
import { EditarClientePageComponent } from './pages/editar-cliente-page/editar-cliente-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
    {path:'home', component: HomePageComponent},
    {path:'listarCliente', component: ListarClientePageComponent},
    {path:'nuevoCliente', component: NuevoClientePageComponent},
    {path:'editarCliente', component: EditarClientePageComponent},
    {path: '**', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }

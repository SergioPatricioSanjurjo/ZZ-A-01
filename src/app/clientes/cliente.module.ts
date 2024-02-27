import { NgModule } from '@angular/core';
import { ListarClientePageComponent } from './pages/listar-cliente-page/listar-cliente-page.component';
import { NuevoClientePageComponent } from './pages/nuevo-cliente-page/nuevo-cliente-page.component';
import { EditarClientePageComponent } from './pages/editar-cliente-page/editar-cliente-page.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        ClienteRoutingModule
    ],
    declarations: [
        ListarClientePageComponent,
        NuevoClientePageComponent,
        EditarClientePageComponent,
        NuevoClienteComponent,
        ListarClienteComponent,
        EditarClienteComponent,
        HomePageComponent
        
    ],
    providers: [],
})
export class ClienteModule { }

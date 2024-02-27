import { Component, EventEmitter, OnInit } from '@angular/core';
import { ICliente } from '../../interfaces/interface';
import { ClienteService } from '../../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit{

  lista: ICliente[] = []

  listaEmit: FormGroup = this.formBuilder.group(
  {
    nombre:['', [Validators.required]],
    edad:[0, [Validators.required]],
    id:0
  }
)


constructor(private clienteService:ClienteService,
            private formBuilder: FormBuilder
            ){}


ngOnInit(): void {
  this.initList()
  this.emitClientes()
  this.clienteService.clienteAgregado.subscribe( cli => {
    this.lista.push(cli)
  } )
}

initList(){
  this.listaEmit = this.formBuilder.group(
    {
      nombre:'',
      edad:0,
    }
  )
}
emitClientes() {
  this.clienteService.getClientes().subscribe({
    next: (cli) => {
      this.lista = cli
    },error: (err) => {
      console.log(err);
    } 
  })
}

addCliente() {
  const cli: ICliente = {
    nombre: this.listaEmit.controls['nombre'].value,
    edad: this.listaEmit.controls['edad'].value,
    id: 0
  }
  this.clienteService.clienteAgregado.emit(cli)
  this.clienteService.postCliente(cli).subscribe(
    {
      next: () => {
        console.log(cli);
      },
      error: (err) => {
        console.log(err);
      }
    }
  )
}

}

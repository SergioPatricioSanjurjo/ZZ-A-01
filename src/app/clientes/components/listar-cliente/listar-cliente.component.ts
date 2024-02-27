import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ICliente } from '../../interfaces/interface';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit{

  constructor(private clienteService:ClienteService) { }

  listaClientes: ICliente[] = [];

  ngOnInit(): void {
    this.listarClientes()
  }


  listarClientes() {
    this.clienteService.getClientes().subscribe({
      next: (cli) => {
        this.listaClientes = cli
      },error: (err) => {
        console.log(err);
      } 
    })
  }


  eliminarCliente(id: number) {
    const ok = confirm(`Desea eliminar el cliente con id ${id}?`)
    if(!ok) return;
    this.clienteService.deleteCliente(id).subscribe(
      {
        next: () => {
          alert(`El cliente fue ELIMINADO`)
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }




}

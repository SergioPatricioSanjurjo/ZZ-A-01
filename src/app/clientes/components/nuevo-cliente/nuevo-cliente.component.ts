import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { ICliente } from '../../interfaces/interface';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit{

  forms!: FormGroup

  constructor(private formBuilder: FormBuilder,
              private clienteService: ClienteService,
              private router: Router  
            ) {}

  ngOnInit(): void {
    this.initForm()
  }

  formulario:FormGroup = this.formBuilder.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    edad:['0',[Validators.required]],
    id: 0
  })

  initForm(){
    this.forms = this.formBuilder.group(
      {
        nombre:'',
        edad:0
      }
    )
  }

  agregarCliente() {
    if(this.formulario.invalid) return;

    const cliente: ICliente = {
          nombre: this.formulario.controls['nombre'].value,
          edad: this.formulario.controls['edad'].value,
          id: this.formulario.controls['id'].value
    }
    this.clienteService.postCliente(cliente).subscribe(
      {
        next: () => {
          this.router.navigate(['home'])
        },
        error: (err) => {
          console.log(err);
        }
      }
    )

  }













}

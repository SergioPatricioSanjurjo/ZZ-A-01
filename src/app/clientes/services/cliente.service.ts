import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string = 'http://localhost:4000'


  constructor(private http: HttpClient) { }

  getClientes(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(`${this.url}/clientes`)
  }

  getCliente(id: number): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.url}/clientes/${id}`)
  }

  deleteCliente(id: number): Observable<ICliente> {
    return this.http.delete<ICliente>(`${this.url}/clientes/${id}`)
  }

  postCliente(cliente: ICliente): Observable<ICliente> {
    return this.http.post<ICliente>(`${this.url}/clientes`,
                                      cliente, 
                                      {'headers': {'Content-Type':'application/json'}})
  }

  putCliente(cliente: ICliente): Observable<ICliente> {
    return this.http.put<ICliente>(`${this.url}/clientes/${cliente.id}`,
                                    cliente,
                                    {'headers': {'Content-Type': 'application/json'}})
  }

  clienteAgregado = new EventEmitter<ICliente>()
  

}

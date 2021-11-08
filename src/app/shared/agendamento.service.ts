import { Injectable } from '@angular/core';
import { Agendamento } from './agendamento.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:44360/api/Agendamentoes'
  formData: Agendamento = new Agendamento();
  list: Agendamento[];

  postAgendamento() {
    return this.http.post(this.baseURL, this.formData);
  }

  putAgendamento() {
    return this.http.put(`${this.baseURL}/${this.formData.agendamentoId}`, this.formData);
  }

  deleteAgendamento(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Agendamento[]);
  }


}


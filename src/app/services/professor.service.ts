import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Professor} from "../models/Professor";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private endpointUrl = this._url + "/professors"

  constructor(private readonly _httpClient: HttpClient,
              @Inject('urlBackEnd') private readonly _url: string) { }

  getAllProfessors() {
      return this._httpClient.get<Professor[]>(`${this.endpointUrl}/all`);
  }

  createProfessor(professor: Professor) {
      return this._httpClient.post(`${this.endpointUrl}/create`, professor);
  }

  getProfessorByMatricule(numeroMatricule: string) {
      return this._httpClient.get<Professor>(`${this.endpointUrl}/${numeroMatricule}`);
  }

  updateProfessor(numeroMatricule: string, professor: Professor) {
    return this._httpClient.put(`${this.endpointUrl}/${numeroMatricule}`, professor);
  }

  deleteProfessor(numeroMatricule: string) {
      return this._httpClient.delete(`${this.endpointUrl}/${numeroMatricule}`);
  }
}

import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Section} from "../models/Section";
import {Student} from "../models/Student";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private endpointUrl = this._url + "/section"

  constructor(private readonly _httpClient: HttpClient,
              @Inject('urlBackEnd') private readonly _url: string) { }

  getAllSections() {
      return this._httpClient.get<Section[]>(`${this.endpointUrl}/all`);
  }

  // createSection(section: Section) {
  //     return this._httpClient.post(`${this.endpointUrl}/create`, section);
  // }

  getSectionById(id: string) {
      return this._httpClient.get<Section>(`${this.endpointUrl}/${id}`);
  }

  updateSection(id: string, section: Section) {
      return this._httpClient.put(`${this.endpointUrl}/${id}`, section);
  }

  deleteSection(id: string){
      return this._httpClient.delete(`${this.endpointUrl}/${id}`);
  }

  getAllStudentsBySection(sectionId: string){
    return this._httpClient.get<Student[]>(`${this.endpointUrl}/${sectionId}/students`);
  }
}

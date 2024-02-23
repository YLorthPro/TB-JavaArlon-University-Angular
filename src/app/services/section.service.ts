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
      return this._httpClient.get<Section[]>(`${this._url}/all`);
  }

  createSection(section: Section) {
      return this._httpClient.post(`${this._url}/create`, section);
  }

  getSectionById(id: string) {
      return this._httpClient.get<Section>(`${this._url}/${id}`);
  }

  updateSection(id: string, section: Section) {
      return this._httpClient.put(`${this._url}/${id}`, section);
  }

  deleteSection(id: string){
      return this._httpClient.delete(`${this._url}/${id}`);
  }

  getAllStudentsBySection(sectionId: string){
    return this._httpClient.get<Student[]>(`${this._url}/${sectionId}/students`);
  }
}

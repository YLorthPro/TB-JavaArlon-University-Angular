import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../models/Course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private endpointUrl = this._url + "/course"

  constructor(private readonly _httpClient: HttpClient,
              @Inject('urlBackEnd') private readonly _url: string) { }

  getAll(){
    return this._httpClient.get<Course[]>(`${this.endpointUrl}/all`);
  }

  createCourse(course: Course){
    return this._httpClient.post(`${this.endpointUrl}/create`, course);
  }

  getCourseByMnemonique(mnemonique: string){
    return this._httpClient.get<Course>(`${this.endpointUrl}/${mnemonique}`);
  }

  updateCourse(mnemonique: string, course: Course){
    return this._httpClient.put(`${this.endpointUrl}/${mnemonique}`, course);
  }

  deleteCourse(mnemonique: string){
      return this._httpClient.delete(`${this.endpointUrl}/${mnemonique}`);
  }

  getCoursesByStudent(studentId: string){
    return this._httpClient.get<Course[]>(`${this.endpointUrl}/student/${studentId}`);
  }

}

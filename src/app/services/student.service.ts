import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private endpointUrl = this._url + "/student"

  constructor(private readonly _httpClient: HttpClient,
              @Inject('urlBackEnd') private readonly _url: string) { }

  getAllStudents(){
      return this._httpClient.get<Student[]>(`${this._url}/all`);
  }

  createStudent(student: Student): Observable<Student> {
      return this._httpClient.post<Student>(`${this._url}/create`, student);
  }

  getStudentById(id: number): Observable<Student> {
      return this._httpClient.get<Student>(`${this._url}/${id}`);
  }

  updateStudent(student: Student): Observable<Student> {
      return this._httpClient.put<Student>(`${this._url}/update`, student);
  }

  deleteStudent(id: number): Observable<void> {
      return this._httpClient.delete<void>(`${this._url}/delete/${id}`);
  }
}

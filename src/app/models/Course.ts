import {Professor} from "./Professor";
import {Validators} from "@angular/forms";

export interface Course {
  mnemonique: string;
  intitule: string;
  resume: string;
  professeurTitulaire: Professor
}

export const COURSE_FORM ={
  mnemonique:['',[Validators.required,Validators.minLength(4)]],
  intitule:['',[Validators.required,Validators.minLength(4)]],
  resume:['',[Validators.required,Validators.minLength(4)]],
  sectionId:['',[Validators.required,Validators.minLength(4)]],
  professeurTitulaireId:['',Validators.required]
}

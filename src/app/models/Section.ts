import {Professor} from "./Professor";
import {Course} from "./Course";
import {Validators} from "@angular/forms";

export interface Section {
  code: string;
  nom: string;
  professeurDirigeant: Professor;
  cours: Course[]
}

export const SECTION_FORM = {
  code: ['',[Validators.required,Validators.minLength(4)]],
  nom: ['',[Validators.required,Validators.minLength(4)]],
  professeurDirigeantId: ['',[Validators.required,Validators.minLength(4)]],
  coursId: ['',[Validators.required]],
}

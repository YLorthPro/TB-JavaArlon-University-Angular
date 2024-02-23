import {Course} from "./Course";
import {Address} from "./Address";
import {Section} from "./Section";
import {Validators} from "@angular/forms";

export interface Student {
  id: number;
  numeroMatricule: string;
  nom: string;
  prenom: string;
  addresses: Address[];
  coursSuivis: Course[];
  filiereChoisie: Section;
}

export const STUDENT_FORM={
  numeroMatricule: ['',[Validators.required,Validators.minLength(4)]],
  nom: ['',[Validators.required,Validators.minLength(2)]],
  prenom: ['',[Validators.required,Validators.minLength(3)]],
  login:['',[Validators.required,Validators.minLength(4)]],
  password:['',[Validators.required,Validators.minLength(4)]],
  numero:['',[Validators.required]],
  rue: ['',[Validators.required,Validators.minLength(4)]],
  codePostal:['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
  ville:['',[Validators.required,Validators.minLength(4)]],
  coursSuivisId:['',[Validators.required]],
  filiereChoisieId:['',[Validators.required,Validators.minLength(4)]]
}

import {Validators} from "@angular/forms";

export interface Professor {
  id: number;
  numeroMatricule: string;
  titre: string;
  nom: string;
  prenom: string;
}

export const PROFESSOR_FORM={
  numeroMatricule: ['',[Validators.required,Validators.minLength(4)]],
  titre: ['',[Validators.required,Validators.minLength(4)]],
  nom: ['',[Validators.required,Validators.minLength(2)]],
  prenom: ['',[Validators.required,Validators.minLength(3)]],
  login:['',[Validators.required,Validators.minLength(4)]],
  password:['',[Validators.required,Validators.minLength(4)]],
  numero:['',[Validators.required]],
  rue: ['',[Validators.required,Validators.minLength(4)]],
  codePostal:['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
  ville:['',[Validators.required,Validators.minLength(4)]],
  coursEnseignesId:['',[Validators.required]],
  isAdmin:['']
}

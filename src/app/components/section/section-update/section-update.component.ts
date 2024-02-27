import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import {SectionService} from "../../../services/section.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SECTION_FORM} from "../../../models/Section";
import {ProfessorService} from "../../../services/professor.service";
import {Professor} from "../../../models/Professor";
import {Observable} from "rxjs";
import {Course} from "../../../models/Course";
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-section-update',
  templateUrl: './section-update.component.html',
  styleUrl: './section-update.component.css'
})
export class SectionUpdateComponent {
  sectionForm!: FormGroup;
  professors!: Observable<Professor[]>;
  courses!: Observable<Course[]>;
  coursId!: string;

  constructor(
    private readonly _sectionService: SectionService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _professorService: ProfessorService,
    private readonly _courseService: CourseService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.sectionForm = this.formBuilder.group(SECTION_FORM);

    this._sectionService.getSectionById(this._activatedRoute.snapshot.params['id']).subscribe(section => {
      this.sectionForm.patchValue({
        code: section.code,
        nom: section.nom,
        professeurDirigeantMatricule: section.professeurDirigeant.numeroMatricule,
        coursId: section.cours.map(c => c.mnemonique)
      });

      this.professors = this._professorService.getAllProfessors();
      this.courses = this._courseService.getAll();
    });
  }

  onSubmit() {
    if(this.sectionForm.valid){
      this._sectionService.updateSection(this._activatedRoute.snapshot.params['id'], this.sectionForm.value).subscribe(() => {
        this._router.navigate(['/section/all']);
      });
    }
  }
}

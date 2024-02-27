import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SectionService} from "../../../services/section.service";
import {Router} from "@angular/router";
import {Section} from "../../../models/Section";

@Component({
  selector: 'app-section-all',
  templateUrl: './section-all.component.html',
  styleUrl: './section-all.component.css'
})
export class SectionAllComponent implements OnInit{
  sections!: Observable<Section[]>;

  constructor(private readonly _sectionService: SectionService,
              private readonly _router: Router) {
  }

  ngOnInit() {
    this.sections = this._sectionService.getAllSections();
  }

  getOne(code: string){
    this._router.navigate(['section/'+code])
  }

  delete(code: string){
    if(confirm("Voulez-vous vraiment supprimer cette section?"))
      this._sectionService.deleteSection(code).subscribe();
  }
}

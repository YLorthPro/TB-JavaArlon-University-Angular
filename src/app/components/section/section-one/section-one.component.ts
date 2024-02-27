import {Component, OnInit} from '@angular/core';
import {Section} from "../../../models/Section";
import {Observable} from "rxjs";
import {SectionService} from "../../../services/section.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css'
})
export class SectionOneComponent implements OnInit{
  section!: Observable<Section>;

  constructor(private readonly _sectionService: SectionService,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly _router: Router) {
  }

  ngOnInit(){
    this.section = this._sectionService.getSectionById(this._activatedRoute.snapshot.params['id'])
  }

  update(){
    this._router.navigate(['section/update/'+ this._activatedRoute.snapshot.params['id']])
  }
}

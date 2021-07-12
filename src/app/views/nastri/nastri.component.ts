import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NastriService } from '../../api/nastri.service';

@Component({
  selector: 'app-nastri',
  templateUrl: './nastri.component.html',
  styleUrls: ['./nastri.component.css']
})
export class NastriComponent implements OnInit {

  constructor(public routeActive: ActivatedRoute,  public fb: FormBuilder, public nastroService: NastriService) { }
  public formGroup: FormGroup;
  public nastro:any;
  ngOnInit(): void {
    let value = {
      nastroId :  this.routeActive.snapshot.params["id"]
    };
    this.nastroService.getById(value.nastroId).subscribe((resp)=>{
      this.nastro = resp.response;
      this.buildForm();
    });
  }

  buildForm() {
    this.formGroup = this.fb.group({
      nastroId: [this.nastro.nastroId],
      descrizione: [this.nastro.descrizione]
    });
  }

}

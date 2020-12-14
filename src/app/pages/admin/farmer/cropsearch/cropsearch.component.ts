import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TreoAnimations } from '@treo/animations';


@Component({
  selector: 'app-cropsearch',
  templateUrl: './cropsearch.component.html',
  styleUrls: ['./cropsearch.component.scss'],
  animations : TreoAnimations

})
export class CropsearchComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: [];
  selectedFarm:any;
  farm: String[]= ['Farm 1','Farm 2'];
  dtTrigger: any;
  selectedDate: any;
  isShown: boolean = false ; 
  startDate = new Date(1990, 0, 1);
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  closeResult = '';
  public Editor = ClassicEditor;
  constructor(private modalService: NgbModal, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',windowClass : "myCustomModalClass", size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  statusModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'sm'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  toggleShow() {

    this.isShown = ! this.isShown;
    
    }

}

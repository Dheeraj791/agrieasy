import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-farmregistration',
  templateUrl: './farmregistration.component.html',
  styleUrls: ['./farmregistration.component.scss']
})
export class FarmregistrationComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: [];
  dtTrigger: any;
  area:any;
  unit:String[]=["Hectare","Acre","Square Feet","Bigha"];
  selectedValue: string;
  soiltype: String[] = ["Alluvial soils","Black soils"," Red soils","Mountain soils"];
  farmingtype: String[] = ["Organic","Inorganic"];

  closeResult = '';
  public Editor = ClassicEditor;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
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

}

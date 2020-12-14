import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-registeredusers',
  templateUrl: './registeredusers.component.html',
  styleUrls: ['./registeredusers.component.scss']
})
export class RegisteredusersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: [];
  dtTrigger: any;
  nginp:any;
  username:any;
  message:"false";
  fullname:any;
  fathername:any;
  gender:String[]=[ "Male" , "Female"  ];
  email:any;
  mobile:any;
  password:any;
  confirmpassword:any;
  country:String[] = [ "India" , "Australia" , "United States" ];
  selectedState;
  selectedCity;
  cities:any;
  dropdownList = [
    {value: 'madhyapradesh', viewValue: 'Madhya Pradesh', cities: ['Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Indore‎']},
    {value: 'andra_pradesh', viewValue: 'Andra Pradesh', cities:['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Tirupati']},
    {value: 'karnataka', viewValue: 'Karnataka', cities: ['Mysore', 'Davangere', 'Mangalore', 'Hubli-Dharwad', 'Belgaum']},
    {value: 'tamilnadu', viewValue: 'Tamilnadu', cities: ['Tiruchirappalli', 'Madurai', 'Erode', 'Vellore', 'Coimbatore']}
  ];
  tehsil:any;
  village:any;
  pincode:any;
  address:any;
  upload:any;
  selectedValue: string;
  colors: String[] = [    "AliceBlue","Aqua","Black","BlanchedAlmond","Blue","BlueViolet",   
    "Brown","BurlyWood","DarkGreen","DarkKhaki","DarkRed","DarkSalmon","DeepSkyBlue"
  ];
  usertype: String[] = ["Farmer","Admin","Employee","FPO"];
  language: String[] = ["English","Hindi"];
  closeResult = '';
  public Editor = ClassicEditor;
  constructor(private modalService: NgbModal) { }
  
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
  onSelect(evt){
    var selectedList = this.dropdownList.find(list => list.value == this.selectedState);
    this.cities = selectedList.cities;
}
setMessage(e){
  if(e.checked)
    this.message = 'Approved'
  else
    this.message = 'Unapproved'
}
  
  }

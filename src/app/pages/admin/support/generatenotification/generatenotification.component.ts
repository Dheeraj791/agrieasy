import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MasterRecordService } from '../../masterrecords/master-record.service';
import { NgForm } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-generatenotification',
  templateUrl: './generatenotification.component.html',
  styleUrls: ['./generatenotification.component.scss'],
})
export class GeneratenotificationComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  persons: [];
  closeResult = '';
  notificationRecords: any = [
    {
      heading: 'abc',
      description: 'xyz',
    },
  ];
  single_notification: any;
  activityName: any;
  selectedActivityType: any = 'General Activity';
  description: any = '';
  imgaeurl: any = '';
  audiourl: any = '';
  videourl: any = '';
  descdata: any = '';
  addDescription: any;
  userData = JSON.parse(localStorage.getItem('user_data'));
  notificationType: any = [
    {
      name: 'Scheduled',
      id: 1,
    },
    {
      name: 'One Time',
      id: 2,
    },
  ];
  notificationTo: any = [
    {
      name: 'FPOs',
      id: 1,
    },
    {
      name: 'Users',
      id: 2,
    },
    {
      name: 'All',
      id: 3,
    },
  ];
  notificationSentOn: any = ['Daily', 'Weekly', 'Monthly'];
  selectedDate: any;
  selectedNotificationSentOn: any;
  selectedNotificationType: any;
  selectedNotificationTo: any;
  imageShow: boolean = false;
  vdoUrlShow: boolean = false;
  audioUrl: boolean = false;
  descShow: boolean = false;
  rowShow: boolean = false;
  vdourl: any;
  row: any;
  detailsRow = [];
  detailsRowUpdate = [
    {
      detail_name: '',
      detail_id: 1,
      control: 'add',
    },
  ];
  detailsRowLenup = 0;
  detailsRowLen = 0;
  statusType = 0;
  statusId = 0;

  upimageShow: boolean = false;
  upvdoUrlShow: boolean = false;
  upaudioUrl: boolean = false;
  updescShow: boolean = false;
  uprowShow: boolean = false;
  selectedFile: File;
  selectedFlag = 'No files selected';
  selectedAudioFile: File;
  selectedAudioFlag = 'No File selected';
  url = '';
  imageUpStatus = '0';
  audioUpStaus = '0';

  imageUpStatusMain = '0';
  audioUpStausMain = '0';
  heading: any;
  selectedUser: any;

  selectDropDown = [{ id: 1, name: 'All', parent_id: 0 }];
  notificationToMapping: any = [
    {
      name: 'List of FPO\'s',
      id: 2,
      parent_id: 1,
    },
    {
      name: 'Users',
      id: 3,
      parent_id: 2,
    },
  ];
  singleNotificationSetting: any;

  constructor(
    private modalService: NgbModal,
    private backendService: MasterRecordService,
    public spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.fetchData();
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
  fetchData() {
    const data = {
      record_type: 'irrigation',
      admin_id: '1',
    };
    this.backendService.fetchNotifications(data).subscribe((res) => {
      if (res.status === true) {
        this.notificationRecords = res.result;
        this.url = res.url;
        this.rerender();
        this.spinner.hide();
      } else {
        this.spinner.hide();
      }
    });
  }

  open(content) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'myCustomModalClass',
        size: 'lg',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  editModal(content, data) {
    this.single_notification = data;

    if (this.single_notification.notification_image != '') {
      this.upimageShow = true;
    } else {
      this.upimageShow = false;
    }
    if (this.single_notification.notification_audio != '') {
      this.upvdoUrlShow = true;
    } else {
      this.upvdoUrlShow = false;
    }
    if (this.single_notification.notification_video != '') {
      this.upaudioUrl = true;
    } else {
      this.upaudioUrl = false;
    }
    if (this.single_notification.notification_desc != '') {
      this.updescShow = true;
    } else {
      this.updescShow = false;
    }
    // if (this.single_notification.mr_com_pointers != '') {
    //   this.uprowShow = true;
    //   var temp = this.single_notification.mr_com_pointers.split(',');
    //   console.log(temp);
    //   this.detailsRowUpdate = [];
    //   for (let index = 0; index < temp.length; index++) {
    //     var pd = {
    //       'detail_name': temp[index],
    //       'detail_id': index,
    //       'control': 'add'
    //     };
    //     this.detailsRowUpdate.push(pd)
    //     this.detailsRowLenup = this.detailsRowUpdate.length;
    //   }
    // } else {
    //   this.uprowShow = true;
    // }

    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'myCustomModalClass',
        size: 'lg',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  settingModal(content, list) {
    this.singleNotificationSetting = list;
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'myCustomModalClass',
        size: 'lg',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  statusModal(content, status, id) {
    this.statusType = status;
    this.statusId = id;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          console.log(reason);
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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

  onUpdateActivity(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // var temp = [];
    // for (let index = 0; index < this.detailsRowUpdate.length; index++) {
    //   temp.push(this.detailsRowUpdate[index]['detail_name']);
    // }
    // var pointers = temp.toString();
    const data = new FormData();
    console.log(this.single_notification);
    if (this.imageUpStatus === '1') {
      data.append('notification_image', this.selectedFile, this.selectedFile.name);
    } else {
      data.append('notification_image', this.single_notification.notification_image);
    }
    if (this.audioUpStaus === '1') {
      data.append('notification_audio', this.selectedAudioFile);
    } else {
      data.append('notification_audio', this.single_notification.notification_audio);
    }
    data.append('notification_id', this.single_notification.id);
    data.append('notification_image_status', this.imageUpStatus);
    data.append('notification_audio_status', this.audioUpStaus);
    // data.append('com_record_type', this.single_notification.com_record_type);
    data.append('notification_video', this.single_notification.notification_video);
    // data.append('mr_com_pointers', pointers);
    data.append('notification_desc', this.single_notification.notification_desc);
    data.append('notification_heading', this.single_notification.notification_heading);
    data.append('notification_status', this.single_notification.notification_status);
    data.append('notification_added_by', this.userData[0].user_id);
    this.spinner.show();
    this.backendService.updateNotification(data).subscribe((res) => {
      console.log(res);
      if (res.status === true) {
        this.modalService.dismissAll();
        this.upimageShow = false;
        this.upvdoUrlShow = false;
        this.updescShow = false;
        this.uprowShow = false;
        this.detailsRowUpdate = [];
        this.detailsRowLenup = this.detailsRow.length;
        this.upaudioUrl = false;
        this.imageUpStatus = '0';
        this.audioUpStaus = '0';
        this.selectedAudioFlag = 'No File Selected';
        this.toastr.success(res.message);
        this.fetchData();
      } else {
        this.toastr.error(res.message);
      }
    });
  }

  onUpdateSettings(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      return;
    }
    const data = new FormData();
    data.append('notification_id', this.singleNotificationSetting.id);
    data.append('notification_type', this.selectedNotificationType);
    data.append('notification_to', this.selectedNotificationTo);
    data.append('notification_selected_user', this.selectedUser);
    data.append('notification_sent_on', this.selectedNotificationSentOn);
    data.append('notification_start_date', moment(this.selectedDate).format('YYYY-MM-DD'));
    // data.append('mr_com_name', this.single_notification.mr_com_name);
    // data.append('com_record_type', this.single_notification.com_record_type);
    // data.append('mr_com_video', this.single_notification.mr_com_video);
    // data.append('mr_com_pointers', pointers);
    // data.append('mr_com_desc', this.single_notification.mr_com_desc);
    // data.append('mr_com_heading', this.single_notification.mr_com_desc);
    // data.append('mr_com_status', this.single_notification.mr_com_status);
    // data.append('mr_com_added_by', this.userData[0].user_id);
    this.spinner.show();
    this.backendService.updateNotificationSetting(data).subscribe((res) => {
      console.log(res);
      if (res.status === true) {
        this.modalService.dismissAll();
        this.upimageShow = false;
        this.upvdoUrlShow = false;
        this.updescShow = false;
        this.uprowShow = false;
        this.detailsRowUpdate = [];
        this.detailsRowLenup = this.detailsRow.length;
        this.upaudioUrl = false;
        this.imageUpStatus = '0';
        this.audioUpStaus = '0';
        this.selectedAudioFlag = 'No File Selected';
        this.toastr.success(res.message);
        // this.fetchData();
      } else {
        this.toastr.error(res.message);
      }
    });
  }

  onAddRecord(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // var temp = [];
    // for (let index = 0; index < this.detailsRow.length; index++) {
    //   temp.push(this.detailsRow[index]['detail_name']);
    // }
    // var pointers = temp.toString();
    // console.log("this.activityName" + this.activityName)
    // console.log("this.selectedActivityTypeId" + this.selectedActivityTypeId)
    // console.log("this.imgaeurl" + this.imgaeurl)
    // console.log("this.videourl" + this.videourl)
    // console.log("this.pointers" + pointers)
    // console.log("this.description" + this.description)
    // return false;
    const data = new FormData();
    if (this.imageUpStatusMain === '1') {
      data.append('notification_image', this.selectedFile, this.selectedFile.name);
    }
    if (this.audioUpStausMain === '1') {
      data.append('notification_audio', this.selectedAudioFile);
    }
    data.append('notification_image_status', this.imageUpStatusMain);
    data.append('notification_audio_status', this.audioUpStausMain);
    // data.append('mr_com_type', 'irrigation');
    // data.append('mr_com_name', this.activityName);
    // data.append('com_record_type', this.selectedActivityTypeId);
    data.append('notification_video', this.videourl);
    // data.append('mr_com_pointers', pointers);
    data.append('notification_desc', this.description);
    data.append('notification_heading', this.heading);
    data.append('notification_status', '1');
    data.append('notification_added_by', this.userData[0].user_id);
    this.spinner.show();
    console.log(data);
    this.backendService.addNotification(data).subscribe((res) => {
      if (res.status === true) {
        this.modalService.dismissAll();
        this.imageShow = false;
        this.vdoUrlShow = false;
        this.descShow = false;
        this.rowShow = false;
        this.detailsRow = [];
        this.detailsRowLen = this.detailsRow.length;
        this.audioUrl = false;
        this.imageUpStatusMain = '0';
        this.audioUpStausMain = '0';
        this.selectedFlag = 'No File Selected';
        this.toastr.success(res.message);
        this.fetchData();
      } else {
        this.toastr.error(res.message);
      }
    });
  }

  onChangeStatus() {
    const data = this.single_notification;
    var params = {
      mr_com_status: this.statusType,
      mr_com_id: this.statusId,
    };
    this.modalService.dismissAll();
    this.spinner.show();
    this.backendService.updateCommonStatus(params).subscribe((res) => {
      if (res.status === true) {
        this.toastr.success(res.message);
        this.fetchData();
      } else {
        this.toastr.success(res.message);
        this.fetchData();
      }
    });
  }
  onFileChanged(event) {
    const file = event.target.files[0];
    this.selectedFile = file;
    this.selectedFlag = '1 File selected';
    console.log(file);
    this.imageUpStatusMain = '1';
  }
  onAudioFileChanged(event) {
    const file = event.target.files[0];
    this.selectedAudioFile = file;
    this.selectedAudioFlag = '1 File selected';
    console.log(file);
    this.audioUpStausMain = '1';
  }
  onFileChangedUp(event) {
    const file = event.target.files[0];
    this.selectedFile = file;
    this.selectedFlag = '1 File selected';
    console.log(file);
    this.imageUpStatus = '1';
  }
  onAudioFileChangedUp(event) {
    const file = event.target.files[0];
    this.selectedAudioFile = file;
    this.selectedAudioFlag = '1 File selected';
    console.log(file);
    this.audioUpStaus = '1';
  }

  addImage() {
    this.imageShow = true;
  }

  addVdoUrl() {
    this.vdoUrlShow = true;
  }
  addAudioUrl() {
    this.audioUrl = true;
  }

  addDescBox() {
    this.descShow = true;
  }

  addRows() {
    this.rowShow = true;
    this.detailsRow.push({
      detail_name: '',
      detail_id: 1,
      control: 'add',
    });
    this.detailsRowLen = this.detailsRow.length;
  }

  add(index) {
    var data = {
      detail_name: '',
      detail_id: index + 1 + 1,
      control: 'add',
    };
    this.detailsRow.push(data);
    this.detailsRowLen = this.detailsRow.length;
  }
  remove(data) {
    if (data === 'image') {
      this.imageShow = false;
    } else if (data === 'video') {
      this.vdoUrlShow = false;
    } else if (data === 'desc') {
      this.descShow = false;
    } else if (data === 'details') {
      this.rowShow = false;
      this.detailsRow = [];
      this.detailsRowLen = this.detailsRow.length;
    } else if (data === 'audio') {
      this.audioUrl = false;
    }
  }

  upaddImage() {
    this.upimageShow = true;
  }

  upaddVdoUrl() {
    this.upvdoUrlShow = true;
  }
  upaddAudioUrl() {
    this.upaudioUrl = true;
  }

  upaddDescBox() {
    this.updescShow = true;
  }

  upaddRows() {
    this.uprowShow = true;
    this.detailsRowUpdate.push({
      detail_name: '',
      detail_id: 1,
      control: 'add',
    });
    this.detailsRowLenup = this.detailsRowUpdate.length;
  }

  upadd(index) {
    var data = {
      detail_name: '',
      detail_id: index + 1 + 1,
      control: 'add',
    };
    this.detailsRowUpdate.push(data);
    this.detailsRowLenup = this.detailsRowUpdate.length;
  }
  upremove(data) {
    if (data === 'image') {
      this.upimageShow = false;
    } else if (data === 'video') {
      this.upvdoUrlShow = false;
    } else if (data === 'desc') {
      this.updescShow = false;
    } else if (data === 'details') {
      this.uprowShow = false;
      this.detailsRowUpdate = [];
      this.detailsRowLenup = this.detailsRowUpdate.length;
    } else if (data === 'audio') {
      this.upaudioUrl = false;
    }
  }
  deleteRow(data, index) {
    var removeIndex = this.detailsRow
      .map(function (item) {
        return item.detail_id;
      })
      .indexOf(index);
    this.detailsRow.splice(removeIndex, 1);
    this.detailsRowLen = this.detailsRow.length;
  }
  updeleteRow(data, index) {
    var removeIndex = this.detailsRowUpdate
      .map(function (item) {
        return item.detail_id;
      })
      .indexOf(index);
    this.detailsRowUpdate.splice(removeIndex, 1);
    this.detailsRowLenup = this.detailsRowUpdate.length;
  }

  onNotificationToChange(event) {
    const id = parseInt(event.value);
    this.selectedUser = '';
    this.selectDropDown = [{ id: 1, name: 'All', parent_id: 0 }];
    for (const notification of this.notificationToMapping) {
     if (notification.parent_id === id) {
       this.selectDropDown.push(notification);
     }
    }
  }

  onSelectUserChange(value) {
    this.selectedUser = value;
  }
}

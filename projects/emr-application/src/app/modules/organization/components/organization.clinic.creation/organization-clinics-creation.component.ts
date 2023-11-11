import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../administration/model/user/user';
import { SingleAddressComponent } from '../../../common/components/single.address/single-address.component';
import { EncryptService } from '../../../common/service/encyrption/encrypt.service';
import { Clinic } from '../../../patient/models/clinic';
import { AdministratorDoctor } from '../../models/administrator.doctor';
import { DoctorUserService } from '../../services/doctor.user.autocomplete/doctor-user.service';
export interface Doctor {
  name?: string,
  npi?: string;
}
@Component({
  selector: 'app-organization-clinics-creation',
  templateUrl: './organization-clinics-creation.component.html',
  styleUrls: ['./organization-clinics-creation.component.css']
})
export class OrganizationClinicsCreationComponent implements OnInit {
  @ViewChild('doctorForm') doctorForm: NgForm;
  @ViewChild('clinicAddress') clinicAddress: SingleAddressComponent;
  public users: User[];
  validAddress: boolean = true;
  submitted: boolean = false;
  createDoctorVisible: boolean = false
  showDoctorsVisible: boolean = false;
  isValidDoctor: boolean = false;
  isAssignDoctorFromDB: number = -1;;
  isDoctorSelected: boolean = false;
  errorMessage: string | null;
  createdClinic: Clinic = {
    name: '',
    address: {
      addressType: null,
      country: null
    }
  };
  administratorDoctor: AdministratorDoctor = {
    userName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
  }
  @ViewChild('clinicForm') clinicForm: NgForm;

  clinics: Clinic[] = new Array();
  constructor(private encryptService: EncryptService
    , private doctorUserService: DoctorUserService) { }

  ngOnInit(): void {
    this.doctorUserService.find().subscribe((response) => {
      this.users = response.body;
    })
  }
  add() {
    if (this.clinicForm.valid && this.isValidDoctor) {
      this.createdClinic.administratorDoctor = this.administratorDoctor;
      this.createdClinic.address = this.clinicAddress.getAddress();
      this.clinics.push(this.createdClinic);
      this.clearAll();
    } else {
      this.submitted = true;
    }
  }
  openDoctorModal() {
    this.createDoctorVisible = !this.createDoctorVisible;
  }
  handleCreateDoctorChange(event: any) {
    this.createDoctorVisible = event;
  }
  handleShowDoctorsChange(event: any) {
    this.showDoctorsVisible = event;;
  }
  closeShowDoctorsModal() {
    this.showDoctorsVisible = !this.showDoctorsVisible;
  }
  closeCreateDoctorModal() {
    this.createDoctorVisible = !this.createDoctorVisible;
  }
  saveDoctor() {
    if (this.checkCreatedDoctor()) {
      this.errorMessage = 'Doctor is already exsists';
    }
    else if (this.doctorForm.valid) {
      this.administratorDoctor.password = this.encryptService.encrypt(this.administratorDoctor.password);
      this.isValidDoctor = true;
      this.closeCreateDoctorModal();
      this.doctorForm.reset;
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Invalid data';
      return;
    }
  }
  selectDoctor() {
    this.isValidDoctor = true;
    this.closeCreateDoctorModal();
  }
  private checkCreatedDoctor(): boolean {
    var invalid: boolean = false;
    this.users.forEach(user => {
      if (user.userName === this.administratorDoctor.userName)
        invalid = true
    });
    return invalid;
  }
  clearDoctormodel() {
    this.administratorDoctor = {
      userName: '',
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone: '',
    }
  }
  clearClinic() {
    this.createdClinic = {
      name: '',
      address: {}
    };
  }
  clearAll() {
    this.clearClinic();
    this.clearDoctormodel()
    this.clinicForm.reset();
    if (this.doctorForm !== undefined)
      this.doctorForm.reset();
    this.clinicAddress.resetSingleAddressForm();
    this.isValidDoctor = false
    this.submitted = false
  }
  remove(index: number) {
    this.clinics.splice(index, 1);
  }
  showDoctor(clinic: Clinic) {
    this.showDoctorsVisible = !this.showDoctorsVisible;
  }
  pick(event: any) {
    this.isDoctorSelected = true;
    this.administratorDoctor = event;
    this.administratorDoctor.npi = event.doctor.npi;
    this.administratorDoctor.licence = event.doctor.licence;
    this.administratorDoctor.speciality = event.doctor.speciality;
    this.administratorDoctor.credential = event.doctor.credential;
  }
  unpick(event: any) {
    this.isDoctorSelected = false;
  }
}

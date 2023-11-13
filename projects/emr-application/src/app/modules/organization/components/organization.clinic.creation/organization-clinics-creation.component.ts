import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../administration/model/user/user';
import { SingleAddressComponent } from '../../../common/components/single.address/single-address.component';
import { EncryptService } from '../../../common/service/encyrption/encrypt.service';
import { Clinic } from '../../../patient/models/clinic';
import { AdministratorDoctor } from '../../models/administrator.doctor';
import { DoctorUserService } from '../../services/doctor.user.autocomplete/doctor-user.service';
import { CreateAdministratorDoctorComponent } from './administrator.doctor.create/create-administrator-doctor.component';
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
  @ViewChild('clinicAddress') clinicAddress: SingleAddressComponent;
  @ViewChild('createAdministratorDoctorComponent') createAdministratorDoctorComponent: CreateAdministratorDoctorComponent;
  public users: User[];
  validAddress: boolean = true;
  submitted: boolean = false;
  createDoctorVisible: boolean = false;
  createdClinic: Clinic = {
    name: '',
    address: {
      addressType: null,
      country: null
    }
  };
  @ViewChild('clinicForm') clinicForm: NgForm;

  clinics: Clinic[] = new Array();
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    if (this.clinicForm.valid && this.createdClinic.administratorDoctor !== undefined) {
      this.createdClinic.address = this.clinicAddress.getAddress();
      this.clinics.push(this.createdClinic);
      this.clearAll();
    } else {
      this.submitted = true;
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
    this.clinicForm.reset();
    this.clinicAddress.resetSingleAddressForm();
    this.submitted = false
  }
  remove(index: number) {
    this.clinics.splice(index, 1);
  }
  handleCreateDoctorChange(event: any) {
    this.createDoctorVisible = event;
  }
  closeCreateDoctorModal() {
    this.createDoctorVisible = !this.createDoctorVisible;
  }
  openCreateDoctorModal() {
    this.createDoctorVisible = !this.createDoctorVisible;
  }
  handleCloseDoctorModal(event: any) {
    this.createdClinic.administratorDoctor = event
    this.closeCreateDoctorModal();
  }

}

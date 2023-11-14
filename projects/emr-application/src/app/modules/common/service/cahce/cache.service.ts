import { Injectable, Optional, SkipSelf } from '@angular/core';
import { filter, mergeMap, switchMap } from 'rxjs';
import { ClinicService } from '../../../administration/services/clinic/clinic.service';
import { Clinic } from '../../../patient/models/clinic';
import { ClinicEmittingService } from '../emitting/clinic-emitting.service';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private selectedClinic: number;
  private loggedinUserUUID: string;
  private loggedinUserName: string;
  private organizationId: number;
  constructor(private clinicEmittingService: ClinicEmittingService,
    @Optional() @SkipSelf() cacheService?: CacheService) {
    if (cacheService) {
      throw new Error('PatientStoreService is already loaded')
    }

    // this.clinicEmittingService.selectedClinic$.pipe(
    //   filter(result => result != null)
    // ).subscribe((clinic: Clinic) => {
    //   this.selectedClinic = Number(clinic.id);
    //   this.organizationId = clinic.organizationId;
    // })
  }
  async getOrganizationId(): Promise<number> {
    return this.organizationId;
  }
  async getSelectedClinic(): Promise<number> {
    return this.selectedClinic;
  }
  getLoggedinUserUUID(): string {
    return this.loggedinUserUUID;
  }
  getLoggedinUserName() {
    return this.loggedinUserName;
  }
  setLoggedinUserUUID(uuid: string) {
    if (this.loggedinUserUUID === undefined || this.loggedinUserUUID === null)
      this.loggedinUserUUID = uuid;
  }

  setLoggedinUserName(userName: string) {
    if (this.loggedinUserName === undefined || this.loggedinUserName === null)
      this.loggedinUserName = userName;
  }
}

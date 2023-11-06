import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IColumn } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, retry, tap } from 'rxjs';
import { Address } from '../../../../common/models';
import { ListTemplate } from '../../../../common/template/list.template';
import { Clinic } from '../../../../patient/models/clinic';
import { ClinicService } from '../../../services/clinic/clinic.service';

@Component({
  selector: 'app-list-clinic',
  templateUrl: './list-clinic.component.html',
  styleUrls: ['./list-clinic.component.css']
})
export class ListClinicComponent extends ListTemplate implements OnInit {
  clinics$!: Observable<Clinic[]>;
  columns: (string | IColumn)[];
  constructor(private router: Router
    , private clinicService: ClinicService
    , private toastr: ToastrService
    , private sanitizer: DomSanitizer) { super(); }

  ngOnInit(): void {
    this.columns = this.constructColumns(['name', 'address', 'actions']);
    this.initListComponent();
    this.clinics$ = this.clinicService.get(this.apiParams$).pipe(
      retry({
        delay: (error) => {
          console.warn('Retry: ', error);
          this.errorMessage$.next(error.message ?? `Error: ${JSON.stringify(error)}`);
          this.loadingData$.next(false);
          return this.retry$;
        }
      }),
      tap((response: any) => {
        this.totalItems$.next(response.number_of_matching_records);
        if (response.number_of_records) {
          this.errorMessage$.next('');
        }
        this.retry$.next(false);
        this.loadingData$.next(false);
      }),
      map((response: any) => {
        return response.records;
      })
    );
  }
  create() {
    this.router.navigateByUrl('emr/administration/create/clinic');
  }
  remove(item: any) {

  }
  constructAddress(billingAddress: Address) :string{
    var result: string = '';
    for (const [key, value] of Object.entries(billingAddress)) {
      if (key === 'firstAddress')
        result = value + ',';
      if (key === 'state')
        result = value + ',';
      if (key === 'zipCode')
        result = value;
    }
    return result;
  }
}

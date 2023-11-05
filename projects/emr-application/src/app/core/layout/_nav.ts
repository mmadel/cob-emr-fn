import { INavData } from '@coreui/angular-pro';

export const NavItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Patient',
    url: '/emr/patient',
    iconComponent: { name: 'cil-disabled' },
    children: [
      {
        name: 'Patients',
        url: 'patient/list'
      },
    ]
  },
  {
    name:'Organization',
    url:'/emr/organization',
    iconComponent: { name: 'cilHome' },
    children:[
      {
        name: 'Organizations',
        url:'organization/list'
      }
    ]
  },
  {
    name: 'Scheduler',
    url: '/emr/scheduler',
    iconComponent: { name: 'cil-calendar' },
    children: [
      {
        name: 'View Scheduler',
        url: 'scheduler/view'
      }
    ]
  },
  {
    name: 'Administration',
    url: '/emr/administration',
    iconComponent: { name: 'cilChart' },
    children: [
      {
        name: 'Insurance Company',
        url: 'administration/list/insurance/company'
      },
      {
        name: 'Users',
        url: 'administration/list/user'
      },
      {
        name: 'Clinics',
        url: 'administration/list/clinic'
      }
    ]
  }
];

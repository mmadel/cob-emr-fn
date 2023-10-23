import { CaseInsurance } from "./case.insurance";

export interface CaseInsuranceInformation {
    isSelfPay: boolean ;
    selfPayAmount: number | null;
    primaryInsurance: CaseInsurance | null;
    secondaryInsurance: CaseInsurance | null;
  }
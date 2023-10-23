import { InsuranceCompany } from "../../../administration/model/insurance.company/insurance.company";
import { PaymentType } from "../../../common/models/enums/payment.type";

export interface PatientInsurance {
  id: number | null;
  insuranceNumber: string;
  groupNumber: string;
  paymentType: PaymentType | null;
  paymentValue: string;
  totalDeductible: string;
  visitAllowed: number | null;
  expirationDate: number | null;
  expirationDate_Date: Date | null;
  insuranceCompany: InsuranceCompany | null;
}
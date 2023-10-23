import { PhoneType } from "../../common/models/enums/phone.type";

export interface Contact {
    phoneType: PhoneType | null;
    phoneNumber: string;
    email: string;
    additionalInfo: string;
  }
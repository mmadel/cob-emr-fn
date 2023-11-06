import { Address } from "../../common/models";
import { ClinicalUser } from "../../common/models/user/user";

export interface Clinic {
    id?: string;
    name?: string;
    address?:Address
    organizationId?:number
    users?:ClinicalUser[];
}
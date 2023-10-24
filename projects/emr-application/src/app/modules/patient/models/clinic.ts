import { ClinicalUser } from "../../common/models/user/user";

export interface Clinic {
    id?: string;
    name?: string;
    address?:string
    users?:ClinicalUser[];
}
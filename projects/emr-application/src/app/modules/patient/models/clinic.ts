import { Address } from "../../common/models";
import { ClinicalUser } from "../../common/models/user/user";
import { AdministratorDoctor } from "../../organization/models/administrator.doctor";

export interface Clinic {
    id?: string;
    name?: string;
    address?:Address
    organizationId?:number
    administratorDoctor?:AdministratorDoctor;
    selected?:boolean;
}
import { Clinic } from "../../../patient/models/clinic";
import { DoctorUser } from "./doctor";

export interface User {
    id?: number;
    userName?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    uuid?: string;
    email?: string
    role?: string;
    password?: string
    clinics?: Clinic[];
    doctor?: DoctorUser

}
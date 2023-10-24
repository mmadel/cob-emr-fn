import { Address } from "../address";

export interface ClinicalUser {
    id?: number;
    username?: string;
    firstName?: string
    middleName?: string,
    lastName?: string
    email?: string
    active?: boolean;
    phone?: string
    address?: Address;
    uuid?: string
    npi?: string
}
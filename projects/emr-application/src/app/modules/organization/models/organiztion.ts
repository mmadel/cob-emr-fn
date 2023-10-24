import { Address } from "../../common/models";

export interface Organization {
    id?: number;
    name?: string;
    dba?: string;
    groupNPI?: string;
    taxID?: string;
    billingAddress?: Address;
}
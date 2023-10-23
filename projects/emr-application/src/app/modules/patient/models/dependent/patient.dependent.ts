import { Address } from "../../../common/models/address";

export interface Dependent {
  address: Address;
  phone: string | null;
  name: string | null;
}
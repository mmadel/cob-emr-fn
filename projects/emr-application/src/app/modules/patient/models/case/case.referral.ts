import { ReferringPartyType } from "../../../common/models/enums/referring.party.type";


export interface ReferralCase {
  referringPartyName: string | null;
  referringPartyNPI: string | null;
  phone: string | null;
  fax: string | null;
  email: string | null;
  referringPartyType: ReferringPartyType | null;
  doctorType: string | null;
}
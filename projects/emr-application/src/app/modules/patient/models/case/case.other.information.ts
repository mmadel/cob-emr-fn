import { AutoApplyModifier } from "../../../common/models/enums/auto.apply.modifier";


export interface CaseOtherInformation {
    isAuthorized: boolean | null;
    addInfoForChart: string | null;
    autoApplyModifier: AutoApplyModifier | null;
}
import { Address } from "../modules/common/models/address";

export class AddressUtil {
    public static formatAddress(address: Address): string {
        var formattedAddress: string;
        if (address.state === undefined || address.state === null)
            address.state = "";
        if (address.firstAddress === undefined || address.secondAddress === null)
            address.secondAddress = "";
        if (address.province === undefined || address.province === null)
            address.province = "";
        formattedAddress = address.firstAddress + " , "
        if (address.secondAddress.length > 0)
            formattedAddress = formattedAddress + address.secondAddress + " , "
        formattedAddress = formattedAddress
            + address.zipCode + " , ";
        if (address.state.length > 0)
            formattedAddress = formattedAddress + address.state + " , "
        if (address.province.length > 0)
            formattedAddress = formattedAddress + address.province + " , "

        formattedAddress = formattedAddress
            + address.city + " , "
            + address.country

        return formattedAddress;
    }
}
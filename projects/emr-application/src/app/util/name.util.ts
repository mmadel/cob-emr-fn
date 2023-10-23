export class PatientName{
    public static formatName(fName: string, mName: string, lName: string): string {
        var firstName = this.capitalizeFirstLetter(lName);
        var middleName = mName === undefined ? "" : mName.charAt(0).toUpperCase();
        var lastName = this.capitalizeFirstLetter(fName)
        return lastName + ',' + firstName + '.' + middleName;
      }
    
      private static capitalizeFirstLetter(val:string) {
        return val.charAt(0).toUpperCase() + val.slice(1);
      }
}
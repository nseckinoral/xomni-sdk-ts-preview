module Models.Management.Configuration {
    export interface Store {
        Id: number;
        Name: string;
        Description: string;
        Address: string;
        Location: Location;
        Licenses: Licenses[];
    }
}
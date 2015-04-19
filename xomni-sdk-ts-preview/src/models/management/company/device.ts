module Models.Management.Company {
    export interface Device {
        DeviceId: string;
        Description: string;
        DeviceTypeId: number;
        DeviceTypeDescription: string;
        ExpirationDate: Date;
        RelatedLicenceId: number;
        RelatedLicenceName: string;
    }
} 
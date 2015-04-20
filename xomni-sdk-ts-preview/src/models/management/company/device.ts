module Models.Management.Company {
    export interface Device {
        DeviceId: string;
        Description: string;
        DeviceTypeId: number;
        DeviceTypeDescription: string;
        ExpirationDate: Models.UTCDate;
        RelatedLicenceId: number;
        RelatedLicenceName: string;
    }
} 
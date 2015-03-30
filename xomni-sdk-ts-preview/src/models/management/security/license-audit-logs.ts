module Models.Management.Security {
    export interface LicenseAuditLogs {
        Username: string;
        Name: string;
        CreatedAt: Date;
        DeletedAt: Date;
        CreatedApiUserName: string;
        DeletedApiUserName: string;
    }
}
module Models.Management.Security {
    export interface License {
        Id: number;
        Username: string;
        Name: string;
        Password: string;
        StoreId: number;
    }
} 
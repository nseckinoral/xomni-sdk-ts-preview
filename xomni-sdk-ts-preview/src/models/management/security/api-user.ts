module Models.Management.Security {
    export interface ApiUser {
        Id: number;
        Username: string;
        Name: string;
        Password: string;
        StoreId: number;
        Rights: ApiUserRights[];
    }
}
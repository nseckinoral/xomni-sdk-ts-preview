module Models.Management.Storage {
    export interface TenantAssetDetail extends TenantAsset {
        FileBody: Uint8Array;
    }
}
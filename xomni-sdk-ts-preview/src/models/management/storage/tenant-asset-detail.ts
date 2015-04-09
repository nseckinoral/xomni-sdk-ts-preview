module Models.Management.Storage {
    export interface TenantAssetDetail extends TenantAsset {
        FileBody: ArrayBuffer;
    }
}
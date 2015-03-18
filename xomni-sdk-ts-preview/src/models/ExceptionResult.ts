module Models {
    export interface ExceptionResult {
        IdentifierGuid: string;
        IdentifierTick: number;
        FriendlyDescription: string;
        HttpStatusCode: number;
    }
}
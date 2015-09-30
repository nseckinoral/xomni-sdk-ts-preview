module Models {
    export class ExceptionResult implements Error {
        name: string;
        message: string;
        IdentifierGuid: string;
        IdentifierTick: number;
        FriendlyDescription: string;
        HttpStatusCode: number;
    }
}
describe('Raising exception', () => {
    it("Should throw a proper exception", () => {
        var expectedExceptionResult = new Models.ExceptionResult();
        expectedExceptionResult.FriendlyDescription = "Generic error friendly description.";
        expectedExceptionResult.IdentifierGuid = "7358fe16- 3925 - 4951 - 9a77- fca4f9e167b0";
        expectedExceptionResult.IdentifierTick = 635585478999549713;

        window.onerror = (event: any, source?: string, fileno?: number, columnNumber?: number, error?: any): void => {
            expect(error).toBeDefined();
            expect(
                error.FriendlyDescription
                ).toEqual("Generic error friendly description.");
            expect(
                error.IdentifierGuid
                ).toEqual("7358fe16- 3925 - 4951 - 9a77- fca4f9e167b0");
            expect(
                error.IdentifierTick
                ).toEqual(635585478999549713);
        };

        try {
            throw expectedExceptionResult;
        }
        catch (error) {
            window.onerror.call(this,"","",null,null,error);
        }
    })
});
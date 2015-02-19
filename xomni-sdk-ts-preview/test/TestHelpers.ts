module TestHelpers {
    export function RequestUriTest($: any, expectedUrl: string) {
        spyOn($, "ajax")
            .and
            .callFake(params => {
                expect(params.url).toContain(expectedUrl);
            });
    }

    export function RequestHttpMethodTest($: any, expectedMethod: string) {
        spyOn($, "ajax")
            .and
            .callFake(params => {
                expect(params.type).toContain(expectedMethod);
            });
    }

    export function RequestHttpHeadersTest($: any, expectedHeaders: any) {
        spyOn($, "ajax")
            .and
            .callFake(params => {
                expect(params.headers).toEqual(expectedHeaders);
            });
    }
    
}
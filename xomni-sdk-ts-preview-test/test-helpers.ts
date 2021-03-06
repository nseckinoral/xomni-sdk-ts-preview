﻿module TestHelpers {
    export var genericErrorResponse = '{\
    "IdentifierGuid": "7358fe16-3925-4951-9a77-fca4f9e167b0",\
    "IdentifierTick": 635585478999549713,\
    "FriendlyDescription": "Generic error friendly description."\
}';

    export var uniqueId = "293f1b1e-faed-40cc-a792-04ce4a910749";

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

    export function RequestHttpHeadersTest($: any, expectedHeaders: any = {
        "Authorization": "Basic " + btoa(Xomni.currentContext.username + ":" + Xomni.currentContext.password),
        "Accept": "application/vnd.xomni.api-v3_1, */*"
    }) {
        spyOn($, "ajax")
            .and
            .callFake(params => {
                expect(params.headers).toEqual(expectedHeaders);
            });
    }

    export function InitalizeTestContext() {
        Xomni.currentContext = new Xomni.ClientContext("u", "p", "s");
    }

    export function ResponseParseTest($: any, expectedResponseJson: any) {
        spyOn($, "ajax")
            .and
            .callFake(p => {
                p.success(expectedResponseJson, null, null);
            });
    }

    export function RequestParseTest($: any, parseMethod: (requestJson: any) => void) {
        spyOn($, "ajax")
            .and
            .callFake(p => {
                parseMethod(JSON.parse(p.data));
            });
    }

    export function APIExceptionResponseTest($: any, statusCode: number) {
        spyOn($, "ajax")
            .and
            .callFake(p=> {
                var jqXHR: JQueryXHR = <JQueryXHR>{
                    responseText: genericErrorResponse,
                    status: statusCode,
                };
                p.error(jqXHR, null, null);
            });
    }
}
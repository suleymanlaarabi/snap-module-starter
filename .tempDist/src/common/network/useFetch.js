export default function useFetch(props, callback) {
    var _a;
    shortToast(props.url);
    const request = networking.newRequest().url(props.url);
    if (props.methode != "GET" /* EnumHttpMethode.GET */ && props.methode) {
        request.method(props.methode, props.body);
    }
    (_a = props.headers) === null || _a === void 0 ? void 0 : _a.forEach((header) => {
        request.addHeader(header.name, header.value);
    });
    networking.enqueue(request, (error, response) => {
        if (error != null) {
            logInfo("Failed to make request: " + error);
            return;
        }
        callback({
            getJSON: () => JSON.parse("" + response.bodyAsString),
            response: response,
        });
    });
}

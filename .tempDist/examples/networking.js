export default function start(_a) {
    var snapApplicationContext = _a.snapApplicationContext;
    snapApplicationContext.events.push({
        start: function (activity) {
            var targetUrl = "https://example.com";
            // async request
            networking.enqueue(networking.newRequest().url(targetUrl), function (error, response) {
                if (error != null) {
                    logInfo("Failed to make request: " + error);
                    return;
                }
                logInfo("ContentType : " + response.getHeader("Content-Type"));
                logInfo("Response: " + response.bodyAsString);
            });
            // sync request in background thread
            type("java.lang.Thread")
                .newInstance(javaInterfaces.runnable(function () {
                var response = networking.execute(networking.newRequest().url(targetUrl));
                logInfo("Response: " + response.bodyAsString);
            }))
                .start();
            networking.newWebSocket(networking.newRequest().url("wss://echo.websocket.org"), {
                onOpen: function (ws, response) {
                    logInfo("WebSocket open: " + response.statusMessage);
                    ws.send("Hello");
                },
                onMessageText: function (ws, text) {
                    logInfo("message: " + text);
                },
                onMessageBytes: function (ws, bytes) {
                    logInfo("message bytes: " + bytes);
                },
                onClosed: function (ws, code, reason) {
                    logInfo("Closing: " + code + " " + reason);
                },
            });
        },
    });
}

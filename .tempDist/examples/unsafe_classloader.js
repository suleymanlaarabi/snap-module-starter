export default function start(_a) {
    var snapActivityContext = _a.snapActivityContext;
    snapActivityContext.events.push({
        start: function () {
            type("java.lang.Thread")
                .newInstance(javaInterfaces.runnable(function () {
                try {
                    var okHttpClient = type("okhttp3.OkHttpClient$Builder", true)
                        .newInstance()
                        .followRedirects(false)
                        .build();
                    var response = okHttpClient
                        .newCall(type("okhttp3.Request$Builder", true)
                        .newInstance()
                        .url("https://github.com/")
                        .build())
                        .execute();
                    logInfo("response: " + response.body().string());
                }
                catch (e) {
                    logError(e);
                }
            }))
                .start();
        },
    });
}

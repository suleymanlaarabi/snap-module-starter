export default function start(_a) {
    var snapEnhancerContext = _a.snapEnhancerContext, snapActivityContext = _a.snapActivityContext;
    snapActivityContext.events.push({
        start: function (activity) {
            ipc.emit("myEvent", "hello", 255, activity.packageName);
        },
    });
    snapEnhancerContext.events.push({
        start: function (context) {
            ipc.on("myEvent", function (args) {
                longToast("received event: " + args);
            });
        },
    });
}

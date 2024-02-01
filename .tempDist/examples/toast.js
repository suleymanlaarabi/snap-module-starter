export default function start(props) {
    Object.keys(props).forEach(function (key) {
        var context = props[key];
        context.events.push({
            start: function () {
                shortToast("SnapChat Opened");
            },
        });
    });
}

var Bot = /** @class */ (function () {
    function Bot() {
    }
    Bot.prototype.sayHello = function () {
        return "<h1>Hello World</h1>";
    };
    return Bot;
}());
;
var hello = new Bot();
document.body.innerHTML = hello.sayHello();

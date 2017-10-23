
class Bot {
    sayHello() {
        return "<h1>Hello World</h1>";
    }
};

var hello = new Bot();
document.body.innerHTML = hello.sayHello();
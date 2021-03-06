class Greeter {
	static test(){ return "test" }

	constructor(message) {
		this.greeting = message;
	}
	greet() {
		return "Hello 1, " + this.greeting;
	}
}
class Greeter1 extends Greeter {
	constructor(message) {
		super(message);
		this.greeting = message;
	}
	greet() {
		return super.greet() + "Hello 2, " + this.greeting;
	}
}

alert(Greeter1.test() === "test");
alert((new Greeter1("test | 3")).greet() === "Hello 1, test | 3Hello 2, test | 3");

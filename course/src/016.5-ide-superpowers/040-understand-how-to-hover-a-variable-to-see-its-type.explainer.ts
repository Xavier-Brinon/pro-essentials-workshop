const thing = 123;

const otherThing = {
	name: "Alice",
};

const otherObject = {
	...otherThing,
	thing,
};

otherObject.thing;

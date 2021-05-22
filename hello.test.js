const Greet = require('./hello.js');

test('Say Hello to People', () => {

    expect(Greet('Dylan')).toBe("Hello, Dylan");
    expect(Greet("DYLAN")).toBe("HELLO DYLAN");
    expect(Greet(["Dylan", "Javier"])).toBe("Hello, Dylan, Javier");
    expect(Greet(["Dylan", "Javier", "Lucia", "Pedro", "Claudia", "Xochilt"])).toBe("Hello, Dylan, Javier, Lucia, Pedro, Claudia, Xochilt");
    expect(Greet()).toBe("Hello there!");
});
const Adder = require ("./adder");


        var numbers = {
            a:  10,
            b:  15,
        };

        var propsCollection = new Adder(numbers);

console.log(propsCollection.render());

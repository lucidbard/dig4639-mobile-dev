class Adder {
    constructor(props)      {
        this.props = props;

    }
    sum()  {
        return (this.props.a + this.props.b);
    }
    
    
        render ()   {
            return (`<h3> The objects known as Props A ${this.props.a} and Props B ${this.props.b} equal the sum of ${this.sum()} </h3>`);
        }
    }

module.exports = Adder;
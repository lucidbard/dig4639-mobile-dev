import "./index.css";

class Card {
    constructor(props) {
        this.props = props;
        this.element = document.createElement("div");
        this.element.innerHTML = this.props.content;
        this.props.className = "Card";
    }

    render(){
        return this.props
    }
}

export default Card;
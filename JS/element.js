function HtmlElement() {

    this.click = function() {
        console.log("clicked");
    };
}

HtmlElement.prototype.focus = function() {
    console.log("Focused");
}

function HtmlSelectElement(argument = []) {
    
    this.items = argument;
    this.addItem = function(item) {
        this.items.push(item);
    };
    
    this.removeItem = function(item) {
        this.items.splice( this.items.indexOf(item), 1);
    };
    
    this.render = function() {
        let str = `<select>\n`;
        for (let itr in this.items) {
            str += `<option>${itr}</option>\n`
        }
        str += "</select>\n"
       return str;
    }
};

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor =  HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;
    this.render =  function() {
        return `<img src="${this.src}">`
    }
};

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
class Circle {
    #id = new Date().getTime() + '_' + new Date.getMilliseconds();
    #radius = 50;
    #color = 'green';
    #element;
    constructor(radius, color) {
        this.#radius = radius;
        this.#color = color;
        this.#prepareHtml();
    }

    #prepareHtml() {
        this.#element = document.createElement('div');
        this.#element.id = 'circle_' + this.#id;
        this.#element.style = 'height:' + this.#radius + 'px;width:' + this.#radius + 'px;color:' + this.#color + ';border:1px solid ' + this.#color + ';border-radius:30px';
        document.body.appendChild(this.#element)
    }
}

let circle1 = new Circle(50, 'red');
class Circle {
    #id = new Date().getTime() + '_' + new Date().getMilliseconds();
    #element;
    #playground;
    #timer;
    constructor(radius, color, playground) {
        this.#playground = document.getElementById(playground);
        this.#element = document.createElement('div');
        this.#element.options = {
            direction: {
                x: 1,
                y: 1
            },
            position: {
                x: this.#playground.offsetTop,
                y: this.#playground.offsetLeft
            },
            radius: radius,
            color: color,
            alfa:{
                x:Math.random()+1,
                y:Math.random()+1
            }
        }
        this.#element.id = 'circle_' + this.#id;
        this.#prepareStyle();
        this.#playground.appendChild(this.#element)
        this.#element.options.position.x=(parseInt(this.#playground.offsetWidth)+parseInt(this.#playground.offsetLeft)-(this.#element.options.radius+2))*Math.random();
        this.#element.options.position.y=(parseInt(this.#playground.offsetHeight)+parseInt(this.#playground.offsetTop)-(this.#element.options.radius+2))*Math.random();
    }
    getX() {
        return parseInt(this.#element.style.top);
    }
    getY() {
        return parseInt(this.#element.style.left);
    }
    setY(y) {
        this.#element.style.top = y + 'px';
        this.#element.options.position.y = y;
        return this;
    }
    setX(x) {
        this.#element.style.left = x + 'px'
        this.#element.options.position.x = x;
        return this;
    }
    #moving(obj){
        let newX=obj.#element.options.position.x+(obj.#element.options.direction.x*obj.#element.options.alfa.x)
        let newY=obj.#element.options.position.y+(obj.#element.options.direction.y*obj.#element.options.alfa.y)
        
        if(newX>=(parseInt(obj.#playground.offsetWidth)+parseInt(obj.#playground.offsetLeft)-(obj.#element.options.radius+2))){
            newX=(parseInt(obj.#playground.offsetWidth)+parseInt(obj.#playground.offsetLeft)-(obj.#element.options.radius+2))
            obj.#element.options.direction.x*=-1;
            obj.#element.options.alfa.x=Math.random()+1;
        }
        if(newX<=parseInt(obj.#playground.offsetLeft)){
            newX=parseInt(obj.#playground.offsetLeft)
            obj.#element.options.direction.x*=-1;
            obj.#element.options.alfa.x=Math.random()+1;
        }

        if(newY>=(parseInt(obj.#playground.offsetHeight)+parseInt(obj.#playground.offsetTop)-(obj.#element.options.radius+2))){
            newY=(parseInt(obj.#playground.offsetHeight)+parseInt(obj.#playground.offsetTop)-(obj.#element.options.radius+2))
            obj.#element.options.direction.y*=-1;
            obj.#element.options.alfa.y=Math.random()+1;
        }
        if(newY<=parseInt(obj.#playground.offsetTop)){
            newY=parseInt(obj.#playground.offsetTop)
            obj.#element.options.direction.y*=-1;
            obj.#element.options.alfa.y=Math.random()+1;
        }
        obj.setX(newX)
        obj.setY(newY)
    }
    startMove() {
        this.#timer = setInterval(this.#moving,10,this)
    }
    #prepareStyle() {
        this.#element.style.position = 'absolute';
        this.#element.style.top = this.#element.options.position.x + 'px';
        this.#element.style.left = this.#element.options.position.y + 'px';
        this.#element.style.height = this.#element.options.radius + 'px';
        this.#element.style.width = this.#element.options.radius + 'px';
        this.#element.style.color = this.#element.options.color;
        this.#element.style.border = 'none';
        this.#element.style.borderRadius = '50px';
        this.#element.style.backgroundColor = this.#element.options.color;
    }

}

let circle1 = new Circle(100, 'blue','playground');
circle1.startMove();
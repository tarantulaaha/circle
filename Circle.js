class Circle {
    #id = new Date().getTime() + '_' + new Date().getMilliseconds()+'_'+Math.floor(Math.random()*100);
    #element;
    #playground;
    #timer;
    constructor(radius, color, playground) {
        this.#playground = document.getElementById(playground);
        this.#element = document.createElement('div');
        this.#element.id = 'circle_' + this.#id;
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
        this.#prepareStyle();
        this.#playground.appendChild(this.#element)
        this.#element.options.position.x=(parseInt(this.#playground.offsetWidth)-(this.#element.options.radius+2))*Math.random();
        this.#element.options.position.y=(parseInt(this.#playground.offsetHeight)-(this.#element.options.radius+2))*Math.random();
        console.log(this.#playground.offsetLeft,this.#playground.offsetTop,this.#playground.offsetWidth,this.#playground.offsetHeight)
    }
    getX() {
        return parseInt(this.#element.style.top);
    }
    getY() {
        return parseInt(this.#element.style.left);
    }    
    randomColor(){
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return '#'+r.toString(16).padStart(2,'0')+g.toString(16).padStart(2,'0')+b.toString(16).padStart(2,'0')
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
        
        if(newX>=(parseInt(obj.#playground.offsetWidth)-(obj.#element.options.radius+2))){
            newX=(parseInt(obj.#playground.offsetWidth)-(obj.#element.options.radius+2))
            obj.#element.options.direction.x*=-1;
            obj.#element.options.alfa.x=Math.random()+1;
            obj.#element.style.backgroundColor=obj.randomColor();
        }
        if(newX<=0){
            newX=0
            obj.#element.options.direction.x*=-1;
            obj.#element.options.alfa.x=Math.random()+1;
            obj.#element.style.backgroundColor=obj.randomColor();
        }

        if(newY>=(parseInt(obj.#playground.offsetHeight)-(obj.#element.options.radius+2))){
            newY=(parseInt(obj.#playground.offsetHeight)-(obj.#element.options.radius+2))
            obj.#element.options.direction.y*=-1;
            obj.#element.options.alfa.y=Math.random()+1;
            obj.#element.style.backgroundColor=obj.randomColor();
        }
        if(newY<=0){
            newY=0
            obj.#element.options.direction.y*=-1;
            obj.#element.options.alfa.y=Math.random()+1;
            obj.#element.style.backgroundColor=obj.randomColor();
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

let circle1 = new Circle(50, 'green','playground');
circle1.startMove();
let circle2 = new Circle(50, 'blue','playground');
circle2.startMove();
let circle3 = new Circle(30, 'red','playground');
circle3.startMove();
let circle4 = new Circle(20, 'yellow','playground');
circle4.startMove();
let circle5 = new Circle(10, 'white','playground');
circle5.startMove();
let circle6 = new Circle(10, 'pink','playground');
circle6.startMove();
let circle7 = new Circle(30, 'orange','playground');
circle7.startMove();
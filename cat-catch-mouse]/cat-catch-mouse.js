function Rat(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.isDead = false;
    this.speak = function () {
        console.log('chit chit...')
    }
}

function Cat(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.speak = function () {
        console.log('meo meo...')
    }
    this.canCatchMouse = function (mouse) {
        if (this.speed > mouse.speed) {
            console.log(`${this.name} can catch ${mouse.name}.`);
            return true
        } else return false
    }
    this.eat = function (mouse) {
        if (this.canCatchMouse(mouse) && mouse.isDead === false) {
            this.weight += mouse.weight;
            mouse.isDead = true;
            mouse.weight = 0;
            console.log(`${this.name}  eat ${mouse.name} successful`)
        } else {
            console.log(`${this.name} can't eat ${mouse.name} `)
        }
    }
}

let Tom = new Cat('tom', 10, 12);
let Jerry = new Rat('jerry', 2, 10);
console.log(Tom);
console.log(Jerry);
Tom.eat(Jerry);
console.log(Tom);
console.log(Jerry);

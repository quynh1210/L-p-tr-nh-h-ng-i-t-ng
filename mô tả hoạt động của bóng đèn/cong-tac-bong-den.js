
class ElectricLamp {
    status;

    constructor(status) {
        this._status = status;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    turnOn() {
        return this._status = true;
    }

    turnOff() {
        return this._status = false;
    }
}

class SwitchButton {
    _status;
    _lamp;

    constructor(status, lamp) {
        this._status;
        this._lamp;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get lamp() {
        return this._lamp;
    }

    set lamp(value) {
        this._lamp = value;
    }

    connectToLamp() {
        return this.lamp = lamp;
    }

    switchOff() {
        this.lamp.turnOff();
    }

    switchOn() {
        this.lamp.turnOn();
    }
}

var redLamp = new ElectricLamp();
var lampSwitch = new SwitchButton();
lampSwitch.connectToLamp(redLamp);
var count = 0;
while (count < 10) {
    alert(redLamp.status);
    lampSwitch.switchOn();
    alert(redLamp.status);
    lampSwitch.switchOff();
    count++;
}
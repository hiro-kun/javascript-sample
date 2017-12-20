'use strict';

const Sample = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // public
    getName () {
        return this.name;
    }

    // public
    getAge() {
        return this.age;
    }

    // public
    getUserInfo() {
        return 'Name is ' + this.getName() + '. Age is ' + this.getAge() + '.';
    }

    // static
    static staticSample() {
        return 'Static Sample.';
    }
};


const obj = new Sample('hoge', '20');

console.log(obj.getName());
console.log(obj.getAge());
console.log(obj.getUserInfo());
console.log(Sample.staticSample());

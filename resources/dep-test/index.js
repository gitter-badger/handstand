// setup test values
let testValue = JSON.stringify({
  "test-value": "foobar"
}, null, 2);
let version = require('../../package.json').version;

// mock HTMLElement object
global.HTMLElement = function() {
    this.getAttribute = function() {};
    this.setAttribute = function() {};
    this.style = {};
};

// mock window object
global.window = {};

// mock customElements object
global.customElements = function() {};
customElements.define = function() {};

// depend on handstand
let handstand = require('handstand');
let text = new HandstandText();
text.model.Set('test-value', 'foobar');

if (testValue === text.model.toJSON() && version === Handstand.version) {
    console.log("pass");
    process.exit(0);
} else {
    console.log("fail");
    process.exit(1);
}
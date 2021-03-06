let mockSlim = function() {
    this.onBeforeRender();
    this._attributes = [];
    this._events = [];
    this.style = {};
    this.childNodes = [];
    this.setAttribute = function(key, v) { this._attributes[key] = v; };
    this.getAttribute = function(key) { return this._attributes[key]; };
    this.tag = function() { };
    this.render = function() { this.onAfterRender(); };
    this.addEventListener = function(name, method) { this._events[name] = method; };
    this.removeEventListener = function(name, method) { delete this._events[name]; };
    this.trigger = function(name) {
        if (typeof this._events[name] === 'function') 
            this._events[name]();
    };
    this.dispatchEvent = function() { };
};
mockSlim.prototype._events = [];
mockSlim.prototype._attributes = [];
mockSlim.prototype.style = {};
mockSlim.prototype.childNodes = [];
mockSlim.prototype.setAttribute = function(key, v) { this._attributes[key] = v; };
mockSlim.prototype.getAttribute = function(key) { return this._attributes[key]; }
mockSlim.prototype.tag = function() {};
mockSlim.tag = function() {};

module.exports = mockSlim;
// controller

var Controller = function(opts){
    this.model = opts.model;
    this.elementId = opts.elementId,
    this.render = typeof opts.render == 'function' ? opts.render : function(){};
    this.clickHandlers = opts.clickHandlers;
    this.update = function(){
        document.getElementById(this.elementId).innerHTML = this.render();
    }

    // clickHandlers
    var that = this;
    for (var elId in opts.clickHandlers) {
        var handlerName = opts.clickHandlers[elId];
        this[handlerName] = opts[handlerName];
    }
    
    document.addEventListener('click', function(e){
        var id = '#' + e.target.id;
        var handlerName = that.clickHandlers[id];
        if (typeof that[handlerName] == 'function') that[handlerName]();
    });    
    
    setInterval(function(){
        if (that.model.changed) {
            that.update();
            that.model.changed = false;
        }
    }, 100);

    // init
    this.update();
}

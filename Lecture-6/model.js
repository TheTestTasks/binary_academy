// model

var Model = function(opts){
    this.changed = false;

    this.name = opts.name || "Unknown";
    this.age = opts.age || -1;
    this.year = opts.year || 0;
    this.examsTaken = opts.examsTaken || 0;
    this.takeExam = typeof opts.takeExam == 'function' ? opts.takeExam : function(){};
}

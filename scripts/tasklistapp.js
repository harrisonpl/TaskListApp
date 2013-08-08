(function(){

    var model = {
        tasks: ko.observableArray([
            {title: "task1", status: "WIP"}, 
            {title: "task2", status: "WIP"}, 
            {title: "task3", status: "Not Started"}  
        ]),
        
        addNew: function(){
            this.tasks.push({title: $("#newtitle").val()});
        },
        
        deleteTask: function(thing) {
            model.tasks.remove(thing);
        }
    };
    
    $(function(){
        
        
        
    });
    
    ko.applyBindings(model);

}());
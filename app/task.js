/**
 * Created by Andrey on 21.06.2016.
 */
define(["require", "./view/task"], function(require) {
    var id;
    var title;
    var description;
    var done;
    var view = require('./view/task');

    return {
        show: function(task) {
            view.show(task);
        },

        showAll: function(tasks) {
            var self = this;
            tasks.forEach(function(item, i, arr) {
                self.show(item);
            });
        },

        parse: function(task) {
            id = task.id;
            title = task.title;
            description = task.description;
            done = task.done;
        },

        setView: function(viewSrc) {
            view = require('./view/' + viewSrc);
        }
    };
});
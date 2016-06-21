/**
 * Created by Andrey on 21.06.2016.
 */
define(["require", "./view/task"], function(require) {
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

        setView: function(viewSrc) {
            view = require('./view/' + viewSrc);
        },

        getFormData: function(event) {
            var task = {};
            var data = $(event.target).serializeArray();
            data.forEach(function(item) {
                task[item.name] = item.value;
            });
            return task;
        }
    };
});
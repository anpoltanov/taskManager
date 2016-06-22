/**
 * Created by Andrey on 21.06.2016.
 */
define(["require", "./view/task"], function(require) {
    var view = require('./view/task');

    return {
        show: function(task) {
            view.show(task);
        },

        showAddForm: function() {
            $(document).find('form.tasklist.__addNew').append(view.getFormContent({}));
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
            debugger;
            var task = {};
            var form = $(event.target).closest('form');
            if (form.length == 0) {
                form = $(event.target).siblings('form');
            }
            var data = form.serializeArray();
            data.forEach(function(item) {
                task[item.name] = item.value;
            });
            return task;
        }
    };
});
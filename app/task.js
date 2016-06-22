/**
 * Created by Andrey on 21.06.2016.
 */
define(["require", "./view/task"], function(require) {
    var view = require('./view/task');

    return {
        show: function(task) {
            var container = $(document).find('#tasklist');
            var element = view.getElement(task);
            element.appendTo(container);
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

        toggleDone: function(event) {
            debugger;
            $(event.target)
                .siblings('form')
                .find('input[name="done"]')
                .val(
                    $(event.target).prop('checked')
                );
        },

        remove: function(event) {
            var task = this.getFormData(event);
            $(event.target).closest('.task').remove();
            return task;
        },

        refresh: function(event, task) {
            var taskElement = $(event.target).closest('.task');
            taskElement.replaceWith(view.getElement(task));
        },

        toggleEditState: function(event) {
            var taskElement = $(event.target).closest('.task');
            taskElement.children().toggle();
        },

        getFormData: function(event) {
            var task = {};
            var form = $(event.target).closest('form');
            if (form.length == 0) {
                form = $(event.target).siblings('form');
            }
            var data = form.serializeArray();
            form.trigger('reset');
            data.forEach(function(item) {
                task[item.name] = item.value;
            });
            return task;
        }
    };
});
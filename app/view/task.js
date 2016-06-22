/**
 * Created by Andrey on 22.06.2016.
 */
define(function () {
    var options;

    return {
        getElement: function(task) {
            var content = $('<li>' +
            '<h4 class="list-group-item-heading">' + task.title + '</h4><br />' +
            '<p class="list-group-item-text">' + task.description + '</p>' +
            '<div class="btn btn-danger pull-right __delete">Delete</div>' +
            '<div class="btn btn-warning pull-right __edit">Edit</div>' +
            '</li>')
                .data('id', task.id)
                .addClass("list-group-item task");
            var checkbox = $('<input type="checkbox" class="__done" />').addClass('pull-left');
            if (task.done == 'true') {
                checkbox.attr('checked', 'checked');
            }
            var form = $('<form></form>').addClass('tasklist __editTask').hide();
            var formContent = this.getFormContent(task);
            formContent.appendTo(form);
            form.appendTo(content);
            checkbox.prependTo(content);
            return content;
        },

        getFormContent: function(task) {
            return $(
                '<div class="form-group">' +
                    '<input value="' + ('title' in task ? task.title : '') + '" class="form-control" type="text" placeholder="Title" name="title" />' +
                '</div>' +
                '<div class="form-group">' +
                    '<input value="' + ('description' in task ? task.description : '') + '" class="form-control" type="text" placeholder="Description" name="description" />' +
                '</div>' +
                '<input type="hidden" name="id" value="' + ('id' in task ? task.id : '') + '" />' +
                '<input type="hidden" name="done" value="' + ('done' in task ? task.done : '') + '" />' +
                '<input type="hidden" name="type" value="task" />' +
                '<input class="btn btn-success" type="submit" value="' + ('id' in task ? 'Save' : 'Add') + '" />'
            );
        }
    }
});
/**
 * Created by Andrey on 22.06.2016.
 */
define(function () {
    var options;

    return {
        show: function(task) {
            var container = $(document).find('#tasklist');
            var content = $('<li></li>').data('id', task.id).text(task.title + ': ' + task.description);
            content.appendTo(container);
        }
    }
});
/**
 * Created by Andrey on 21.06.2016.
 */
define(function (require) {
    var task = require('./task');
    var repositoryFactory = require('./repositoryFactory');
    var repositoryTask = repositoryFactory.get('task');
    repositoryTask.setProvider('localStorage');
    var tasks = repositoryTask.findAll();
    task.showAll(tasks);
    task.showAddForm();
    $(document).on('submit', '.tasklist.__addNew', function(event) {
        event.preventDefault();
        var entity = task.getFormData(event);
        repositoryTask.save(entity);
        task.show(entity);
        return false;
    });
    $(document).on('submit', '.tasklist.__editTask', function(event) {
        event.preventDefault();
        repositoryTask.save(task.getFormData(event));
        task.toggleEditState(event);
        return false;
    });
    $(document).on('click', '#tasklist .task .__delete', function(event) {
        repositoryTask.remove(task.remove(event));
    });
    $(document).on('click', '#tasklist .task .__edit', function(event) {
        task.toggleEditState(event);
    });
    $(document).on('change', '#tasklist .task .__done', function(event) {
        task.toggleDone(event);
        repositoryTask.save(task.getFormData(event));
    });
});
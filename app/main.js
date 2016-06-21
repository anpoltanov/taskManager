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
    $(document).on('submit', '.tasklist.__addNew', function (event) {
        event.preventDefault();
        repositoryTask.save(task.getFormData(event));
        return false;
    });
});
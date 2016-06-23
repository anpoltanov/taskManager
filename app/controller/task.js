/**
 * Created by Andrey on 23.06.2016.
 */
define(function(require) {
    var modelTask;
    var viewTask;

    var addNewAction = function(event) {
        event.preventDefault();
        var entity = modelTask.getFormData(event);
        modelTask.save(entity);
        viewTask.showElement(entity);
        return false;
    };
    var editTaskAction = function(event) {
        event.preventDefault();
        var entity = modelTask.getFormData(event);
        modelTask.save(entity);
        viewTask.refreshElement(event, entity);
        return false;
    };
    var removeTaskAction = function(event) {
        var entity = modelTask.getFormData(event);
        modelTask.remove(entity);
        viewTask.removeElement(event);
    };
    var toggleEditStateAction = function(event) {
        viewTask.toggleElementEditState(event);
    };
    var toggleDoneStateAction = function(event) {
        viewTask.toggleElementDoneState(event);
        var entity = modelTask.getFormData(event);
        modelTask.save(entity);
    };
    var changeSortAction = function(event) {
        var tasks = modelTask.getAll();
        modelTask.toggleOrder();
        modelTask.sort(tasks);
        viewTask.showAll(tasks);
    };
    var indexAction = function() {
        var tasks = modelTask.getAll();
        viewTask.showAll(tasks);
        viewTask.showAddForm();
    };

    return {
        init: function() {
            modelTask = require('model/task');
            viewTask = require('view/task');
            modelTask.repositoryInit('localStorage');
            indexAction();
            $(document).on('submit', '.tasklist.__addNew', addNewAction);
            $(document).on('submit', '.tasklist.__editTask', editTaskAction);
            $(document).on('click', '#tasklist .task .__delete', removeTaskAction);
            $(document).on('click', '#tasklist .task .__edit', toggleEditStateAction);
            $(document).on('change', '#tasklist .task .__done', toggleDoneStateAction);
            $(document).on('click', '#tasklist_sort', changeSortAction);
        }
    }
});
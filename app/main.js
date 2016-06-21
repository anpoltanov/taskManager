/**
 * Created by Andrey on 21.06.2016.
 */
define(function (require) {
    var task = require('./task');
    var repository = require('./repository');
    repository.setProvider('localStorage');
    var tasks = repository.findAll();
    tasks.push({id:0, title:'Это Первый!', description:'описание'});
    task.showAll(tasks);
});
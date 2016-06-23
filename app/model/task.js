/**
 * Created by Andrey on 21.06.2016.
 */
define(function(require) {
    var repositoryFactory = require('repository/factory');
    var repositoryTask = repositoryFactory.get('task');
    var order = 'titleAsc';

    var compareTitleAsc = function(a,b) {
        if (a.title < b.title)
            return -1;
        if (a.title > b.title)
            return 1;
        return 0;
    };

    var compareTitleDesc = function(a,b) {
        if (a.title < b.title)
            return 1;
        if (a.title > b.title)
            return -1;
        return 0;
    };

    return {
        getAll: function() {
            return repositoryTask.findAll();
        },

        toggleOrder: function() {
            if (order == 'titleAsc') {
                this.setOrder('titleDesc');
            } else {
                this.setOrder('titleAsc');
            }
        },

        setOrder: function(name) {
            order = name;
        },

        /**
         * Gets array with task objects and returns this array sorted.
         * @param tasks
         * @returns {Array}
         */
        sort: function(tasks) {
            switch(order) {
                case 'titleAsc':
                    return tasks.sort(compareTitleAsc);
                case 'titleDesc':
                    return tasks.sort(compareTitleDesc);
                default:
                    return tasks.sort(compareTitleAsc);
            }

        },

        remove: function(entity) {
            repositoryTask.remove(entity);
        },

        save: function(entity) {
            repositoryTask.save(entity);
        },

        /**
         * Gets entity data from DOM
         * @param event
         * @returns {{}}
         */
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
        },

        repositoryInit: function(repository) {
            repositoryTask.setProvider(repository);
        }
    };
});
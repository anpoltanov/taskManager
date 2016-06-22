/**
 * Created by Andrey on 22.06.2016.
 */
define(function () {
    var res;

    return {
        findAll: function(entity) {
            res = [];
            for (var key in localStorage) {
                var obj = JSON.parse(localStorage[key]);
                if (obj.type == entity) {
                    res.push(obj);
                }
            }
            return res;
        },

        findBy: function() {
            return [];
        },

        save: function(entity) {
            if (!entity.id) {
                if (!localStorage.getItem(entity.type + '_last_id')) {
                    localStorage.setItem(entity.type + '_last_id', -1);
                }
                entity.id = parseInt(localStorage.getItem(entity.type + '_last_id')) + 1;
                localStorage.setItem(entity.type + '_last_id', entity.id);
            }
            localStorage.setItem(entity.type + '_' + entity.id, JSON.stringify(entity));
        },

        remove: function(entity) {
            debugger;
            if ('id' in entity && 'type' in entity) {
                localStorage.removeItem(entity.type + '_' + entity.id);
            }
        }
    }
});
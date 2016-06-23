/**
 * Created by Andrey on 22.06.2016.
 */
define(["require", "storageProvider/factory"], function(require) {
    var provider;

    return {
        findAll: function() {
            return provider.findAll('task');
        },

        setProvider: function(providerName) {
            var factory = require('storageProvider/factory');
            provider = factory.get(providerName);
        },

        save: function(entity) {
            entity.type = 'task';
            provider.save(entity);
        },

        remove: function(entity) {
            provider.remove(entity);
        }
    }
});
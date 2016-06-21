/**
 * Created by Andrey on 22.06.2016.
 */
define(["require", "storageProvider/localStorage"], function(require) {
    var provider;

    return {
        findAll: function() {
            return provider.findAll();
        },

        setProvider: function(providerSrc) {
            provider = require('storageProvider/' + providerSrc);
        }
    }
});
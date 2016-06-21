/**
 * Created by Andrey on 22.06.2016.
 */
define(["require", "storageProvider/localStorage"], function(require) {
    return {
        get: function(providerName) {
            return require('storageProvider/' + providerName);
        }
    }
});
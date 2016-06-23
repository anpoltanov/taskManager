/**
 * Created by Andrey on 22.06.2016.
 */
define(["require", "repository/task"], function(require) {
    return {
        get: function(repositoryName) {
            return require('repository/' + repositoryName);
        }
    }
});
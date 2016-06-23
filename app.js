/**
 * Created by Andrey on 21.06.2016.
 */
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        controller: '../app/controller',
        model: '../app/model',
        repository: '../app/repository',
        view: '../app/view'
    }
});

requirejs(['app/main']);
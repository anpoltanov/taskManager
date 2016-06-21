/**
 * Created by Andrey on 21.06.2016.
 */
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
});

requirejs(['app/main']);
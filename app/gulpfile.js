const   gulp        = require('gulp'),
        webpack     = require('webpack-stream'),
        browserSync = require('browser-sync'),
        runSequence = require('run-sequence');

gulp
.task('packJs', () => 
    gulp.src('js/main.js')
    .pipe(webpack(
        require('./webpack.config.js'),
        null,
        (err, stats) => {
            console.log(err, stats);
        }
    ))
    .pipe(gulp.dest(''))
)
.task('browserSync', ()=> {
    browserSync({
        server: {
            baseDir: '',
            routes: {
                "/node_modules": "node_modules"
            }
        },
        port: 3000,
        ui: {
            port: 3010
        }
    });
})
.task('watch', () => {
    gulp.watch('js/**/*.js', ['packJs']);
    gulp.watch('bundle.js', browserSync.reload);
})

.task('default', ()=> {
    runSequence('packJs', 'browserSync', 'watch');
});
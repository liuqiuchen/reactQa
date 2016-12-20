var gulp = require('gulp'),
    connect = require('gulp-connect'), // 运行live reload服务器
    browserify = require('gulp-browserify'), // 将所有组件拼接在一起，让浏览器里的代码也可以使用require来构建
    concat = require('gulp-concat'),
    port = process.env.port || 5000; // connect服务器的端口

gulp.task('browserify', function () {
    gulp.src('./app/js/main.js')
        .pipe(browserify({
            transform: 'reactify'
        }))
        .pipe(gulp.dest('./dist/js'));
});

// live reload
gulp.task('connect', function () {
    // 使用connect启动一个Web服务器
    connect.server({
        root: './',
        port: port,
        livereload: true
    });
});

// reload js
gulp.task('js', function () {
    gulp.src('./dist/**/*.js')
        .pipe(connect.reload());
});

// reload html
gulp.task('html', function () {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./dist/**/*.js', ['js']);
    gulp.watch('./app/**/*.html', ['html']);
    gulp.watch('./app/js/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'watch']);
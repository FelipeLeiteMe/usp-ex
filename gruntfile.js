module.exports = function ( grunt )
{
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),

        htmlmin: {
            dev: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.html',
                    dest: 'dist/'
                }]
            }
        },

        cssmin: {
            conbine: {
                files: {
                    'dist/assets/css/style.min.css': [
                        './src/assets/css/bootstrap.css',
                        './src/assets/css/main.css'
                    ]
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'dist/assets/js/script.min.js': [
                        './src/assets/js/jquery.js',
                        './src/assets/js/bootstrap.js',
                        './src/assets/js/main.js'
                    ]
                }
            }
        },

        image: {
            static: {
                options: {
                    pngquant: true,
                    optipng: true,
                    zopflipng: true,
                    jpegRecompress: true,
                    jpegoptim: true,
                    mozjpeg: true,
                    gifsicle: true,
                    svgo: true
                }
            },
            dynamic: {
                files: [ {
                    expand: true,
                    cwd: 'src/assets/img/',
                    src: [ '**/*.{jpg,png,svg}' ],
                    dest: 'dist/img/'
                }]
            }
        },

        watch: {
            php: {
                files: [ './src/**/*.{php,html}', './src/assets/**/*.{png,jpg,svg,css,js}' ]
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [ './src/**/*.{php,html}', './src/assets/**/*.{png,jpg,svg,css,js}' ]
                },
                options: {
                    proxy: '127.0.0.1:8000',
                    port: 8000,
                    open: false,
                    watchTask: true
                }
            }
        },

        php: {
            dev: {
                options: {
                    port: 8000,
                    base: './src/'
                }
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-htmlmin' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-image' );
    grunt.loadNpmTasks( 'grunt-browser-sync' );
    grunt.loadNpmTasks( 'grunt-php' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    grunt.registerTask( 'server', [ 'php', 'browserSync', 'watch' ] );
    grunt.registerTask( 'default', [ 'cssmin', 'uglify', 'image' ] );
    grunt.registerTask( 'minify', [ 'cssmin', 'uglify' ] );
}
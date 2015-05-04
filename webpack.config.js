'use strict';

var webpack = require( 'webpack' );

var path = require( 'path' );
var ROOT_PATH = __dirname;
var SOURCES_PATH = path.join( ROOT_PATH, 'sources' );
var VENDORS_PATH = path.join( ROOT_PATH, '/examples/vendors' );
var NODE_PATH = path.join( ROOT_PATH, 'node_modules' );
var BUILD_PATH = path.join( ROOT_PATH, 'builds/dist/' );

module.exports = {
    entry: {
        OSG: [ './sources/OSG.js' ],
        tests: [ './tests/tests.js' ]
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'OSG'
    },
    externals: [ {
        'qunit': {
            root: 'QUnit',
            commonjs2: 'qunit',
            commonjs: 'qunit',
            amd: 'qunit'
        }
    }, {
        'Zlib': {
            root: 'Zlib',
            commonjs2: 'gunzip',
            commonjs: 'gunzip',
            amd: 'gunzip'
        }
    }, {
        'q': {
            root: 'Q',
            commonjs2: 'q',
            commonjs: 'q',
            amd: 'q'
        }
    }, {
        'hammer': {
            root: 'Hammer',
            commonjs2: 'hammerjs',
            commonjs: 'hammerjs',
            amd: 'hammer'
        }
    }, {
        'leap': {
            root: 'Leap',
            commonjs2: 'leapjs',
            commonjs: 'leapjs',
            amd: 'leap'
        }
    }, {
        'jquery': {
            root: '$',
            commonjs2: 'jquery',
            commonjs: 'jquery',
            amd: 'jquery'
        }
    } ],
    resolve: {
        root: [
            SOURCES_PATH,
            VENDORS_PATH,
            ROOT_PATH,
            NODE_PATH
        ]
    },
    module: {
        loaders: [ {
            // shaders
            test: /\.(frag|vert|glsl)$/,
            loader: 'raw-loader'
        } ]
    },
    devtool: 'eval',
    plugins: [
        new webpack.BannerPlugin( [
            'OSGJS',
            'Cedric Pinson <trigrou@gmail.com> (http://cedricpinson.com)'
        ].join( '\n' ) )
    ]

};
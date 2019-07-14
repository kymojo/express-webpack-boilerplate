const path = require('path')
// const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
// const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    "mode": "development",
    "entry": "./client/src/mycode.js",
    "output": {
        "path": __dirname+'/client/public/script',
        "filename": "bundle.js"
    }
}
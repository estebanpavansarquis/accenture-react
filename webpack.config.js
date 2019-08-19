let htmlplugin = require("html-webpack-plugin")
let cssplugin = require("mini-css-extract-plugin")

module.exports = {
    //development - production 
    mode : "development",
    //devServer son las configuraciones del servidor y open es si queremos abrir el navegador automaticamente
    devServer : {
        open : true
    },
    //module : hace referencia a las instrucciones que le quieren dar a webpack por cada archivo que tenga que compilar 
    module : {
        rules : [
            {
                //test : qué tipo de modulo buscamos
                test : /\.js$/,
                //use : qué le aplicamos al modulo
                use : "babel-loader"
            } , 
            {
                test : /\.css$/,
                //El orden de ejecucion de los loades en un array es al reves
                //use : ["style-loader","css-loader"]
                use : [ cssplugin.loader ,"css-loader"]
            }
        ]
    },
    //plugins : siempre es un array de plugins
    plugins : [
        new cssplugin(),
        new htmlplugin({
            template : "./src/index.html",
            minify : {
                collapseWhitespace : true,
                removeAttributeQuotes : true,
                removeComments : true
            }
        })
    ]
}

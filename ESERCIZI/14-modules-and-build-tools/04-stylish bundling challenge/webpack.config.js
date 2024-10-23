// da questo file esportiamo quello che sarà l'oggetto di configurazione per webpack


// ci servono a importare moduli e plugin essenziali per il corretto funzionamento del tuo progetto
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production', //*00. possiamo assegnare production / development (con development stiamo dicendo a webpack che stiamo lavorando ancora nella fase di sviluppo i file non saranno ancora pronti per il deploy) (production quando si è pronti per il deploy!)
    entry: './src/scripts/main.js', //*01. entry point dell'applicazione, da dove webpack deve iniziare ad esplorare (inseriamo il path) 
    //*02. specifichiamo la cartella in cui webpack inserirà i file lavorati finali serve --> IL PERCORSO ASSOULUTO! (__dirname) + path di output (/dist)
    output: {
        filename: '[name].bundle.js', path: path.resolve(__dirname, './dist'),
        assetModuleFilename: "images/[name].[hash][ext][query]", // dentro dist crea una cartella "images" dentro dist/  
    },

    //*03. 
    devServer: {
        static: {
            directory: path.join(__dirname, 'static'),
            publicPath: '/static',
            serveIndex: true // http://localhost:8080/static/ is exposed; use only for learning
        }
    },

    //*04. 
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin()],

    //*05.
    module: {
        rules: [
            {
                test: /.(svg|png|jpg|jpeg|gif|webp|avif)$/,
                type: "asset/resource",
            },
            // questo loader carica i file HTML come stringhe e gestisce automaticamente i riferimenti a risorse esterne come immagini, file CSS e JavaScript all'interno degli attributi src o href del tuo HTML.
            {
                test: /.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader, //* ci crea il file di style al posto di inserirlo dentro <head>
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            // { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    //* 06.  
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            '@babel/preset-env',
                            {
                                targets: { edge: '127', firefox: '128', chrome: '127', safari: '17.5', ie: '11' },
                                // targets: '> 0.25%, not dead',
                                useBuiltIns: 'usage',
                                corejs: '3.21.1'
                            }
                        ]]
                    }
                }
            }
        ]
    }
};

// da questo file esportiamo quello che sarà l'oggetto di configurazione per webpack


// ci servono a importare moduli e plugin essenziali per il corretto funzionamento del tuo progetto
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// esportiamo l'oggetto di configurazione!!
module.exports = {
    mode: 'production', //*00. possiamo assegnare production / development (con development stiamo dicendo a webpack che stiamo lavorando ancora nella fase di sviluppo i file non saranno ancora pronti per il deploy) (production quando si è pronti per il deploy!)
    entry: './src/scripts/main.js', //*01. entry point dell'applicazione, da dove webpack deve iniziare ad esplorare (inseriamo il path) 
    output: { filename: '[name].bundle.js', path: path.resolve(__dirname, './dist') }, //*02. specifichiamo la cartella in cui webpack inserirà i file lavorati finali serve --> IL PERCORSO ASSOULUTO! (__dirname) + path di output (/dist)
    //*03. il devServer è un oggetto di configurazione di Webpack che specifica le opzioni per il server di sviluppo, il devServer è configurato per servire file statici da una directory specifica
    devServer: {
        static: {
            directory: path.join(__dirname, 'static'),
            publicPath: '/static',
            serveIndex: true // http://localhost:8080/static/ is exposed; use only for learning
        }
    },
    //*04. sono utili per gestire la generazione dei file HTML e CSS durante la fase di compilazione di un progetto Webpack
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin()],

    //*05.
    module: {
        rules: [
            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    //* 06. specifica che i file JavaScript dovrebbero essere gestiti da Babel
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


// esegui il file webpack (da terminale -> webpack.config.js), POSSIAMO VEDERE IL PERCORSO ASSOLUTO
console.log(__dirname); 

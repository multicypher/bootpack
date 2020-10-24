const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = {

    watch: true,
    
    entry: './src/index.js',
    
    output:{

        filename:'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    
    module:{
        rules: [

            {
                test: /\.(scss)$/,
                use:[

                    {
                        loader:'style-loader'

                    },

                    {

                        loader: 'css-loader'
                    },

                    {

                        loader: 'postcss-loader', 
            options: {
              plugins: function () {
                return [
                  require('precss'),
                ];
              }
            }
                    
                    },

                    {

                        loader: 'sass-loader'

                    }
                ]
            }
        ]
    }
}
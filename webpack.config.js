const path = require('path');

config = {
	entry:'./library/index.js',
	output:{
		path: path.resolve(__dirname, 'dist'),		
		filename:'./library/index.bundle.js'
	},
  	devServer: {
  		port:9000
  	},
	module:{
		rules:[{
			test:/\.jsx?$/,
			use:'babel-loader',
			exclude:'/node_modules/'
		},{
			test:/\.css?$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] //!
		}
		]
	}
}	


module.exports = config;
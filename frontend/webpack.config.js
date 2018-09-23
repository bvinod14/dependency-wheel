const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//prod {boolean} indicates production or dev mode
const prod = false; 

const publicpath = 'public';
const distFolder = prod ? '/dist' : '/dev-dist';
const interpath = publicpath + distFolder;

const cssBundlePattern = prod ? 'css/[name].min.css' : 'css/[name].css';
const extractCSS = new ExtractTextPlugin(cssBundlePattern);

const entries = {
	'searchAndDetails/index': './src/searchAndDetails/containers',
	'countDown/index': './src/countDown/container',
	'familyTreeData/index': './src/familyTreeData/containers'
}

module.exports = {
	entry: entries,
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname , interpath),
		publicPath: distFolder + '/'
	},
	mode: 'development',
	module: {
		rules:[
			{
				test: /\.(png|jpg|gif)$/,
				use: "file-loader?name=images/[name]-rev-[hash:6].[ext]"
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)(\?|$)/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.less$/,
				use: extractCSS.extract({
					fallback: "style-loader",
					use: "css-loader!less-loader"
				})
			},
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							["env", "react"]
						]
					}
				}]
			}
		]
	},
	plugins: [
		extractCSS,
		new CleanWebpackPlugin([interpath],{})
	]

}
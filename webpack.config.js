const path = require('path');

module.exports = {
  // Entry point of your application
  entry: './src/index.jsx', // Change this based on your actual entry file

  // Output configuration
  output: {
    filename: 'bundle.js', // This is the output file name
    path: path.resolve(__dirname, 'dist'), // The output directory
  },

  // Module rules (this is where we define how to handle .jsx files)
  module: {
    rules: [
      {
        test: /\.jsx$/, // This regex matches any file with a .jsx extension
        use: 'babel-loader', // Use babel-loader to transpile JSX files
        exclude: /node_modules/, // Exclude the node_modules directory (we don’t need to transpile third-party packages)
      },
    ],
  },

  // Resolve .jsx extensions automatically so you can import them without specifying the extension
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Development mode or production mode (optional, based on your needs)
  mode: 'development', // You can switch to 'production' for optimized builds
};

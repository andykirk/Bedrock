/*
    This file is saved as a .js file to allow for comments and better syntax highlighting.
    NOTE: This file serves as a list of examples ONLY, it is NOT used by anything.
    The parts of this file you want to use should be copied and pasted into the bower.json file.
*/
{
  "name": "bedrock",
  "version": "0.1",
  "main": "",
  "ignore": [],
  "dependencies": {
    "jquery": "1.11.0",
    "modernizr": "~2.7.1",
    "normalize-css": "~3.0.0",
    "normalize-scss": "~3.0.0"
  },
  "copy": [
    // Copy jquery.min.js to js/vendor folder:
    {
      "src": [
        "bower_components/jquery/dist/jquery.min.js"
      ],
      "dest": "public/js/vendor/jquery.min.js"
    },
    
    // Copy modernizr.js to js/vendor folder:
    {
      "src": [
        "bower_components/modernizr/modernizr.js"
      ],
      "dest": "public/js/vendor/modernizr.js"
    },
    
    // Copy normalize.css to css/vendor folder:
    {
      "src": [
        "bower_components/normalize-css/normalize.css"
      ],
      "dest": "public/css/vendor/normalize.css"
    },
    
    // Copy normalize.scss to _styles/vendor folder:
    {
      "src": [
        "bower_components/normalize-scss/normalize.scss"
      ],
      "dest": "_styles/vendor/normalize.scss"
    }
  ]
}

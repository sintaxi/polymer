# polymer

> NodeJS library for pre-processor agnostic template compiling.

Polymer understands jade, less, and markdown.

## Usage

    var polymer = require('polymer')
    var poly    = polymer.root('path/to/project')

    project.render('index.jade', function(error, body){
      console.log(body)
    })
var metadataParser = require('markdown-yaml-metadata-parser')
var marked = require('marked')
module.exports = function(text){
    var orig = metadataParser(text)
    var data = orig.metadata
    data.description = marked(orig.content)
    return JSON.stringify(data)
}
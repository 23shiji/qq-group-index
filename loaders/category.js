var fs = require('fs')
var metadataParser = require('markdown-yaml-metadata-parser')
var Path = require('path')

function getRealPath(path, prefix){
    return path.slice(prefix.length, path.length)
}
function walkDir(cateName, catePath, entry, prefix){
    var files = 
        fs.readdirSync(entry)
        .map(function(n){
            var path = Path.join(entry, n)
            var cate = getRealPath(path, prefix)
            var isDir = fs.lstatSync(path).isDirectory()
            return {
                name: n,
                path: path,
                cate: catePath,
                isDir: isDir
            }
        })
    var groups = files
    .filter(function(e){return !e.isDir})
    .map(function(e){
        var txt = fs.readFileSync(e.path, "utf8")
        var dt = metadataParser(txt)
        return {
            name: dt.name,
            number: dt.number,
            url: dt.url,
            category: e.cate,
            tags: e.tags || []
        }
    })
    var categories = files
    .filter(function(e){return e.isDir})
    .map(function(e){
        return walkDir(
            e.name, e.cate,
            e.path, prefix
        )
    })
    return {
        name: cateName,
        path: catePath,
        groups: groups,
        children: categories
    }
}

module.exports = function(conf){
    var config = JSON.parse(conf)
    var data = walkDir(config.title, "", config.entry, config.entry)
    return JSON.stringify(data)
}
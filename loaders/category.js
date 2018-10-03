const fs = require('fs')
const Path = require('path')
const metadataParser = require('markdown-yaml-metadata-parser')
const marked = require('marked')
const crypto = require('crypto')
const LoaderUtils = require('loader-utils')

function getMD5(text){
  let md5 = crypto.createHash('md5')
  let result = md5.update(text).digest('hex')
  return result
}
function getRealPath(path, prefix) {
  return path.slice(prefix.length, path.length)
}
function fileToGroup(e, index, tags){
  let text = fs.readFileSync(e.rpath, "utf8")
  let orig = metadataParser(text)
  let data = orig.metadata
  data.description = marked(orig.content)
  let content = JSON.stringify(data)
  let filename = "data/" + getMD5(content) + ".json"
  let fp = filename
  // let src = LoaderUtils.urlToRequest("~"+filename)
  let src = filename
  this.emitFile(fp, content, {})
  // console.log(fp)
  let id = index.length
  let group = {
    id,
    name: data.name || Path.basename(e.name, ".g.yml"),
    tags: data.tags || [],
    category: e.cate,
    number: data.number,
    summary: data.summary,
    src
  }
  index.push(group)
  for(let t of group.tags){
    if(tags[t]){
      tags[t].groups.push(id)
    }else{
      tags[t] = {
        name: t,
        groups: [id]
      }
    }
  }
  return id 
}
function walkDir(cateName, catePath, entry, prefix, index, tags, fullPath, loaderPath) {
  // console.log(cateName)
  const files = fs.readdirSync(fullPath(entry)).sort().map((n) => {
    let path = Path.join(entry, n)
    let cate = getRealPath(path, prefix)
    let rpath = fullPath(path)
    let isDir = fs.lstatSync(rpath).isDirectory()
    // console.log(LoaderUtils.getOptions(this))
    return {
      name: n,
      path,
      rpath,
      cate: catePath,
      isDir
    }
  })
  const groups = files
    .filter(e => !e.isDir)
    .map( e => fileToGroup.call(this, e, index, tags) )
  let children = files.filter(e => e.isDir)
    .map(e => walkDir.call(
      this,
      e.name, e.cate,
      e.path, prefix,
      index, tags,
      fullPath, loaderPath
    ))
  return {
    name: cateName,
    path: catePath,
    groups, children
  }
}

module.exports = function (conf) {
  this.cacheable(false)
  let config = JSON.parse(conf)
  let index = []
  let tags = {}
  let tree = walkDir.call(
      this, 
      config.title, "", 
      config.entry, config.entry,
      index, tags,
      p => Path.resolve(this.context, p),
      p => Path.resolve(__dirname, '..', p))
  return JSON.stringify({tree, index, tags})
}
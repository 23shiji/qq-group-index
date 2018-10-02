const fs = require('fs')
const Path = require('path')

function getRealPath(path, prefix) {
  return path.slice(prefix.length, path.length)
}
function walkDir(cateName, catePath, entry, prefix, fullPath, loaderPath) {
  let fp = new Promise((resolve, reject) => {
    fs.readdir(loaderPath(entry), (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files.map((n) => {
          let path = Path.join(entry, n)
          let cate = getRealPath(path, prefix)
          let rpath = loaderPath(path)
          let isDir = fs.lstatSync(rpath).isDirectory()
          return {
            name: n,
            path: path,
            rpath,
            cate: catePath,
            isDir: isDir
          }
        }))
      }
    })
  })
  let gp = fp.then(fl => fl.filter(e => !e.isDir))
    .then(files => Promise.all(files.map((e) => {
      return Promise.all(files
        .filter(e => !e.isDir)
        .map( e => {
          return Promise.all([
            new Promise((resolve, reject) =>{
              let url = '../loaders/group.js!yaml-loader!'+fullPath(e.path)
              this.resolve(
                url,
                (err, source) => 
                err ?
                  reject(err) :
                  resolve(JSON.parse(source)))
            }),
            new Promise((resolve, reject) =>{
              let url = fullPath(e.path)
              this.resolve(
                url,
                (err, source) => 
                err ? reject(err) : resolve(source))
              })
          ]).then(([{name, tags}, src]) => {
            return {
              name,
              tags,
              src,
              category: e.cate
            }
          })
        }))
      })))
  let cp = fp.then(fl => fl.filter(e => e.isDir))
      .then(files => 
        Promise.all(files.map(e => 
          walkDir.call(
            this,
            e.name, e.cate,
            e.path, prefix,
            fullPath, loaderPath
          ))))
  return Promise.all([gp, cp]).then(([groups, children]) => {
    return {
      name: cateName,
      path: catePath,
      groups, children
    }
  })
}

module.exports = function (conf) {
  let callback = this.async()
  var config = JSON.parse(conf)
  var data = new Promise((resolve, reject) => {
    return walkDir.call(
      this, 
      config.title, "", 
      config.entry, config.entry,
      p => {
        return p
      },
      p => Path.resolve(__dirname, '..', 'src', p))
  }).then(data => {
    return JSON.stringify(data)
  }).then(data => {
    callback(data)
  })
}
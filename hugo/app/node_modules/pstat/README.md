# pStat

[![npm](https://img.shields.io/npm/v/pstat.svg?style=flat-square)](https://www.npmjs.com/package/pstat)
[![npm](https://img.shields.io/npm/dt/pstat.svg?style=flat-square)](https://www.npmjs.com/package/pstat)

Check if file or directory exists in Node.JS.


## Install

Use NPM to install the package:

```
npm install pstat
```

## Usage

Include the package using:

```javascript
var pStat = require('pstat');
```

### pStat.isFile(path, callback)

Asynchronously check if path exists and is a file. The callback is passed with `true` if path exists and is a file or `false` if not. Example:

```javascript
pStat.isFile('./folder/file.txt', function(is_file){ /* do something */ });
```

### pStat.isFileSync(path)

Synchronous version of `pStat.isFile`. Returns `true` if path exists and is a file, `false` if not.

### pStat.isDir(path, callback)

Asynchronously check if path exists and is a directory. The callback is passed with `true` if path exists and is a directory or `false` if not. Example:

```javascript
pStat.isDir('./your/folder', function(is_dir){ /* do something */ });
```

### pStat.isDirSync(path)

Synchronous version of `pStat.isDir`. Returns `true` if path exists and is a directory, `false` if not.

## License

[MIT](./LICENSE) Jose M. Juanes.

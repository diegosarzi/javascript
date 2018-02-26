//Import dependencies
var fs = require('fs');

//pstat class
var pstat =
{
  //Check if path is a file
  isFile: function(path, callback)
  {
    //Get the stat for this path
    pstat.Stat(path, function(stat)
    {
      //Check for error
      if(stat === false){ return callback(false); }

      //Else, return if is a file
      return callback(stat.isFile());
    });
  },

  //Check if path is a file sync
  isFileSync: function(path)
  {
    //Get the stat for this path
    var stat = pstat.StatSync(path);

    //Check for error
    if(stat === false){ return false; }

    //Return if is a file
    return stat.isFile();
  },

  //Check if path is a directory
  isDir: function(path, callback)
  {
    //Get the stat for this path
    pstat.Stat(path, function(stat)
    {
      //Check for error
      if(stat === false){ return callback(false); }

      //Else, return if is a directory
      return callback(stat.isDirectory());
    });
  },

  //Check if path is a directory sync
  isDirSync: function(path)
  {
    //Get the stat for this path
    var stat = pstat.StatSync(path);

    //Check for error
    if(stat === false){ return false; }

    //Return if is a directory
    return stat.isDirectory();
  },

  //Path stat
  Stat: function(path, callback)
  {
    //Get the path stat
    fs.stat(path, function(error, stat)
    {
      //Check for error
      if(error){ return callback(false); }

      //Do the callback with the stat
      return callback(stat);
    });
  },

  //Path stat sync
  StatSync: function(path)
  {
    //Try to run the fs.statSync
    try
    {
      //Return the stat
      return fs.statSync(path);
    }
    catch(e)
    {
      //If error, return false
      return false;
    }
  }
};

//Exports to node
module.exports = pstat;

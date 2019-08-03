var db = require('../db.js')
var commons = require('./commons.js')

var UploadFiles = function() {

    var uploadLibrary = function(tempfile, filename) {
        /*
          randomNumber = Random.new
          randomNameNumber = randomNumber.rand(100000000..9900000000)


          #FileUtils.copy(tempfile.path, $pathfolder + "#{filename}")
          FileUtils.copy(tempfile.path, $pathfolder + "#{filename}")

          $mysql.query("INSERT INTO settings (object_name, object_type) VALUES ('#{filename}','1');")
        */
    }

    var uploadScreenshot = function(tempfile, filename, component_id) {
        /*
  randomNumber = Random.new
  randomNameNumber = randomNumber.rand(100000000..9900000000)
  FileUtils.copy(tempfile.path, $pathfolder + "#{filename}")
  $mysql.query("UPDATE components SET object_screenshot_name ='#{filename}' WHERE object_id ='#{component_id}';")
*/
    }

    var getAttachedFileName = function(id) {
        
          var results = [];
        /*
          $mysql.query("SELECT object_screenshot_name FROM components  WHERE object_id ='#{id}';").each do |row|

            results << row['object_screenshot_name']
          end

          return results[0]
        */
    }
    return {
        uploadLibrary: uploadLibrary,
        uploadScreenshot: uploadScreenshot,
        getAttachedFileName: getAttachedFileName
    }
}();

module.exports = UploadFiles;
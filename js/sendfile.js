/*

    RECEIVE FILES IN GOOGLE DRIVE
    - - - - - - - - - - - - - - - 
      
*/

function doGet(e) {
    return HtmlService.createHtmlOutputFromFile('forms.html').setTitle("Google File Upload by CTRLQ.org");
  }
  
  
  function uploadFileToGoogleDrive(data, file, name, email) {
    
    try {
      
      var dropbox = "Received Files";
      var folder, folders = DriveApp.getFoldersByName(dropbox);
      
      if (folders.hasNext()) {
        folder = folders.next();
      } else {
        folder = DriveApp.createFolder(dropbox);
      }
      
      var contentType = data.substring(5,data.indexOf(';')),
          bytes = Utilities.base64Decode(data.substr(data.indexOf('base64,')+7)),
          blob = Utilities.newBlob(bytes, contentType, file),
          file = folder.createFolder([name, email].join(" ")).createFile(blob);
      
      return "OK";
      
    } catch (f) {
      return f.toString();
    }
    
  }
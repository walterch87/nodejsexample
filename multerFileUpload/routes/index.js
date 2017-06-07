var express = require('express');
var router = express.Router();

var multer  =   require('multer');

var fs = require('fs');

/*
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-I' + Date.now());
  }
});

var upload = multer({ storage : storage }).array('userPhoto',2);
*/


// create file upload directory

var fileUploadDir = './upload/';
var fileDestDir_multiple = './muploads/';
var fileDestDir_single = './suploads/';

if (!fs.existsSync(fileUploadDir)){
	fs.mkdirSync(fileUploadDir);
	console.log("Folder upload has been Created");
}

if (!fs.existsSync(fileDestDir_multiple)){
	fs.mkdirSync(fileDestDir_multiple);
	console.log("Folder muploads has been Created");
}

if (!fs.existsSync(fileDestDir_single)){
	fs.mkdirSync(fileDestDir_single);
	console.log("Folder suploads has been Created");
}

var upload = multer({dest:'./upload/' });

router.post('/upload-multiple', upload.array('muploads', 12), function (req, res, next) {

  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any

  if (req.body.name) {
    console.log("Name: " + req.body.name);
  }
  if (req.body.address) {
    console.log("Address: " + req.body.address);
  }

  if (req.files)
  {
    for (file in req.files) {
      console.log("File Uploaded is "+req.files[file]['fieldname']);
      console.log("Original Name is "+req.files[file]['originalname']);
      console.log("encoding: "+req.files[file]['encoding']);
      console.log("mimetype: "+req.files[file]['mimetype']);
      console.log("destination: "+req.files[file]['destination']);
      console.log("filename: "+req.files[file]['filename']);
      console.log("The saving path is "+req.files[file]['path']);
      console.log("Size is "+req.files[file]['size']);
      //console.log("buffer: "+req.files[file]['buffer']);

      // fs.rename(oldPath, newPath, callback)
      fs.renameSync(req.files[file]['path'], 'muploads\\'+req.files[file]['originalname']);
    }
  }


  console.log("/upload-multiple");
  res.send("File is uploaded(Multiple).");
});

router.post('/upload-single', upload.single('suploads', 12), function (req, res, next) {

  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any

  if (req.body.name) {
    console.log("Name: " + req.body.name);
  }
  if (req.body.address) {
    console.log("Address: " + req.body.address);
  }

  console.log("File Uploaded is "+req.file['fieldname']);
  console.log("Original Name is "+req.file['originalname']);
  console.log("encoding: "+req.file['encoding']);
  console.log("mimetype: "+req.file['mimetype']);
  console.log("destination: "+req.file['destination']);
  console.log("filename: "+req.file['filename']);
  console.log("The saving path is "+req.file['path']);
  console.log("Size is "+req.file['size']);
  //console.log("buffer: "+req.file['buffer']);

  // fs.rename(oldPath, newPath, callback)
  fs.renameSync(req.files[file]['path'], 'suploads\\'+req.files[file]['originalname']);

  console.log("/upload-single");
  res.send("File is uploaded(single).");
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/profile', upload.single('avatar'), function (req, res, next) {
  if(req.file)  {
    /*
        fieldname	Field name specified in the form
        originalname	Name of the file on the user's computer
        encoding	Encoding type of the file
        mimetype	Mime type of the file
        size	Size of the file in bytes
        destination	The folder to which the file has been saved	DiskStorage
        filename	The name of the file within the destination	DiskStorage
        path	The full path to the uploaded file	DiskStorage
        buffer	A Buffer of the entire file	MemoryStorage
    */
    console.log("File Uploaded is "+req.file['fieldname']);
    console.log("Original Name is "+req.file['originalname']);
    console.log("encoding: "+req.file['encoding']);
    console.log("mimetype: "+req.file['mimetype']);
    console.log("destination: "+req.file['destination']);
    console.log("filename: "+req.file['filename']);
    console.log("The saving path is "+req.file['path']);
    console.log("Size is "+req.file['size']);
    //console.log("buffer: "+req.file['buffer']);
    //res.set('statusmessage', "ok");
    //res.send(req.files);
  }

  //console.log(req.body);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log("/profile");
  res.send("File is uploaded(Single).");
});

router.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  /*
  if (err) {
    console.log(err.message);
    // An error occurred when uploading
    return
  }
  */

  if(req.files)
  {
    for (file in req.files) {
      console.log("File Uploaded is "+req.files[file]['fieldname']);
      console.log("Original Name is "+req.files[file]['originalname']);
      console.log("encoding: "+req.files[file]['encoding']);
      console.log("mimetype: "+req.files[file]['mimetype']);
      console.log("destination: "+req.files[file]['destination']);
      console.log("filename: "+req.files[file]['filename']);
      console.log("The saving path is "+req.files[file]['path']);
      console.log("Size is "+req.files[file]['size']);
      //console.log("buffer: "+req.files[file]['buffer']);
    }
    /*
    res.set('statusmessage', "ok");
    res.send(req.files);*/
  }

  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  console.log("/photos/upload");
  res.send("File is uploaded(Multiple).");
});


module.exports = router;

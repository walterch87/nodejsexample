var express = require('express');
var router = express.Router();

var multer  =   require('multer');

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

var upload = multer({dest:'./upload/' });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
router.post('/profile', function (req, res) {
  uploadProfileImgs(req, res, function (err) {
    if (err) {
      console.log(err.message);
      // An error occurred when uploading
      return
    }
    res.send("File is uploaded.");
    console.log('Everything went fine');
    // Everything went fine
  })
})
*/

router.post('/profile', upload.single('avatar'), function (req, res, next) {

  //console.log(req.file);


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
    //console.log("File Uploaded is "+req.files[0]['fieldname']);
    //console.log("The saving path is "+req.files[0]['path']);
    //console.log("Size is "+req.files[0]['size']);
    /*
    res.set('statusmessage', "ok");
    res.send(req.files);*/
  }

  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  console.log("/photos/upload");
  res.send("File is uploaded(Multiple).");
})


/*
router.post('/upload',function(req,res){
    upload(req,res,function(err) {
        //console.log(req.body);
        //console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }

        if(req.files)
        {
          console.log("File Uploaded is "+req.files[0]['fieldname']);
          console.log("The saving path is "+req.files[0]['path']);
          console.log("Size is "+req.files[0]['size']);
          res.set('statusmessage', "ok");
          res.send(req.files);
        }
        else
        {
          console.log("Fail: No file attached");
          res.set('statusmessage', "Fail: No file attached");
          res.send("Fail: No file attached");
        }


        //res.end("File is uploaded");
    });
});
*/

/*
router.post('/upload', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  var file = req.file;

  res.send('respond with a resource');



  // req.body will hold the text fields, if there were any
});
*/


module.exports = router;

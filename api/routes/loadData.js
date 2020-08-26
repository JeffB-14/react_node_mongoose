if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const
      express = require('express')
    , router = express.Router()

    , azureStorage = require('azure-storage')
    , blobService = azureStorage.createBlobService()

    , getStream = require('into-stream')
    , containerName = 'data'
;

//Amazon S3
const AWS = require('aws-sdk')
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
    region: process.env.AWS_REGION
})

const handleError = (err, res) => {
    res.status(500);
    res.render('error', { error: err });
};

const getBlobName = originalName => {
    const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
    const fileNameArray = originalName.split('/');
    const fileName = fileNameArray[fileNameArray.length-1].replace(/\s/,'_');
    return `${identifier}-${fileName}`;
};

/* GET home page. */
//router.get('/:filename', function(req, res, next) {
router.get('/', function(req, res, next) {
    //var fileKey = req.params.filename;
    var fileKey = 'published/PUBLIC/COVID-19-Activity/1596048694/COVID-19 Activity.csv'

    console.log('Trying to download file', fileKey);
    
    var params = { Bucket: process.env.AWS_BUCKET_NAME, Key: fileKey };

    s3.getObject(params, function(err, data){
      if (err) { 
        handleError(err,res);
        return next() 
      } else {
        try{
            const blobName = uploadToAzureBlob(fileKey,data.Body,res);
        
            res.render('success', { 
                message: 'File uploaded to Azure Blob storage as ' + blobName
            });
        }catch(err){
            handleError(err,res);
            return;
        }
      } 
    });
});

function uploadToAzureBlob(fileKey, data, res){
    const
        blobName = getBlobName(fileKey),
        stream = getStream(data),
        streamLength = data.length;

    blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, err => {
        if(err) {
            handleError(err,res);
            return;
        }
    });
    return blobName;
}

module.exports = router;
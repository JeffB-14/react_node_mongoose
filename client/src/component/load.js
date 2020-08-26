import React, { Component } from 'react'; 

class LoadData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apiResponse: "apiResponse",
            dbResponse: "dbResponse"
          }
    }

    test(){ 
        console.log(this.props);
        var fileKey = this.props.match.params.fileKey;
        
        console.log('Trying to download file', fileKey);
        
        fetch("http://localhost:3001/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
        
        return (<div><h1>Load datafile: {this.props.match.params.fileKey}</h1>
        <p className="App-intro">{this.state.apiResponse}</p>
        </div>);

    } /*
    getBlobName = originalName => {
        const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
        return `${identifier}-${originalName}`;
    };

    uploadToAzure(req, res){
        const
          blobName = this.getBlobName(this.props.match.params.fileKey)
        , stream = getStream(req.file.buffer)
        , streamLength = req.file.buffer.length;

        this.blobService.createBlockBlobFromStream(this.containerName, blobName, stream, streamLength, err => {
            if(err) {
                handleError(err);
                return;
            }
            res.render('success', { 
                message: 'File uploaded to Azure Blob storage.' 
            });
        });
    }

    uploadToS3(fileKey, fileStream, res){
        let myFile = fileKey.split(".")
        const fileType = myFile[myFile.length - 1]
    
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${uuid()}.${fileType}`,
            Body: fileStream
        }
        this.s3.upload(params, (error, data) => {
            if(error){
                //res.status(500).send(error)
                return 500;
            }
            return 200;
            //res.status(200).send(data)
        })
    }*/
    render() {
        return (
          <div className="Test">
              <p className="App-intro">{this.test()}</p>
          </div>
        );
      }
}
export default LoadData;
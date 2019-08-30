import React, { Component } from 'react';

import axios,{post} from 'axios';
import { API_URL } from '../constant';

class FileUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            message : '',
            status: '',
            selectedFile:'',
            progress:''
        }
        this.onFileChange = this.onFileChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    }
    onFileChange = (e) => {

        this.setState({selectedFile: e.target.files[0]})
        console.log(e.target.files[0])
    }
    fileUpload = (e) => {
        const fd = new FormData();
        
        fd.append('userfile', this.state.selectedFile, this.state.selectedFile.name);
        
        post(`${API_URL}/upload/file`,fd,{
            onUploadProgress : ProgressEvent => {
                this.setState({
                    progress : Math.round(ProgressEvent.loaded/ProgressEvent.total*100)+' %'
                })                
                // console.log('Progress : ',Math.round(ProgressEvent.loaded/ProgressEvent.total*100)+' %')
            }
        })
          .then((response) => {
            const {status,data} = response.data;
            this.setState({ 
                status : (status===false) ? 'error':'success',
                message : data,
                progress : ''
            }); 
            // console.log('post.then:',response.data);
          })
          .catch((error) => this.setState({ error:error.toString(),progress : ''}));

    }
    render() {
        
        const {message,status,progress} = this.state;
        return (
            <div>
            <h2>FileUpload</h2>
            <input type="file" name="file_upload" onChange={this.onFileChange} />
            <button onClick = {this.fileUpload}>
                Upload 
                {progress &&
                    <span>
                    &nbsp;&nbsp;
                    ... {progress}
                    </span>
                }
            </button>
            {
                message &&
                <div className={status}>
                    {message}
                </div>                
            }
            </div>
        );
    }
}

export default FileUpload;
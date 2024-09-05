import React from 'react';
import { InboxOutlined, UploadOutlined, RightOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
import { useNavigate } from "react-router-dom";


const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const App = () => {
  const navigate = useNavigate();
  
  function handleClick() {
    navigate("/demand-list/DemandT");
  }
  return (
    <>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', display: 'flex', flexDirection: 'column', minHeight: '65vh' }}>
        <div style={{ flexGrow: 1 }}>
          <Dragger {...props} style={{ padding: '20px', borderRadius: '8px' }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined style={{ fontSize: '48px' }} />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
            </p>
          </Dragger>
          <Button
            type="primary"
            icon={<UploadOutlined />}
            onClick={() => document.querySelector('.ant-upload input[type="file"]').click()}
            style={{ marginTop: '20px', width: '100%' }}
          >
            Upload
          </Button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '40px' }}>
        <Button type="primary" onClick={handleClick}>
          Next
        </Button>
      </div>
    </>
  )
};

export default App;

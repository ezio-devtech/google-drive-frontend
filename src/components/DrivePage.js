import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UploadFile from './UploadFile';
import FileActions from './FileActions';

const DrivePage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/drive/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h1>Your Google Drive Files</h1>
      <UploadFile />
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name} ({file.mimeType}) - Last modified: {new Date(file.modifiedTime).toLocaleString()}
            <FileActions fileId={file.id} fileName={file.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrivePage;

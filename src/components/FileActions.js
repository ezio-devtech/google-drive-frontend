import React from 'react';
import axios from 'axios';

const FileActions = ({ fileId, fileName }) => {
  const handleDownload = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/drive/download/${fileId}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading file', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/drive/delete/${fileId}`);
      alert('File deleted successfully');
      window.location.reload(); // Reload to update the file list
    } catch (error) {
      console.error('Error deleting file', error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FileActions;

import React, { useRef, useCallback } from 'react';

const UploadArea = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && isValidFileType(file)) {
      onFileSelect(file);
    }
  };

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && isValidFileType(file)) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const isValidFileType = (file) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return validTypes.includes(file.type);
  };

  return (
    <div 
      className="upload-area"
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="upload-icon">📄</div>
      <div className="upload-text">Click to upload or drag and drop</div>
      <div className="upload-subtext">PDF, DOC, DOCX (Max 5MB)</div>
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default UploadArea;
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { IoIosCloudUpload } from 'react-icons/io';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import './styles.scss';

const ChoosePhotos = ({ formData, setFormData }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: files =>
      setFormData({ ...formData, photos: [...formData.photos, ...files] }),
  });

  return (
    <div className="choose-photos">
      <div className="label">Upload high quality images of your hotel:</div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <IoIosCloudUpload className="upload-icon" />
        <span>Drag & drop your images here or click to select</span>
      </div>
      <div className="image-list">
        {formData.photos.map(file => (
          <div className="image-item" key={file.lastModified}>
            <div className="filename">
              <AiOutlinePaperClip className="paper-clip-icon" />
              <span>{file.path}</span>
            </div>
            <button
              type="button"
              className="remove"
              onClick={() =>
                setFormData({
                  ...formData,
                  photos: formData.photos.filter(
                    item => item.lastModified !== file.lastModified
                  ),
                })
              }
            >
              <FiTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoosePhotos;

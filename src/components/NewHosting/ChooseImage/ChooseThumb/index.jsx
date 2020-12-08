/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { IoIosCloudUpload } from 'react-icons/io';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import './styles.scss';

const ChooseThumb = ({ formData, setFormData }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: files => setFormData({ ...formData, thumbnail: files.pop() }),
  });

  return (
    <div className="choose-photos choose-thumb">
      <div className="label">Choose one image of your hotel for thumbnail:</div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <IoIosCloudUpload className="upload-icon" />
        <span>Drag & drop your image here or click to select</span>
      </div>
      <div className="image-list">
        {formData.thumbnail && (
          <div className="image-item" key={formData.thumbnail.lastModified}>
            <div className="filename">
              <AiOutlinePaperClip className="paper-clip-icon" />
              <span>{formData.thumbnail.path}</span>
            </div>
            <button
              type="button"
              className="remove"
              onClick={() => setFormData({ ...formData, thumbnail: null })}
            >
              <FiTrash />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseThumb;

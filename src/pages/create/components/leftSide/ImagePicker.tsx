import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';

const ImagePicker: React.FC<{ handleOnChange: any }> = ({ handleOnChange }) => {
  const maxSize = 2 * 1024 * 1024;
  const dispatch = useDispatch();
  // Handle when user drop an image
  const onDrop = React.useCallback(
    (acceptedFiles: any, rejectedFiles: any) => {
      // Handle Rejected Files
      if (rejectedFiles.length > 0) {
        alert('File size exceeds 2MB.');
      }

      // Handle Accepted Files
      acceptedFiles.forEach((file: any) => {
        const reader = new FileReader();

        reader.onload = () => {
          const base64 = reader.result;

          dispatch(handleOnChange(base64));
        };

        reader.readAsDataURL(file);
      });
    },
    [handleOnChange, dispatch]
  );

  // Init A Drop Zone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: maxSize,
    accept: {
      'image/jpeg': ['.jpeg', '.png'],
    },
  });

  return (
    <div className="w-full h-full">
      <div
        {...getRootProps({
          className:
            'dropzone text-center w-full h-full  flex items-center justify-center',
        })}
      >
        <input {...getInputProps()} />
        {!isDragActive && <p className="text-gray-400">Drop Your Image Here</p>}
      </div>
    </div>
  );
};

export default ImagePicker;

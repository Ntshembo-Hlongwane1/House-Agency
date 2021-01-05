import { UploadApiOptions, v2 } from 'cloudinary';
import { config } from 'dotenv';
config();

const cloudinary = v2;

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

export const cloudinaryImageUploadMethod = async (file: string) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(file, { folder: '/properties' }, (error, response) => {
      if (error) {
        return 'Failed to upload image';
      }
      resolve({
        image_url: response?.secure_url
      });
    });
  });
};

import Api from '@/services/api';

export const uploadImage = (fileToUpload: File) => {
  const formData = new FormData();
  formData.append('image', fileToUpload);
  return Api.uploadImage(formData);
};

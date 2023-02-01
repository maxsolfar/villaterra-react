import axios from "axios";

export const uploadImageCloudinary = async (e) => {
  const files = e.target.files;
  const data = new FormData();
  data.append('file', files[0]);
  data.append('upload_preset', 'villaterra');
  const res = await axios.post(
    'https://api.cloudinary.com/v1_1/dr93y7mmk/image/upload',
    data
  );
  return res.data.secure_url;
};
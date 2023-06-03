import imageCompression from 'browser-image-compression';
import * as htmlToImage from 'html-to-image';
import axios from 'axios';

export default class UploadImage {
  imageFile?: any;

  // url for the site image
  mainImageUrl?: string;

  imgUrl?: string;

  constructor(public nodeDiv: any) {}

  convertBase64ToFileImage(base64Image: any, filename: any) {
    const arr = base64Image.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  // compress Image

  async compressImage() {
    const image64 = await htmlToImage.toPng(this.nodeDiv);
    const file: any = this.convertBase64ToFileImage(image64, 'image.png');

    const options = {
      initialQuality: 0.6,
    };

    this.imageFile = await imageCompression(file, options);

    return this.imageFile;
  }

  // Send Request
}

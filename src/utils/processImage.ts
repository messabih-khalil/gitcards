import imageCompression from 'browser-image-compression';
import * as htmlToImage from 'html-to-image';
import Resizer from 'react-image-file-resizer';
export default class ProcessImage {
  imageFile?: any;

  // url for the site image
  mainImageUrl?: string;

  imgUrl?: string;

  constructor(public nodeDiv: any, public size: number) {}

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

  // Resized Image
  resizeFile(file: any): any {
    return new Promise(resolve => {
      Resizer.imageFileResizer(
        file,
        this.size,
        this.size,
        'PNG',
        100,
        0,
        uri => {
          resolve(uri);
        },
        'file',
        this.size,
        this.size,
      );
    });
  }
  // compress Image

  async compressImage() {
    const image64 = await htmlToImage.toPng(this.nodeDiv);

    const file: any = this.convertBase64ToFileImage(image64, 'image.png');

    const options = {
      initialQuality: 1,
      maxWidthOrHeight: 405,
    };
    const resizedImage = await this.resizeFile(file);
    console.log(resizedImage);

    this.imageFile = await imageCompression(resizedImage, options);

    return this.imageFile;
  }
}

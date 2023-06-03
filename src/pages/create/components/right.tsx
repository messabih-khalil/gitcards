import React from 'react';
import CodeBlock from './rightSide/CodeBlock';
import ProcessImage from '@/utils/processImage';
import GenerateButton from './rightSide/GenerateButton';
import { setGenerateUrl, setIsLoading } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import Card from './rightSide/card/Card';
import MColorPicker from './rightSide/card/ColorPicker';
import { motion } from 'framer-motion';
const RightSide = () => {
  const dispatch = useDispatch();
  const {
    cardColor,
    titleColor,
    stackBorderColor,
    stackBackgroundColor,
    stackTextColor,
  } = useSelector((state: any) => state.card);
  // Get Data From State To Save It Localy when user leave the page
  React.useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Save your configuration data to local storage
      localStorage.setItem(
        'config',
        JSON.stringify({
          cardColor,
          titleColor,
          stackBorderColor,
          stackBackgroundColor,
          stackTextColor,
        })
      );
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [
    cardColor,
    titleColor,
    stackBorderColor,
    stackBackgroundColor,
    stackTextColor,
  ]);

  const removeDivs = () => {
    const cardBody = document.getElementById('cardBody');

    if (cardBody) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = cardBody.innerHTML;

      const colorRecorderDivs = tempDiv.querySelectorAll('#colorRecorderDiv');
      colorRecorderDivs.forEach(div => div.remove());

      const boilerPlateElement = document.getElementById('handleDiv');
      if (boilerPlateElement) {
        boilerPlateElement.innerHTML = tempDiv.innerHTML;
        boilerPlateElement.style.background = cardBody.style.background;

        const classNames = Array.from(cardBody.classList);
        boilerPlateElement.classList.add(...classNames);
      }

      return boilerPlateElement;
    }

    return null;
  };

  // Upload Image
  const upload = async () => {
    dispatch(setIsLoading(true));
    const imageUploader = new ProcessImage(removeDivs() as HTMLElement);
    // Convert div into image and compress it
    const cmprsImage = await imageUploader.compressImage();

    // Get The Signateur and timestamp for authorize the request

    const { signature, timestamp } = await fetch('/api/upload', {
      method: 'POST',
    }).then(r => r.json());

    // Fill The Form Data For The Request
    const formData = new FormData();
    formData.append('file', cmprsImage);
    formData.append(
      'api_key',
      process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string
    );
    formData.append('signature', signature);
    formData.append('timestamp', timestamp);
    formData.append(
      'folder',
      process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER as string
    );

    // Upload Image into Cloud
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;

    const imageData = await fetch(url, {
      method: 'POST',
      body: formData,
    }).then(r => r.json());

    // Dispatch Actions
    dispatch(setGenerateUrl(imageData.url));
    dispatch(setIsLoading(false));
  };

  return (
    <>
      <section className="bg-gray-50 border-l-2 border-gray-100 w-full h-[1000px] lg:h-full  md:my-0 md:lg:w-7/12 py-5 px-5 overflow-scroll flex items-center justify-center font-mono relative">
        {/* Card */}
        <motion.div
          className="z-10 scale-75  sm:scale-125  top-[300px] absolute"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
            },
          }}
        >
          <Card />
        </motion.div>

        {/* Code Block */}
        <div className="absolute w-[90%] lg:w-[80%] top-11 z-0">
          <CodeBlock />
        </div>
        {/* Generate Button */}
        <GenerateButton handleClick={upload}>Get Card</GenerateButton>
        {/* Color Picker */}
        <div className="absolute scale-[0.8] xs:scale-[.9] z-50 bottom-[500px] right-80">
          <MColorPicker />
        </div>

        <div className="scale-0">
          <div id="handleDiv"></div>
        </div>
      </section>
    </>
  );
};

export default RightSide;

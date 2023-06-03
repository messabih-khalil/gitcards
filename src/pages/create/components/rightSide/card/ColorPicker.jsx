import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { setClosePicker, setCurrentColor } from '@/store';
const MColorPicker = ({}) => {
  const dispatch = useDispatch();
  const { type, currentColor, handleChangeColor } = useSelector(
    state => state.colorPicker
  );

  // Close The Picker When Click Outside

  const pickerRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = event => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        event.target.id !== 'colorRecorderDiv'
      ) {
        dispatch(setClosePicker(0));
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [dispatch]);

  // Color Picker : Two Type Of Them
  const picker = () => {
    if (type === 1) {
      return (
        <div className="p-2">
          <ColorPicker
            value={currentColor}
            onChange={value => {
              // Dispatch for the item color
              dispatch({
                type: handleChangeColor,
                payload: value,
              });
              // Dispatch for the currentColor in the pickerColor State
              dispatch(setCurrentColor(value));
            }}
            hidePresets={true}
            hideControls={true}
          />
        </div>
      );
    } else if (type == 2) {
      return (
        <div className="p-2">
          <ColorPicker
            value={currentColor}
            onChange={value => {
              // Dispatch for the item color
              dispatch({
                type: handleChangeColor,
                payload: value,
              });
              // Dispatch for the currentColor in the pickerColor State
              dispatch(setCurrentColor(value));
            }}
            hidePresets={true}
            hideEyeDrop={true}
            hideAdvancedSliders={true}
            hideColorGuide={true}
            hideInputType={true}
          />
        </div>
      );
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: 'red',
          background: '#fff',
          display: 'inline-block',
          borderRadius: '8px',
          boxShadow: '0 0 6px rgba(0,0,0,.25)',

          position: 'relative',
          fontFamily: 'arial',
          transform: 'scale()',
          position: 'absolute',
          zIndex: 100,
        }}
      >
        <div ref={pickerRef}>{picker()}</div>
      </div>
    </div>
  );
};

export default MColorPicker;

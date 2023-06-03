import { ColorPickerData } from '@/types';
import { createSlice } from '@reduxjs/toolkit';



const colorPickerSlice = createSlice({
  name: 'colorPicker',
  initialState: {
    type: 0,
    currentColor: '#000',
    handleChangeColor: '',
  } as ColorPickerData,
  reducers: {
    setColorPickerConfig(state, action) {
      state.type = action.payload.type;
      state.currentColor = action.payload.currentColor;
      state.handleChangeColor = action.payload.handleChangeColor;
    },
    setClosePicker(state, action) {
      state.type = action.payload;
    },
    setCurrentColor(state, action) {
      state.currentColor = action.payload;
    },
  },
});

export const { setColorPickerConfig, setClosePicker, setCurrentColor } =
  colorPickerSlice.actions;

export const colorPickerReducer = colorPickerSlice.reducer;

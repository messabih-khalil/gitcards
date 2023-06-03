import { configureStore } from '@reduxjs/toolkit';
import { cardInfoReducer } from './slices/cardInfoSlice';
import { colorPickerReducer } from './slices/colorPickerSlice';

const store = configureStore({
  reducer: {
    card: cardInfoReducer,
    colorPicker: colorPickerReducer,
  },
});

export { store };

export * from './slices/cardInfoSlice';
export * from './slices/colorPickerSlice';
export * from './thunks/getCardUrl';

import { CardInfo } from '@/types';
import { createSlice } from '@reduxjs/toolkit';


const cardInfoSlice = createSlice({
  name: 'card',
  initialState: {
    image: '',
    title: '',
    stack: '',
    urlLink: '',
    cardColor: '#1E2022',
    titleColor: '#F0F5F9',
    stackBorderColor: '#52616B',
    stackBackgroundColor: '#52616B',
    stackTextColor: '#F0F5F9',
    generatedUrl: '',
    isLoading: false,
    isHorizontal: false,
  } as CardInfo,
  reducers: {
    setCardColor(state, action) {
      state.cardColor = action.payload;
    },
    setTitleColor(state, action) {
      state.titleColor = action.payload;
    },
    setStackBorderColor(state, action) {
      state.stackBorderColor = action.payload;
    },
    setStackBackgroundColor(state, action) {
      state.stackBackgroundColor = action.payload;
    },
    setStackTextColor(state, action) {
      state.stackTextColor = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setStack(state, action) {
      state.stack = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    setUrlLink(state, action) {
      state.urlLink = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsHorizontal(state, action) {
      state.isHorizontal = action.payload;
    },
    setConfigFromLocalState(state, action) {
      if (action.payload) {
        state.cardColor = action.payload.cardColor;
        state.titleColor = action.payload.titleColor;
        state.stackBorderColor = action.payload.stackBorderColor;
        state.stackBackgroundColor = action.payload.stackBackgroundColor;
        state.stackTextColor = action.payload.stackTextColor;
      }
    },
    setGenerateUrl(state, action) {
      state.generatedUrl = action.payload;
    },
  },

  // Set Simplify Generated Image Url
  // extraReducers(builder) {
  //   builder.addCase(getCardUrl.fulfilled, (state, action) => {
  //     state.generatedUrl = action.payload;
  //     state.isLoading = false;
  //   });
  // },
});

export const {
  setCardColor,
  setTitleColor,
  setStackBorderColor,
  setStackBackgroundColor,
  setStackTextColor,
  setTitle,
  setStack,
  setImage,
  setUrlLink,
  setIsLoading,
  setIsHorizontal,
  setConfigFromLocalState,
  setGenerateUrl
} = cardInfoSlice.actions;

export const cardInfoReducer = cardInfoSlice.reducer;

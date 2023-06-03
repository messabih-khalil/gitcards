import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCardUrl = createAsyncThunk(
  'card/getImageUrl',
  async (url: string) => {
    const response = await fetch('/api/get-link', {
      method: 'POST',
      body: JSON.stringify({
        url: url,
      }),
    });

    const data = await response.json();
    return data.imageUrl;
  }
);

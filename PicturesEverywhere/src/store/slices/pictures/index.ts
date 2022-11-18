import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PictureVM} from '../../model/PictureVM';

export interface PicturesState {
  pictures: PictureVM[];
  selectedPicture?: PictureVM;
}

const name = 'picturesState';
const initialState: PicturesState = {
  pictures: [],
};
const reducers = {
  pushPicture: (state: PicturesState, action: PayloadAction<PictureVM>) => {
    state.pictures = [...state.pictures, action.payload];
  },
  selectPicture: (state: PicturesState, action: PayloadAction<PictureVM>) => {
    state.selectedPicture = action.payload;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

// Actions
export const {pushPicture, selectPicture} = slice.actions;
// Selectors
export const picturesSelector = (state: {picturesState: PicturesState}) =>
  state.picturesState.pictures;

export const pictureSelector = (state: {picturesState: PicturesState}) =>
  state.picturesState.selectedPicture;

// Reducer
export default slice.reducer;

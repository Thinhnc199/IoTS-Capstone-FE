import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Trainer {
  id: string;
  name: string;
  specialty: string;
  available: boolean;
}

interface TrainerState {
  trainers: Trainer[];
}

const initialState: TrainerState = {
  trainers: [],
};

const trainerSlice = createSlice({
  name: 'trainers',
  initialState,
  reducers: {
    setTrainers: (state, action: PayloadAction<Trainer[]>) => {
      state.trainers = action.payload;
    },
    updateTrainer: (state, action: PayloadAction<Trainer>) => {
      const index = state.trainers.findIndex((trainer) => trainer.id === action.payload.id);
      if (index !== -1) {
        state.trainers[index] = action.payload;
      }
    },
  },
});

export const { setTrainers, updateTrainer } = trainerSlice.actions;
export default trainerSlice.reducer;

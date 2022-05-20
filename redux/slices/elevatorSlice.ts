import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IelevatorSliceInitial {
  one: {
    people: Array<any>;
    up: boolean;
    down: boolean;
  };
  two: {
    people: Array<any>;
    up: boolean;
    down: boolean;
  };
  three: {
    people: Array<any>;
    up: boolean;
    down: boolean;
  };
  four: {
    people: Array<any>;
    up: boolean;
    down: boolean;
  };
  five: {
    people: Array<any>;
    up: boolean;
    down: boolean;
  };
  six: {
    people: Array<any>;
    up: boolean;
    down: boolean;
  };
  currentFloor: number;
  ascensorPeople: Array<any>;
}

const initialState: IelevatorSliceInitial = {
  one: {
    people: [],
    up: false,
    down: false,
  },
  two: {
    people: [],
    up: false,
    down: false,
  },
  three: {
    people: [],
    up: false,
    down: false,
  },
  four: {
    people: [],
    up: false,
    down: false,
  },
  five: {
    people: [],
    up: false,
    down: false,
  },
  six: {
    people: [],
    up: false,
    down: false,
  },
  currentFloor: 1,
  ascensorPeople: [],
};

export const elevatorSlice = createSlice({
  name: "elevator",
  initialState,
  reducers: {
    setFloor: (state, action: PayloadAction<number>) => {
      state.currentFloor = action.payload;
    },
    setPeopleToFloorOne: (
      state,
      action: PayloadAction<{ people: Array<any> }>
    ) => {
      state.one.people = action.payload.people;
    },
    setPeopleToFloorTwo: (
      state,
      action: PayloadAction<{ people: Array<any> }>
    ) => {
      state.two.people = action.payload.people;
    },
    setPeopleToFloorThree: (
      state,
      action: PayloadAction<{ people: Array<any> }>
    ) => {
      state.three.people = action.payload.people;
    },
    setPeopleToFloorFour: (
      state,
      action: PayloadAction<{ people: Array<any> }>
    ) => {
      state.four.people = action.payload.people;
    },
    setPeopleToFloorFive: (
      state,
      action: PayloadAction<{ people: Array<any> }>
    ) => {
      state.five.people = action.payload.people;
    },
    setPeopleToFloorSix: (
      state,
      action: PayloadAction<{ people: Array<any> }>
    ) => {
      state.six.people = action.payload.people;
    },
    setUpToFloorOne: (state, action: PayloadAction<boolean>) => {
      state.one.up = action.payload;
    },
    setDownToFloorOne: (state, action: PayloadAction<boolean>) => {
      state.one.down = action.payload;
    },
    setUpToFloorTwo: (state, action: PayloadAction<boolean>) => {
      state.two.up = action.payload;
    },
    setDownToFloorTwo: (state, action: PayloadAction<boolean>) => {
      state.two.down = action.payload;
    },
    setUpToFloorThree: (state, action: PayloadAction<boolean>) => {
      state.three.up = action.payload;
    },
    setDownToFloorThree: (state, action: PayloadAction<boolean>) => {
      state.three.down = action.payload;
    },
    setUpToFloorFour: (state, action: PayloadAction<boolean>) => {
      state.four.up = action.payload;
    },
    setDownToFloorFour: (state, action: PayloadAction<boolean>) => {
      state.four.down = action.payload;
    },
    setUpToFloorFive: (state, action: PayloadAction<boolean>) => {
      state.five.up = action.payload;
    },
    setDownToFloorFive: (state, action: PayloadAction<boolean>) => {
      state.five.down = action.payload;
    },
    setUpToFloorSix: (state, action: PayloadAction<boolean>) => {
      state.six.up = action.payload;
    },
    setDownToFloorSix: (state, action: PayloadAction<boolean>) => {
      state.six.down = action.payload;
    },
    setElevatorPeople: (state, action: PayloadAction<Array<any>>) => {
      state.ascensorPeople = action.payload;
    },
  },
});

export const {
  setDownToFloorFive,
  setDownToFloorFour,
  setDownToFloorOne,
  setDownToFloorSix,
  setDownToFloorThree,
  setDownToFloorTwo,
  setFloor,
  setPeopleToFloorFive,
  setPeopleToFloorFour,
  setPeopleToFloorOne,
  setPeopleToFloorSix,
  setPeopleToFloorThree,
  setPeopleToFloorTwo,
  setUpToFloorFive,
  setUpToFloorFour,
  setUpToFloorOne,
  setUpToFloorSix,
  setUpToFloorThree,
  setUpToFloorTwo,
} = elevatorSlice.actions;

export default elevatorSlice.reducer;

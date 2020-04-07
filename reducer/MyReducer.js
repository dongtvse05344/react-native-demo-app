export const myReducer = (state, action) => {
  console.log(action.type);
  console.log(action.name);
  switch (action.type) {
    case UPDATE_NAME:
      state.name = action.name;
      return state;
    default:
      return state;
  }
};

export const initState = {
  name: "",
};

export const UPDATE_NAME = "UPDATE_NAME";

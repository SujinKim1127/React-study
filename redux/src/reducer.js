const _SAVE = "TEXT_SAVE";
const _PLUS = "NUMBER_PLUS";

export const Save = (word) => ({
  type: _SAVE,
  word: word,
});

export const Plus = (number) => ({
  type: _PLUS,
  number: number++,
});

const initialState = {
  number: 1,
  word: "",
  selectData: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case _PLUS:
      console.log(state.number);
      return {
        number: state.number + 1,
      };
    case _SAVE:
      console.log("SAVE");
      return {
        word: state.word,
      };
    default:
      return state;
  }
}

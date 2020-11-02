export function* increaseCounter() {
  try {
    // Dispatch Action To Redux Store
    console.log('Sup biatch');
  }
  catch (error) {
    console.log(error);
  }
};
// Worker: Decrease Counter
export function* decreaseCounter() {
  try {
    // Dispatch Action To Redux Store
    console.log('Sup biatch from dec');
  }
  catch (error) {
    console.log(error);
  }
};
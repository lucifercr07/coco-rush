import * as actions from './actions'

export const decreaseCounter = () => {
  console.log('in action creator')
  return {
  type: actions.DECREASE_COUNTER,
  value: 1,
};}

export const increaseCounter = () => ({
  type: actions.INCREASE_COUNTER,
  value: 1,
});

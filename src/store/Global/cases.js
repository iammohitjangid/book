import { loadingState } from './types';

function pending(state) {
  state.loading = true;
}

function rejected(state) {
  state.loading = false;
}

export { pending, rejected };

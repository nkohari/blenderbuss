interface SmoothiesLoadingAction {
  type: 'SMOOTHIES_LOADING';
}

export const smoothiesLoading = (): SmoothiesLoadingAction => ({
  type: 'SMOOTHIES_LOADING',
});

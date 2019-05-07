interface ImagesLoadingAction {
  type: 'IMAGES_LOADING';
}

export const imagesLoading = (): ImagesLoadingAction => ({
  type: 'IMAGES_LOADING',
});

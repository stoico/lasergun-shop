export const initialiseComments = (commentData) => {
  return {
    type: 'INITILIASE_FROM_LOCAL_STORAGE',
    ...commentData
  }
}

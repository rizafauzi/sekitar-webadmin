/* eslint-disable import/prefer-default-export */

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('id', {
    dateStyle: 'long',
    timeStyle: undefined,
    timeZone: 'Asia/Jakarta'
  }).format(new Date(date))

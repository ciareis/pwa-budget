import localforage from 'localforage'

const storageInstance = localforage.createInstance({
  name: import.meta.env.VITE_STORAGE_KEY,
  driver: localforage.LOCALSTORAGE
})

export default storageInstance

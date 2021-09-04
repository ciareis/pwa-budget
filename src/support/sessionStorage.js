import localforage from 'localforage'

const storageInstance = localforage.createInstance({
  name: import.meta.env.VITE_STORAGE_KEY,
  driver: localforage.SESSIONSTORAGE
})

export default storageInstance

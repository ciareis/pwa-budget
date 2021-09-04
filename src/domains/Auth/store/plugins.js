import storageInstance from '@/support/localStorage.js'

const saveTokenUser = store => {
  store.subscribe(async (mutation, state) => {
    const mutationType = mutation.type

    if (mutationType === 'auth/setToken') {
      storageInstance.setItem(
        'token',
        mutation.payload
      )
    }

    if (mutationType === 'auth/clearToken') {
      await storageInstance.removeItem('token')
    }
  })
}

export default [
  saveTokenUser
]

const getTitle = route => {
  const { title } = route.meta
  if (!title) {
    return ''
  }
  return typeof title === 'function'
    ? title.call(vm)
    : title
}

const setTitle = route => {
  const title = getTitle(route)

  if (title) {
    document.title = title
  }
}

const beforeEach = store => (to, _from, next) => {
  const requireLogin = to.meta.auth || false
  const guestOnly = to.meta.guest || false
  if (!requireLogin) {
    setTitle(to)
    next()

    return

  }
  store
    .dispatch('auth/checkUserToken')
    .then(() => {
      if (guestOnly) {
        next({
          name: 'dashboard.home'
        })

        return
      }
      next()
    })
    .catch(() => {
      if (guestOnly) {
        next()

        return
      }
      next({
        name: 'auth.login'
      })
    })
}

export default beforeEach

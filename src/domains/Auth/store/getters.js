import isEmpty from 'lodash/isEmpty'

export const isAuthenticate = state => !isEmpty(state.token)

export const hasUser = state => !isEmpty(state.user)

export const userName = ({ user }) => {
  if (isEmpty(user)) {
    return ''
  }

  return user.name || ''
}

export const userFirstName = state => userName(state).split(' ')[0]

export const user = ({user}) => user

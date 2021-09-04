import { get, mapValues, first, values } from 'lodash'

const error = e => {
  const currentErrors = get(e, 'response.data.errors', {})

  const message = get(e, 'response.data.message', get(e, 'response.data.meta.message'))

  const statusCode = get(e, 'response.status')

  const errors = mapValues(currentErrors, (item) => first(item))
  const firstError = first(values(errors)) || message

  return {
    statusCode,
    errors,
    firstError,
    message
  }
}

export default error

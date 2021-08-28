import { aplloClient as graphql } from './graphql'

export default (app) => {
  app.config.globalProperties.$graphql = graphql
}
import { aplloClient as graphql } from './graphql'
import app from './app'

export default (vue) => {
  console.log({ app })
  vue.config.globalProperties.$graphql = graphql
  vue.config.globalProperties.$app = app
}

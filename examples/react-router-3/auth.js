import locationHelperBuilder from 'redux-auth-wrapper/history3/locationHelper'
import {
  connectedRouterRedirect
} from 'redux-auth-wrapper/history3/redirect'

const locationHelper = locationHelperBuilder({})

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.user.data !== null,
  wrapperDisplayName: 'UserIsAuthenticated'
})


export const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/tony',
  allowRedirectBack: false,
  // Want to redirect the user when they are done loading and authenticated
  authenticatedSelector: state => state.user.data === null,
  wrapperDisplayName: 'UserIsNotAuthenticated'
})

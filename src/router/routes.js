// import store from '@state/store';
import DashboardLayout from '@pages/Dashboard/Layout.vue'
import AuthLayout from '@pages/Auth/Layout.vue'
import Widgets from '@pages/Dashboard/Widgets.vue'

// GeneralViews
import NotFound from '@pages/General/NotFoundPage.vue'

// Page Headers
import DefaultHeader from '@pages/Dashboard/DefaultHeader'
import SweetAlertHeader from '@pages/Dashboard/Components/Headers/SweetAlertHeader'
import VectorMapsHeader from '@pages/Dashboard/Maps/VectorMapsHeader'

// Dashboard pages
import Dashboard from '@pages/Dashboard/Dashboard.vue'

// Pages
const User = () => import('@pages/Dashboard/Users/UserProfile.vue')
const Pricing = () => import('@pages/Dashboard/Pricing.vue')
const TimeLine = () => import('@pages/Dashboard/TimeLinePage.vue')
const GameRsvp = () => import('@pages/Dashboard/Games/Rsvp.vue')
const Login = () => import('@pages/Auth/Login.vue')
const Register = () => import('@pages/Auth/Register.vue')
const Lock = () => import('@pages/Auth/Lock.vue')

// Components pages
const Buttons = () => import('@pages/Dashboard/Components/Buttons.vue')
const GridSystem = () => import('@pages/Dashboard/Components/GridSystem.vue')
const Panels = () => import('@pages/Dashboard/Components/Panels.vue')
const SweetAlert = () => import('@pages/Dashboard/Components/SweetAlert.vue')
const Notifications = () =>
  import('@pages/Dashboard/Components/Notifications.vue')
const Icons = () => import('@pages/Dashboard/Components/Icons.vue')
const Typography = () => import('@pages/Dashboard/Components/Typography.vue')

// Forms pages
const RegularForms = () => import('@pages/Dashboard/Forms/RegularForms.vue')
const ExtendedForms = () => import('@pages/Dashboard/Forms/ExtendedForms.vue')
const ValidationForms = () =>
  import('@pages/Dashboard/Forms/ValidationForms.vue')
const Wizard = () => import('@pages/Dashboard/Forms/Wizard.vue')

// TableList pages
const RegularTables = () => import('@pages/Dashboard/Tables/RegularTables.vue')
const ExtendedTables = () =>
  import('@pages/Dashboard/Tables/ExtendedTables.vue')
const PaginatedTables = () =>
  import('@pages/Dashboard/Tables/PaginatedTables.vue')

// Maps pages
const GoogleMaps = () => import('@pages/Dashboard/Maps/GoogleMaps.vue')
const FullScreenMap = () => import('@pages/Dashboard/Maps/FullScreenMap.vue')
const VectorMaps = () => import('@pages/Dashboard/Maps/VectorMaps.vue')

let componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  name: 'Components',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      components: { default: Buttons, header: DefaultHeader },
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      components: { default: GridSystem, header: DefaultHeader },
    },
    {
      path: 'panels',
      name: 'Panels',
      components: { default: Panels, header: DefaultHeader },
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      components: { default: SweetAlert, header: SweetAlertHeader },
    },
    {
      path: 'notifications',
      name: 'Notifications',
      components: { default: Notifications, header: DefaultHeader },
    },
    {
      path: 'icons',
      name: 'Icons',
      components: { default: Icons, header: DefaultHeader },
    },
    {
      path: 'typography',
      name: 'Typography',
      components: { default: Typography, header: DefaultHeader },
    },
  ],
}

let formsMenu = {
  path: '/forms',
  component: DashboardLayout,
  redirect: '/forms/regular',
  name: 'Forms',
  children: [
    {
      path: 'regular',
      name: 'Regular Forms',
      components: { default: RegularForms, header: DefaultHeader },
    },
    {
      path: 'extended',
      name: 'Extended Forms',
      components: { default: ExtendedForms, header: DefaultHeader },
    },
    {
      path: 'validation',
      name: 'Validation Forms',
      components: { default: ValidationForms, header: DefaultHeader },
    },
    {
      path: 'wizard',
      name: 'Wizard',
      components: { default: Wizard, header: DefaultHeader },
    },
  ],
}

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  redirect: '/table-list/regular',
  name: 'Tables',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      components: { default: RegularTables, header: DefaultHeader },
    },
    {
      path: 'extended',
      name: 'Extended Tables',
      components: { default: ExtendedTables, header: DefaultHeader },
    },
    {
      path: 'paginated',
      name: 'Paginated Tables',
      components: { default: PaginatedTables, header: DefaultHeader },
    },
  ],
}

let mapsMenu = {
  path: '/maps',
  component: DashboardLayout,
  name: 'Maps',
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      components: { default: GoogleMaps, header: DefaultHeader },
    },
    {
      path: 'full-screen',
      name: 'Full Screen Map',
      meta: {
        hideContent: true,
        hideFooter: true,
      },
      components: { default: FullScreenMap },
    },
    {
      path: 'vector-map',
      name: 'Vector Map',
      components: { default: VectorMaps, header: VectorMapsHeader },
    },
  ],
}

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  name: 'Pages',
  redirect: '/pages/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      components: { default: User, header: DefaultHeader },
    },
  ],
}

let authPages = {
  path: '/',
  component: AuthLayout,
  name: 'Authentication',
  children: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
    },
    {
      path: '/lock',
      name: 'Lock',
      component: Lock,
    },
  ],
}

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    name: 'Dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        components: { default: Dashboard, header: DefaultHeader },
      },
      {
        path: 'games',
        name: 'Games',
        components: { default: GameRsvp, header: DefaultHeader },
      },
      {
        path: 'notifications',
        name: 'Notifications',
        components: { default: TimeLine, header: DefaultHeader },
      },
      {
        path: 'widgets',
        name: 'Widgets',
        components: { default: Widgets, header: DefaultHeader },
      },
    ],
  },
  { path: '*', component: NotFound },
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  authPages,
]

export default routes

// TODO: Merge the above routes in defaultroutes
// const defaultRoutes = [
//   {
//     path: '/',
//     name: 'home',
//     component: () => lazyLoadView(import('@views/home')),
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => lazyLoadView(import('@views/login')),
//     beforeEnter(routeTo, routeFrom, next) {
//       // If the user is already logged in
//       if (store.getters['auth/loggedIn']) {
//         // Redirect to the home page instead
//         next({ name: 'home' })
//       } else {
//         // Continue to the login page
//         next()
//       }
//     },
//   },
//   {
//     path: '/profile',
//     name: 'profile',
//     component: () => lazyLoadView(import('@views/profile')),
//     meta: {
//       authRequired: true,
//     },
//     props: route => ({ user: store.state.auth.currentUser }),
//   },
//   {
//     path: '/profile/:username',
//     name: 'username-profile',
//     component: () => lazyLoadView(import('@views/profile')),
//     meta: {
//       authRequired: true,
//     },
//     beforeEnter(routeTo, routeFrom, next) {
//       store
//         // Try to fetch the user's information by their username
//         .dispatch('users/fetchUser', { username: routeTo.params.username })
//         .then(user => {
//           // Add the user to the route params, so that it can
//           // be provided as a prop for the view component below.
//           routeTo.params.user = user
//           // Continue to the route.
//           next()
//         })
//         .catch(() => {
//           // If a user with the provided username could not be
//           // found, redirect to the 404 page.
//           next({ name: '404', params: { resource: 'User' } })
//         })
//     },
//     // Set the user from the route params, once it's set in the
//     // beforeEnter route guard.
//     props: route => ({ user: route.params.user }),
//   },
//   {
//     path: '/logout',
//     name: 'logout',
//     meta: {
//       authRequired: true,
//     },
//     beforeEnter(routeTo, routeFrom, next) {
//       store.dispatch('auth/logOut')
//       const authRequiredOnPreviousRoute = routeFrom.matched.some(
//         route => route.meta.authRequired
//       )
//       // Navigate back to previous page, or home as a fallback
//       next(authRequiredOnPreviousRoute ? { name: 'home' } : { ...routeFrom })
//     },
//   },
//   {
//     path: '/404',
//     name: '404',
//     component: require('@views/404').default,
//     // Allows props to be passed to the 404 page through route
//     // params, such as `resource` to define what wasn't found.
//     props: true,
//   },
//   // Redirect any unmatched routes to the 404 page. This may
//   // require some server configuration to work in production:
//   // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
//   {
//     path: '*',
//     redirect: '404',
//   },
// ]

// // Lazy-loads view components, but with better UX. A loading view
// // will be used if the component takes a while to load, falling
// // back to a timeout view in case the page fails to load. You can
// // use this component to lazy-load a route with:
// //
// // component: () => lazyLoadView(import('@views/my-view'))
// //
// // NOTE: Components loaded with this strategy DO NOT have access
// // to in-component guards, such as beforeRouteEnter,
// // beforeRouteUpdate, and beforeRouteLeave. You must either use
// // route-level guards instead or lazy-load the component directly:
// //
// // component: () => import('@views/my-view')
// //
// function lazyLoadView(AsyncView) {
//   const AsyncHandler = () => ({
//     component: AsyncView,
//     // A component to use while the component is loading.
//     loading: require('@views/loading').default,
//     // A fallback component in case the timeout is exceeded
//     // when loading the component.
//     error: require('@views/timeout').default,
//     // Delay before showing the loading component.
//     // Default: 200 (milliseconds).
//     delay: 400,
//     // Time before giving up trying to load the component.
//     // Default: Infinity (milliseconds).
//     timeout: 10000,
//   })

//   return Promise.resolve({
//     functional: true,
//     render(h, { data, children }) {
//       // Transparently pass any props or children
//       // to the view component.
//       return h(AsyncHandler, data, children)
//     },
//   })
// }

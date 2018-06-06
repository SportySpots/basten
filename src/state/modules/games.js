import {query} from '../../graphql';
import {GAME_DETAILS} from '../../queries';

export const state = []

export const getters = {}

export const mutations = {
  CACHE_GAME(state, game) {
    const oldGameIndex = state.findIndex(g => g.uuid === game.uuid);
    if (oldGameIndex !== -1) {
      state.$set(oldGameIndex, game);
    } else {
      state.push(game)
    }
  },
}

export const actions = {
  async fetchGame({commit, state, rootState}, {uuid}) {
    const result = await query(GAME_DETAILS, { uuid })
    if ('errors' in result && result.errors.length > 0) {
      throw new Error(result.errors[0])
    }
    commit('CACHE_GAME', result.data.game)
    return result.data.game

    // // 1. Check if we already have the user as a current user.
    // const { currentUser } = rootState.auth
    // if (currentUser && currentUser.username === username) {
    //   return Promise.resolve(currentUser)
    // }
    //
    // // 2. Check if we've already fetched and cached the user.
    // const matchedUser = state.cached.find(user => user.name === username)
    // if (matchedUser) {
    //   return Promise.resolve(currentUser)
    // }
    //
    // // 3. Fetch the user from the API and cache it in case
    // //    we need it again in the future.
    // return axios.get(`/users/${username}`).then(response => {
    //   const user = response.data
    //   commit('CACHE_USER', user)
    //   return user
    // })
  },
}

export const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
export const LOCATION_CHANGE = 'router/ROUTE_CHANGED'
export const WINDOW_RESIZE = 'WINDOW_RESIZE'

const state = {
  sidebarOpened: false,
  obfuscatorActive: false,
  isMobile: false
}

const mutations = {
  [CLOSE_SIDEBAR] (state) {
    state.sidebarOpened = false
    state.obfuscatorActive = false
  },
  [OPEN_SIDEBAR] (state) {
    state.sidebarOpened = true
    state.obfuscatorActive = true
  },
  [LOCATION_CHANGE] (state) {
    state.sidebarOpened = false
    state.obfuscatorActive = false
  },
  [WINDOW_RESIZE] (state) {
    const { innerWidth } = window
    const isMobile = innerWidth > 1024
    state.isMobile = isMobile
    state.sidebarOpened = isMobile
  }
}

const actions = {
  openSidebar ({ commit }) {
    commit({ type: OPEN_SIDEBAR })
  },
  closeSidebar ({ commit }) {
    commit({ type: CLOSE_SIDEBAR })
  },
  handleResize ({ commit }) {
    commit({ type: WINDOW_RESIZE })
  }
}

export default {
  state,
  actions,
  mutations
}

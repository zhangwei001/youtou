/**
 * Created by wanghuan on 2016/7/21.
 */
import common from './common.js';
import checkoutState from './checkoutState.js';
import home from './home.js';


const debug = process.env.NODE_ENV !== 'production'

Vue.config.debug = debug;

export default new Vuex.Store({
    modules: {
      common,
      checkoutState,
      home
    },
  strict: debug,
})

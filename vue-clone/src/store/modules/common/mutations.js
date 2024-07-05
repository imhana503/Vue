import { createStore } from 'vuex';
import * as t from './types';

const mutations = {
  [t.SET_NAVIGATION]: (state, b) => {
    if (!b) {
      state.privacyPolicyPop = false;
    }
    state.navigation = b;
  },
  [t.SET_RECRUIT_POP]: (state, b) => {
      if(b){
        state.navigation = false;
      }
      state.recruitPop = b;
  },
  [t.SET_PRIVACY_POLICY_POP]: (state, b) => {
    state.privacyPolicyPop = b;
  },

    [t.SET_INTRO](state, b) {
      state.introVal = b;
    }
    
  };
  
export default mutations;
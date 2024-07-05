import * as t from "./types";

export default {
    async setPrevTit({ commit }, b) {
        commit(t.SET_PREV_TIT, b);
        return b;
      },

    setNavigation({ commit }, b) {
        return commit(t.SET_NAVIGATION, b);
    },

    setPrivacyPolicyPop({ commit }, b) {
    return commit(t.SET_PRIVACY_POLICY_POP, b);
    },
    async setRecruitPop({ commit, dispatch, state }, b) {
     
        if(b){
            // await dispatch("setPrevTit", document.title);
            // document.title = "채용문의 | 플립커뮤니케이션즈";
        }
        return commit(t.SET_RECRUIT_POP, b)
    },
}

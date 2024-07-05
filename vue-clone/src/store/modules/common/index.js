import actions from './actions';
import mutations from './mutations';

const state = {
    privacyPolicyPop:false,
    navigation: false,
    pdsPop: false,
    recruitPop:false,
    readyAction:true,
    loading:false,
    introVal:'end'
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
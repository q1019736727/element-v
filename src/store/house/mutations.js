
import {RRDUCELIST,ADDLIST} from '@/store/Type.js'

const mutations = {
  //删除数据
  [RRDUCELIST](state, payload) {
    state.tableDta.splice(0, 1)
  },
  //增加数据
  [ADDLIST](state,payload){
    state.tableDta.push(payload)
  }
}
export default mutations

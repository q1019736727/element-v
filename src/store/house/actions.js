
import {RRDUCELIST,ADDLIST} from '@/store/Type.js'

const actions = {
  reduceListAction({commit,state},index){
    return new Promise((resolve, reject) => {
      commit(RRDUCELIST,index)
      resolve()
    })
  },
  addListAction({state,commit},data){
    commit(ADDLIST,data)
  }
}

export default actions

import { initGlobalState, MicroAppStateActions } from 'qiankun';
import InitState, { State } from './initState';

export default (registInfo: any) => {
  const initState: State = {
    ...InitState,
    registInfo,
  };
  // 初始化 state
  const actions: MicroAppStateActions = initGlobalState(initState);

  actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });
  // actions.setGlobalState(state);
  // actions.offGlobalStateChange();

  return actions;
};

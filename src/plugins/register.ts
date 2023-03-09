import { registerMicroApps } from 'qiankun';
import { LifeCycleFn, LoadableApp, RegistrableApp } from 'qiankun/es/interfaces';
import { qiankunRouter } from '../libs/index';
import qiankunActions from './actions';

declare type RegistInfo<T> = {
  microApps: RegistrableApp<any>[];
  payload: T;
};

export default () => {
  /* 注册信息 START */
  const registInfo: RegistInfo<{}> = {
    microApps: [
      {
        name: 'app1',
        entry: '//localhost:3000',
        container: '#container',
        activeRule: '/react',
        props: {
          type: 'react',
        },
      },
      {
        name: 'app2',
        entry: '//localhost:5173',
        container: '#container',
        activeRule: '/vue',
        props: {
          type: 'vue3',
        },
      },
    ],
    payload: {},
  };
  /* lifeCycle START */
  const beforeLoad: LifeCycleFn<any> = (app: LoadableApp<any>, WindowProxy: any): Promise<any> => {
    WindowProxy.WINDOW = window;
    WindowProxy.qiankunRouter = qiankunRouter;
    WindowProxy.qiankunActions = qiankunActions(registInfo);

    return Promise.resolve();
  };

  const beforeMount: LifeCycleFn<any> = (app: LoadableApp<any>): Promise<any> => {
    return Promise.resolve();
  };

  const afterMount: LifeCycleFn<any> = (app: LoadableApp<any>): Promise<any> => {
    return Promise.resolve();
  };

  const beforeUnmount: LifeCycleFn<any> = (
    app: LoadableApp<any>,
    WindowProxy: any,
  ): Promise<any> => {
    return Promise.resolve();
  };

  const afterUnmount: LifeCycleFn<any> = (
    app: LoadableApp<any>,
    WindowProxy: any,
  ): Promise<any> => {
    WindowProxy = null;
    return Promise.resolve();
  };
  /* lifeCycle END */

  registerMicroApps(registInfo.microApps, {
    beforeLoad,
    beforeMount,
    afterMount,
    beforeUnmount,
    afterUnmount,
  });

  return registInfo;
};

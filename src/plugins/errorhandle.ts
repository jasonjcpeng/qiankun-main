import { addGlobalUncaughtErrorHandler } from 'qiankun';

export default () => {
  addGlobalUncaughtErrorHandler((event) => {});
};

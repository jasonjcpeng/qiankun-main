export const qiankunRouter = (path: string, payload?: object) => {
  history.pushState(payload || {}, '', path);
};

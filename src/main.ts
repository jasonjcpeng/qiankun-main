import { setDefaultMountApp, start } from 'qiankun';
import './less/index.less';
import register from './plugins/register';

const registInfo = register();

start({ prefetch: true, sandbox: { strictStyleIsolation: true } });

setDefaultMountApp('/react');

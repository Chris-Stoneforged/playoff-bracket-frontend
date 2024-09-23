import Root from '../pages/root/Root';
import Login from '../pages/login/Login';
import BrowserRouterBuilder from './routerBuilder';

const router = new BrowserRouterBuilder()
  .addRoute('/', <Root />)
  .addRoute('/login', <Login />)
  .build();

export default router;

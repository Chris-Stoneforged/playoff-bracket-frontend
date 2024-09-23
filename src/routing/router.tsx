import Root from '../pages/root/Root';
import Login from '../pages/login/Login';
import Error from '../pages/error/Error';
import BrowserRouterBuilder from './routerBuilder';

const router = new BrowserRouterBuilder()
  .addRoute('/', <Root />)
  .addRoute('/login', <Login />)
  .addErrorHandler(<Error />)
  .build();

export default router;

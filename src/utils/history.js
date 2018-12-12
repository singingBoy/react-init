import {createHashHistory} from 'history';

/**********************************
Example:
 history.push('/home');
 history.push('/home?the=query');
 history.push({
      pathname: '/home',
      search: '?the=query',
      hash: ''
 });
 history.go(n);
 history.goBack();
 history.goForward();
 history.replace();
 ********************************/
export default createHashHistory();

import { createNavigationReducer } from 'react-navigation-redux-helpers';
import Routes from '../../routes/Index'

const navReducer = createNavigationReducer(Routes);

export default navReducer;
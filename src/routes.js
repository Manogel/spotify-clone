import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Podcast from '~/pages/Podcast';

const Routes = createAppContainer(createSwitchNavigator({ Main, Podcast }));

export default Routes;

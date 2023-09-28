import React from 'react';

import { IPlugin } from '@veramo-community/agent-explorer-plugin';
import { Feed } from './Feed'
import { Icon } from './Icon';

const Plugin: IPlugin = {
    init: () => {
        return {
          name: 'Gitcoin passport',
          description: 'Decentralized reputation and Gitcoin passport',
          requiredMethods: ['dataStoreORMGetIdentifiers'],
          routes: [
            {
              path: '/gitcoin-passport',
              element: <Feed />,
            },
          ],
          menuItems: [
            {
              name: 'Gitcoin passport',
              path: '/gitcoin-passport',
              icon: <Icon />,
            },
          ],
          hasCss: true,
        }
    }
};

export default Plugin;
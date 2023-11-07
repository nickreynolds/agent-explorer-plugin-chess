import React from 'react';

import { IPlugin } from '@veramo-community/agent-explorer-plugin';
import { IdentifierHoverComponent } from './IdentifierHoverComponent';
import { UniqueVerifiableCredential } from '@veramo/core-types';
import { GitcoinStamp } from './GitcoinStamp';
import { IdentifierTabStamps } from './IdentifierTabStamps';
import { Icon } from './Icon';

const Plugin: IPlugin = {
    init: () => {
        return {
          name: 'Gitcoin passport',
          description: 'Decentralized reputation and Gitcoin passport',
          requiredMethods: ['dataStoreORMGetIdentifiers'],
          icon: <Icon />,
          routes: [],
          menuItems: [],
          hasCss: true,
          getIdentifierHoverComponent: () => IdentifierHoverComponent,
          getCredentialComponent: (credential: UniqueVerifiableCredential) => {
            if (credential.verifiableCredential.issuer === 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC') {
              return GitcoinStamp
            }
            return undefined
          },
          getIdentifierTabsComponents: () => {
            return [
              {
                label: 'Gitcoin passport',
                component: IdentifierTabStamps,
              },
            ]
          },
        }
    }
};

export default Plugin;
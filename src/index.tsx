import React from 'react';

import { IPlugin } from '@veramo-community/agent-explorer-plugin';
import { UniqueVerifiableCredential } from '@veramo/core-types';
import { Games } from './components/Games';
import { ChessGame } from './components/ChessGame.js';
import { ChessGamePage } from './components/ChessGamePage.js';
import { SketchOutlined } from '@ant-design/icons';
import { SaveMessageHandler } from './saveMessageHandler.js';

const Plugin: IPlugin = {
    init: () => {
        return {
          name: 'Chess',
          config: {
            enabled: true,
            url: 'core://chess',
          },
          description: 'Chess game plugin',
          requiredMethods: [],
          icon: <SketchOutlined />,
          messageHandlers: [new SaveMessageHandler()],
          routes: [
            {
              path: '/chess/games',
              element: <Games />
            },
            {
              path: '/chess/games/:hash',
              element: <ChessGamePage />
            },
          ],
          menuItems: [
            {
              name: "Chess",
              path: '/chess/games',
              icon: <SketchOutlined />
            }
          ],
          hasCss: true,
          getCredentialComponent: (credential: UniqueVerifiableCredential) => {
            if (credential.verifiableCredential.type?.includes('ChessGameInvite')) {
              return ChessGame
            }
            return undefined
          },
        }
    }
};

export default Plugin;
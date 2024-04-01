import React from 'react';

import { IPlugin } from '@veramo-community/agent-explorer-plugin';
import { UniqueVerifiableCredential } from '@veramo/core-types';
import { WitnessedCredentialHeader } from './components/WitnessedCredentialHeader';
import { Polls } from './components/Polls';
import { CredentialActionComponent } from './components/CredentialActionComponent.js';
import { WitnessPoll } from './components/WitnessPoll.js';
import { PollPage } from './components/PollPage.js';
import { SketchOutlined } from '@ant-design/icons';

const Plugin: IPlugin = {
    init: () => {
        return {
          name: 'Witness',
          config: {
            enabled: true,
            url: 'core://witness',
          },
          description: 'Timestamping',
          requiredMethods: [],
          icon: <SketchOutlined />,
          routes: [
            {
              path: '/witness/polls',
              element: <Polls />
            },
            {
              path: '/witness/poll/:hash',
              element: <PollPage />
            },
          ],
          menuItems: [
            {
              name: "Witness",
              path: '/witness/polls',
              icon: <SketchOutlined />
            }
          ],
          hasCss: true,
          getCredentialHeaderComponent: (credential: UniqueVerifiableCredential) => {
            return WitnessedCredentialHeader
          },
          getCredentialActionComponents: () => [CredentialActionComponent],
          getCredentialComponent: (credential: UniqueVerifiableCredential) => {
            if (credential.verifiableCredential.type?.includes('WitnessPollAnnouncement')) {
              return WitnessPoll
            }
            return undefined
          },
        }
    }
};

export default Plugin;
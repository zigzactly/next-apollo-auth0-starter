import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { 
  AcceptButton,
  FeaturedButton,
  CancelButtonLink
} from '../components/styled'

storiesOf('Components', module)
  .add('Buttons', () => {
    return (
      <React.Fragment>
        <FeaturedButton onClick={action('button-click')} children="Featured Button" href="https://www.google.com" />
        <AcceptButton children="Accept Button" />
        <CancelButtonLink children="Cancel Button Link" href="https://www.google.com" newTab />
      </React.Fragment>
    )
  })
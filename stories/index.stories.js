import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { 
  AcceptButton,
  FeaturedButton,
  CancelButton
} from '../components/styled'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Components', module)
  .add('Buttons', () => {
    return (
      <React.Fragment>
        <FeaturedButton text="Featured Button" />
        <AcceptButton text="Accept Button" />
        <CancelButton text="Cancel Button" />
      </React.Fragment>
    )
  })

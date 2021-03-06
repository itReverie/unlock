import React from 'react'
import { storiesOf } from '@storybook/react'
import Layout from '../../components/interface/Layout'

storiesOf('Layout')
  .add('the layout for the dashboard', () => {
    return (
      <Layout title="Unlock Dashboard" />
    )
  })
  .add('the layout for the content page', () => {
    return (
      <Layout forContent={true} title="About Unlock" />
    )
  })

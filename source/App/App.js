import React, { PureComponent } from 'react';

import InlineSelect from '../InlineSelect/InlineSelect';
import styles from './_App.scss';
import './blue.css';
import './dark.css';

import * as data from './data';

export default class App extends PureComponent {
  //
  //  Sample onChange callback
  //
  onChange = (value) => {
    // Do something with the new selected value
    console.log('Item selected: ' + value);
  }

  render () {
    return (
      <>
        <h1>InlineSelect</h1>
        A react select widget you can put inside a p tag. Just like its native counterpart
        <h2>Examples</h2>
        <h3>Select Theme</h3>

        <h3>Bio</h3>

        <p className={styles.section + ' ' + styles.bio}>
          Hello. I am a &nbsp;
          <InlineSelect items={data.programmingLanguages} onChange={this.onChange}
            classes={{
              title: 'dark-title',
              itemContainer: 'dark-item-container',
              item: 'dark-item'
            }} />
          &nbsp; programmer. I prefer reading in a &nbsp;
          <InlineSelect items={data.fontSizes} placeholder='Font size' theme='dark'
            defaultItem={{
              value: '12',
              label: '12px'
            }} />
          &nbsp;font size. My favorite IDE is &nbsp;
          <InlineSelect placeholder='Select IDE' items={data.ides} theme='dark'
            defaultItem={{
              value: 'aptana',
              label: 'Aptana'
            }} />
          &nbsp;
        </p>

        <h3>Using global css classes. Blue example</h3>

        <p className=''>
          Select dinosaur group: <InlineSelect placeholder='Dinosaur group' items={data.dinosaurGroups} defaultItem={{ value: 'theropoda' }}
            classes={{
              title: 'blue-title',
              itemContainer: 'blue-item-container',
              items: 'blue-items',
              item: 'blue-item'
            }} />
        </p>

        <h3>Fill the blanks</h3>

        <p className={styles.section + ' ' + styles.dino}>
          A tyrannosaurus rex was a &nbsp;
          <InlineSelect items={data.dinosaurFamily} theme='light' />
          &nbsp; weighing approximately &nbsp;
          <InlineSelect placeholder='Select weight' items={data.tons} theme='light' />
          &nbsp;. It lived in the &nbsp;
          <InlineSelect placeholder='Select Period' items={data.periods} theme='light'
            defaultItem={{
              value: 'aptana',
              label: 'Aptana'
            }} />
          &nbsp; period
        </p>

      </>
    );
  }
}

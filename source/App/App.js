import React, { PureComponent } from 'react';

import InlineSelect from '../InlineSelect/InlineSelect';
import styles from './_App.scss';

const programmingLanguages = [
  {
    label: 'Visual Basic',
    value: 'vb'
  }, {
    label: 'PHP',
    value: 'php'
  }, {
    value: 'c'
  }, {
    label: 'Javascript',
    value: 'ecmascript'
  }
];

const fontSizes = [
  {
    label: '9px',
    value: '9'
  }, {
    label: '10px',
    value: '10'
  }, {
    label: '11px',
    value: '11'
  }, {
    label: '12px',
    value: '12'
  }
];

const ides = [
  {
    label: 'VS Code',
    value: 'vsc'
  }, {
    label: 'Aptana',
    value: 'aptana'
  }, {
    label: 'Netbeans',
    value: 'netbeans'
  }, {
    label: 'Eclipse',
    value: 'eclipse'
  }
];

const dinosaurFamily = [
  {
    value: 'Theropod'
  }, {
    value: 'Sauropod'
  }, {
    value: 'Ornothopod'
  }
];

const periods = [
  {
    value: 'Cretaceous'
  }, {
    value: 'Jurassic'
  }, {
    value: 'Triasic'
  }
];

const tons = [
  {
    label: '1 Ton',
    value: '1'
  }, {
    label: '2 Tons',
    value: '2'
  }, {
    label: '3 Tons',
    value: '3'
  }, {
    label: '4 Tons',
    value: '4'
  }, {
    label: '5 Tons',
    value: '5'
  }, {
    label: '6 Tons',
    value: '6'
  }, {
    label: '7 Tons',
    value: '7'
  }, {
    label: '8 Tons',
    value: '8'
  }, {
    label: '9 Tons',
    value: '9'
  }, {
    label: '10 Tons',
    value: '10'
  }, {
    label: '11 Tons',
    value: '11'
  }, {
    label: '12 Tons',
    value: '12'
  }, {
    label: '13 Tons',
    value: '13'
  }, {
    label: '14 Tons',
    value: '14'
  }, {
    label: '15 Tons',
    value: '15'
  }, {
    label: '16 Tons',
    value: '16'
  }, {
    label: '17 Tons',
    value: '17'
  }, {
    label: '18 Tons',
    value: '18'
  }, {
    label: '19 Tons',
    value: '19'
  }
];

export default class App extends PureComponent {
  //
  //  Sample onChange callback
  //
  onChange = (value) => {
    // Do something with the new selected value
    console.log('Updating value in store: ' + value);
  }

  render () {
    return (
      <React.Fragment>
        <h1>InlineSelect</h1>
        A react select widget you can put inside a p tag. Just like its native counterpart
        <h2>Examples</h2>
        <h3>Select Theme</h3>

        <h3>Bio</h3>

        <p className={styles.section + ' ' + styles.bio}>
          Hello. I am a &nbsp;
          <InlineSelect items={programmingLanguages} />
          &nbsp; programmer. I prefer reading in a &nbsp;
          <InlineSelect placeholder='Font size' items={fontSizes} theme='dark'
            defaultItem={{
              value: '12',
              label: '12px'
            }} />
          &nbsp;font size. My favorite IDE is &nbsp;
          <InlineSelect placeholder='Select IDE' items={ides} theme='dark'
            defaultItem={{
              value: 'aptana',
              label: 'Aptana'
            }} />
          &nbsp;
        </p>

        <h3>Fill the blanks</h3>

        <p className={styles.section + ' ' + styles.dino}>
          A tyrannosaurus rex was a &nbsp;
          <InlineSelect items={dinosaurFamily} theme='light' />
          &nbsp; weighing aproximately &nbsp;
          <InlineSelect placeholder='Select weight' items={tons} theme='light' />
          &nbsp;. It lived in the &nbsp;
          <InlineSelect placeholder='Select Period' items={periods} theme='light'
            defaultItem={{
              value: 'aptana',
              label: 'Aptana'
            }} />
          &nbsp; period
        </p>

      </React.Fragment>
    );
  }
}

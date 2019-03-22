import React, { PureComponent } from 'react';

import Select from '../Select/Select';
import InlineSelect from '../InlineSelect/InlineSelect';
import styles from './_App.scss';

const anime = [
  {
    label: 'Dragon Bal',
    value: 'db'
  }, {
    label: 'Samurai X',
    value: 'rk'
  }, {
    value: 'Kemurikusa'
  }
];

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

        <h3>Bio</h3>

        <p className={styles.bio}>
          Hello. I am a &nbsp;
          <InlineSelect items={programmingLanguages} />
          &nbsp; programmer. I prefer reading in a &nbsp;
          <InlineSelect placeholder='Font size' items={fontSizes}
            defaultItem={{
              value: '12',
              label: '12px'
            }} />
          &nbsp;font size. My favorite IDE is &nbsp;
          <InlineSelect placeholder='Select IDE' items={ides}
            defaultItem={{
              value: 'aptana',
              label: 'Aptana'
            }} />
          &nbsp;
        </p>
      </React.Fragment>
    );
  }
}

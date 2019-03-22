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
        A select you can put inside a p tag
        <div className={styles.app + ' ' + styles.appDark}>
          <p>Hello, My name is Oscar and I'm a
            <InlineSelect
              defaultSelected={{
                value: 'vb',
                label: 'Visual Basic'
              }}
              placeholder='Programming language'
              items={programmingLanguages} />
            developer. I like
            <InlineSelect
              defaultSelected={{
                value: 'vb',
                label: 'Visual Basic'
              }}
              placeholder='Font size'
              items={fontSizes} />
          </p>
          <div className={styles.demoContainer}>
            <div className={styles.example2}>
              <span>Select a language: </span>
              <Select
                onChange={this.onChange}
                defaultSelected='english'
                optionList={programmingLanguages}
                placeholder='Please select language' />
              <br />
              <span>Select a language: </span>
              <Select
                onChange={this.onChange}
                defaultSelected='english'
                optionList={programmingLanguages}
                placeholder='Please select language' />
              <br />
              <span>Select a font size: </span>
              <Select onChange={this.onChange} defaultSelected='english' optionList={fontSizes} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

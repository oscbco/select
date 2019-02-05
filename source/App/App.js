import React, { PureComponent } from 'react';

import Select from '../Select/Select';
import styles from './_App.scss';

const languages = [
  {
    label: 'Spanish',
    value: 'spanish'
  }, {
    label: 'English',
    value: 'english'
  }, {
    value: 'german'
  }, {
    label: 'Japanese',
    value: 'japanese'
  }, {
    value: 'chinese'
  }, {
    value: 'portuguese'
  }, {
    value: 'french'
  }, {
    value: 'korean'
  }, {
    value: 'latin'
  }, {
    value: 'italian'
  }, {
    value: 'klingon'
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
      <div className={styles.app + ' ' + styles.appDark}>
        <div className={styles.demoContainer}>
          <div className={'one ' + styles.example1}>
            <span>Select a language: </span>
            <Select
              onChange={this.onChange}
              defaultSelected='english'
              optionList={languages}
              placeholder='Please select language' />
          </div>
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
          </div>
          <div className={styles.example3}>
            <span>Select a language: </span>
            <Select onChange={this.onChange} defaultSelected='english' optionList={programmingLanguages} />
          </div>
          <div className={styles.example4}>
            <span>Select a language: </span>
            <Select onChange={this.onChange} defaultSelected='english' optionList={languages} />
          </div>
          <div className={styles.example5}>
            <span>Select a language: </span>
            <Select onChange={this.onChange} defaultSelected='english' optionList={programmingLanguages} />
          </div>
          <div className={styles.example6}>
            <span>Select a language: </span>
            <Select onChange={this.onChange} defaultSelected='english' optionList={programmingLanguages} />
          </div>
          <div className={styles.example7}>
            <span>Select a language: </span>
            <Select onChange={this.onChange} defaultSelected='english' optionList={languages} />
          </div>
          <div className={styles.example8}>
            <span>Select a language: </span>
            <Select onChange={this.onChange} defaultSelected='english' optionList={programmingLanguages} />
          </div>
          <div className={styles.example9}>
            <span>Select a language: </span>
            <Select onChange={this.onChange} defaultSelected='english' optionList={programmingLanguages} />
          </div>
        </div>
      </div>
    );
  }
}

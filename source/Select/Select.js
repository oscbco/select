import React, { PureComponent } from 'react';
import styles from './_Select.scss';

export default class Select extends PureComponent {
  static defaultProps = {
    tabIndex: 1,
    selected: '',
    optionList: [],
    onChange: function () {},
    placeholder: 'Please select option'
  }

  constructor (props) {
    super(props);
    this.optionListRef = React.createRef();
    this.state = {
      showOptions: -1,
      selected: this.props.defaultSelected,
      activeOptionIndex: -1
    };
    this.height = '200px';
  }

  downArrow = () => (
    <svg className={styles.downArrow} height='0.9em' version='1.1' viewBox='0 0 8.4666665 8.4666669'>
      <g transform='translate(0 -288.53)' fill='none' stroke='#000' strokeLinecap='round' strokeWidth='.8176'>
        <path d='m0.61405 290.96 3.6193 3.6193' />
        <path d='m7.8526 290.96-3.6193 3.6193' />
      </g>
    </svg>
  );

  selectOption = (value) => {
    this.setState({
      selected: value,
      showOptions: -1
    });
    this.props.onChange(value);
  }

  handleClick = (event) => {
    const { value } = event.target.dataset;

    if (value) {
      this.selectOption(value);
      this.setState({
        activeOptionIndex: this.getValueIndex(value)
      });
    } else {
      this.height = this.optionListRef.current.clientHeight;
      this.setState((prevState) => ({
        showOptions: prevState.showOptions * -1
      }));
    }
  };

  showOptionList = () => {
    this.setState({
      showOptions: 1
    });
  };

  hideOptionList = (event) => {
    this.setState({
      showOptions: -1
    });
  };

  getSelectedLabel = () => {
    const element = this.props.optionList.find(element => {
      return element.value === this.state.selected;
    });
    if (element === undefined) {
      return this.props.placeholder;
    }

    return element && element.label ? element.label : element.value.charAt(0).toUpperCase() + element.value.replace(/_/g, ' ').substring(1);
  };

  getValueIndex = (value) => {
    let counter = 0;
    const element = this.props.optionList.find(element => {
      counter++;
      return element.value === value;
    });
    if (element === undefined) {
      return -1;
    }

    return counter - 1;
  };

  handleKeyDown = (event) => {
    if ([38, 40, 13, 27].includes(event.keyCode)) {
      event.preventDefault();
    }
    if (this.state.showOptions === 1) {
      if (event.keyCode === 38) {
        this.setState((prevState) => {
          let activeOptionIndex = prevState.activeOptionIndex - 1;
          if (prevState.activeOptionIndex === 0) {
            activeOptionIndex = (this.props.optionList.length - 1);
          }
          if (prevState.activeOptionIndex === -1) {
            activeOptionIndex = (this.props.optionList.length - 1);
          }

          return {
            activeOptionIndex: activeOptionIndex
          };
        });
      }
      if (event.keyCode === 40) {
        this.setState((prevState) => {
          let activeOptionIndex = prevState.activeOptionIndex + 1;
          if (prevState.activeOptionIndex === (this.props.optionList.length - 1)) {
            activeOptionIndex = 0;
          }
          if (prevState.activeOptionIndex === -1) {
            activeOptionIndex = 0;
          }

          return {
            activeOptionIndex
          };
        });
      }
      if (event.keyCode === 13) {
        if (this.state.activeOptionIndex !== -1) {
          const value = this.props.optionList[this.state.activeOptionIndex].value;
          this.selectOption(value);
        }
      }
    } else {
      if (event.keyCode === 40) {
        this.showOptionList();
      }
    }
    if (event.keyCode === 27) {
      this.hideOptionList();
    }
  };

  getOptionsList = () => {
    return this.props.optionList.map((option, index) => {
      const label = option.label ? option.label : option.value.charAt(0).toUpperCase() + option.value.replace(/_/g, ' ').substring(1);
      const check = option.value === this.state.selected ? '✓' : '';
      const active = index === this.state.activeOptionIndex ? styles.activeOption : '';
      return (
        <div className={styles.option + ' ' + active} key={option.value} data-value={option.value}>
          {label} <span className={styles.check}>{check}</span>
        </div>
      );
    });
  };

  render () {
    const { height, optionListRef, getSelectedLabel, getOptionsList, downArrow, handleClick, handleKeyDown, hideOptionList, state: { showOptions } } = this;
    return (
      <div tabIndex={this.props.tabIndex} className={styles.select + ' ' + (showOptions === 1 ? styles.selectActive : '')} onClick={handleClick} onKeyDown={handleKeyDown} onBlur={hideOptionList}>
        <div className={styles.header}>
          <span className={styles.title}>{getSelectedLabel()} {downArrow()}</span>
        </div>
        <div className={styles.backdrop} />
        <div className={styles.options} style={{ height: showOptions === 1 ? height : 0 }}>
          <div className={styles.optionsShadow} ref={optionListRef}>
            {getOptionsList()}
          </div>
        </div>
      </div>
    );
  }
}

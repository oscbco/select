import React, { useState, useEffect, useRef } from 'react';
import css from './_InlineSelect.scss';
import { downArrow } from './Shapes';
import { getPrevItem, getNextItem } from './cycleArray';
import { isKeyUp, isKeyDown, isKeyEnter, isKeyEsc } from './isKey';
import toTitleCase from './titleCase';

export default function InlineSelect (props) {
  const container = useRef(null);
  const inputEl = useRef(null);
  const height = useRef();
  const [isOpen, open] = useState(false);
  const [selected, setSelected] = useState(false);
  const [active, setActive] = useState(-1);
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    setSelected(props.defaultItem.value);
  }, []);

  const openSelect = () => {
    open(!isOpen);
    height.current = inputEl.current.offsetHeight;
  };

  const handleBlur = () => {
    setFocused(false);
    open(false);
  };

  const handleKeyDown = (event) => {
    if ([38, 40, 13, 27].includes(event.keyCode)) {
      event.preventDefault();
    }
    if (isOpen === true) {
      if (isKeyUp(event.keyCode)) {
        setActive(getPrevItem(props.items, active));
      } else if (isKeyDown(event.keyCode)) {
        setActive(getNextItem(props.items, active));
      } else if (isKeyEnter(event.keyCode) && active !== -1) {
        setSelected(props.items[active].value);
      } else if (isKeyEsc(event.keyCode)) {
        open(false);
      }
    } else {
      if (isKeyDown(event.keyCode)) {
        open(true);
      }
    }
  };

  const getSelectedLabel = () => {
    const item = props.items.find(item => {
      return item.value === selected;
    });
    if (item === undefined) {
      return props.placeholder;
    }

    return item && item.label ? item.label : toTitleCase(item.value);
  };

  const selectItem = (event) => {
    const { value } = event.target.dataset;
    setSelected(value);
    setActive(value);
    open(false);
  };

  const items = props.items.map(function (item, index) {
    const label = item.label ? item.label : toTitleCase(item.value);
    const check = item.value === selected ? '✓' : '';
    const activeItem = index === active ? css.activeItem : '';
    return (
      <span className={css.item + ' ' + activeItem} key={item.value} data-value={item.value}>
        {label} <span>{check}</span>
      </span>
    );
  });
  const inlineSelectClass = css.inlineSelect + ' ' + (isOpen === true ? css.opened : '') + ' ' + css[props.theme];
  return (
    <span tabIndex={-1} className={inlineSelectClass} ref={container} style={{ zIndex: (focused ? '9999' : '1') }} onKeyDown={handleKeyDown} onFocus={() => setFocused(true)} onBlur={() => handleBlur(false)}>
      <span className={css.title} onClick={openSelect}>
        {getSelectedLabel()} {downArrow(css.downArrow)}
      </span>
      <span className={css.itemContainer} style={{ height: (isOpen === true ? height.current : '0') }} onClick={selectItem}>
        <span className={css.items} ref={inputEl}>
          {items}
        </span>
      </span>
    </span>
  );
}

InlineSelect.defaultProps = {
  placeholder: 'Select option',
  defaultItem: {},
  theme: 'dark',
  items: []
};

import React, { useState, useEffect, useRef } from 'react';
import styles from './_InlineSelect.scss';
import { downArrow } from './Shapes';
import getLineHeight from './getLineHeight';
import { getPrevItem, getNextItem } from './cycleArray';
import { isKeyUp, isKeyDown, isKeyEnter, isKeyEsc } from './isKey';
import toTitleCase from './titleCase';

export default function InlineSelect (props) {
  const container = useRef(null);
  const inputEl = useRef(null);
  const height = useRef();
  const lineHeight = useRef();
  const [isOpen, open] = useState(false);
  const [selected, setSelected] = useState(false);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    setSelected(props.defaultItem.value);
  }, []);

  const openSelect = () => {
    open(!isOpen);
    height.current = inputEl.current.offsetHeight;
    lineHeight.current = getLineHeight(container.current);
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
    const activeItem = index === active ? styles.activeItem : '';
    return (
      <span className={styles.item + ' ' + activeItem} key={item.value} data-value={item.value}>
        {label} <span>{check}</span>
      </span>
    );
  });

  return (
    <span tabIndex={-1} className={styles.inlineSelect} ref={container} style={{ maxHeight: lineHeight.current }} onKeyDown={handleKeyDown} onBlur={() => open(false)}>
      <span className={styles.title} onClick={openSelect}>
        {getSelectedLabel()} {downArrow(styles.downArrow)}
      </span>
      <span className={styles.itemContainer} style={{ height: (isOpen === true ? height.current : '0') }} onClick={selectItem}>
        <span className={styles.items} ref={inputEl}>
          {items}
        </span>
      </span>
    </span>
  );
}

InlineSelect.defaultProps = {
  placeholder: 'Select option',
  defaultItem: {},
  items: []
};

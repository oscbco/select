import React, { useState, useRef } from 'react';
import styles from './_InlineSelect.scss';
import { downArrow } from './Shapes';

function getLineHeight (element) {
  var temp = document.createElement(element.nodeName);
  temp.setAttribute('style', 'margin:0px;padding:0px;font-family:' + element.style.fontFamily + ';font-size:' + element.style.fontSize);
  temp.innerHTML = 'test';
  temp = element.parentNode.appendChild(temp);
  var ret = temp.clientHeight;
  temp.parentNode.removeChild(temp);
  return ret;
}

export default function InlineSelect (props) {
  const container = useRef(null);
  const inputEl = useRef(null);
  const height = useRef();
  const lineHeight = useRef();
  const [folded, setFolded] = useState(false);
  const [selected, setSelected] = useState(false);
  const [active, setActive] = useState(false);

  const items = props.items.map(function (item, index) {
    const label = item.label ? item.label : item.value.charAt(0).toUpperCase() + item.value.replace(/_/g, ' ').substring(1);
    const check = item.value === selected ? '✓' : '';
    return (
      <span className={styles.option + ' ' + (active ? styles.activeOption : '')} key={item.value} data-value={item.value}>
        {label} <span className={styles.check}>{check}</span>
      </span>
    );
  });

  const handleClick = () => {
    setFolded(!folded);
    height.current = inputEl.current.offsetHeight;
    lineHeight.current = getLineHeight(container.current);
  };

  const handleClick2 = (event) => {
    const { value } = event.target.dataset;
    setSelected(value);
    setActive(value);
    setFolded(false);
  };

  const getSelectedLabel = () => {
    const element = props.items.find(element => {
      return element.value === selected;
    });
    if (element === undefined) {
      return props.placeholder;
    }

    return element && element.label ? element.label : element.value.charAt(0).toUpperCase() + element.value.replace(/_/g, ' ').substring(1);
  };

  return (
    <span className={styles.inlineSelect} ref={container} style={{ maxHeight: lineHeight.current }}>
      <span className={styles.inlineSelectTitle} onClick={handleClick}>
        {getSelectedLabel()} {downArrow(styles.downArrow)}
      </span>
      <span className={styles.inlineSelectOptions} style={{ height: (folded ? height.current : '0') }} onClick={handleClick2}>
        <span className={styles.ol} ref={inputEl}>
          {items}
        </span>
      </span>
    </span>
  );
}

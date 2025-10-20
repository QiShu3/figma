import React from 'react';

import styles from './Card.module.scss';

/**
 * Card 组件 - 显示信息卡片
 * @returns {JSX.Element} Card 组件
 */
const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.icon} />
      </div>
      <div className={styles.body}>
        <div className={styles.text}>
          <p className={styles.title}>Title</p>
          <p className={styles.bodyTextForWhateverY}>
            Body text for whatever you'd like to say. Add main takeaway points,
            quotes, anecdotes, or even a very very short story.&nbsp;
          </p>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.button2}>
            <p className={styles.button}>Button</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
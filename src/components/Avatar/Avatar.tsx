import React from 'react';

import styles from './Avatar.module.scss';

/**
 * Avatar 组件 - 显示用户头像
 * @returns {JSX.Element} Avatar 组件
 */
const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img src="/images/mgyipfol-5yykw98.png" className={styles.shape} alt="Avatar" />
    </div>
  );
}

export default Avatar;
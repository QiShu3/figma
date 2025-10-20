import React from 'react';
import Avatar from '../../components/Avatar';
import Card from '../../components/Card';
import styles from './LayoutDemo.module.scss';

/**
 * LayoutDemo 页面组件 - 展示 Avatar 和 Card 组件的 1:3 布局
 * @returns {JSX.Element} LayoutDemo 页面组件
 */
const LayoutDemo: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>布局演示 - Avatar 和 Card (1:3)</h1>
      <div className={styles.layout}>
        <div className={styles.avatarSection}>
          <Avatar />
        </div>
        <div className={styles.cardSection}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default LayoutDemo;
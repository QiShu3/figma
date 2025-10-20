import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ElementPlusDemo.module.scss';

/**
 * ElementPlusDemo 组件
 * 复现 Element Plus Design System 页面设计
 * 包含 logo、徽章、设计系统特性和插图等元素
 */
const ElementPlusDemo: React.FC = () => {
  const navigate = useNavigate();

  /**
   * 处理 Logo 点击事件，跳转到 AddInteractions 页面
   */
  const handleLogoClick = () => {
    navigate('/');
  };

  /**
   * 处理 VARIABLES 徽章点击事件，在新标签页中打开 bilibili
   */
  const handleBadgeClick = () => {
    window.open('https://www.bilibili.com', '_blank');
  };
  return (
    <div className={styles.thumbnailRightClickH}>
      {/* Logo 和 Variables 徽章区域 */}
      <div className={styles.logoAndBadge}>
        <img
          src="/images/mgxizm16-vnjshf2.svg"
          className={styles.elementPlusLogo}
          alt="Element Plus Logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
        <div 
          className={styles.badge}
          onClick={handleBadgeClick}
          style={{ cursor: 'pointer' }}
        >
          <p className={styles.text}>VARIABLES</p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className={styles.autoWrapper3}>
        {/* 右侧设计器界面 */}
        <div className={styles.frame4}>
          <div className={styles.frame2}>
            <img src="/images/mgxizm16-fpexzs4.svg" className={styles.frame} alt="Frame" />
          </div>
          <img src="/images/mgxizm16-le27og4.svg" className={styles.frame3} alt="Frame 3" />
        </div>

        {/* Developer 标签 */}
        <div className={styles.user}>
          <img src="/images/mgxizm16-w5rqtv6.svg" className={styles.arrow} alt="Arrow" />
          <div className={styles.label}>
            <p className={styles.developer}>Developer</p>
          </div>
        </div>

        {/* Designer 标签 */}
        <div className={styles.user2}>
          <img src="/images/mgxizm16-26ngkxc.svg" className={styles.arrow} alt="Arrow" />
          <div className={styles.label2}>
            <p className={styles.developer}>Designer</p>
          </div>
        </div>

        {/* 主要内容：标题和特性徽章 */}
        <div className={styles.content}>
          {/* 标题区域 */}
          <div className={styles.headingWrap}>
            <p className={styles.heading}>Element Plus Design System&nbsp;</p>
            <div className={styles.selection2}>
              <div className={styles.selection} />
              <div className={styles.autoWrapper2}>
                <div className={styles.autoWrapper}>
                  <div className={styles.corner} />
                  <div className={styles.corner2} />
                </div>
                <div className={styles.autoWrapper}>
                  <div className={styles.corner} />
                  <div className={styles.corner2} />
                </div>
              </div>
            </div>
          </div>

          {/* 特性徽章区域 */}
          <div className={styles.badges}>
            <div className={styles.badge2}>
              <div className={styles.checkCircle}>
                <div className={styles.icon} />
              </div>
              <p className={styles.text2}>Auto Layout 5.0</p>
            </div>
            <div className={styles.badge2}>
              <div className={styles.checkCircle}>
                <div className={styles.icon} />
              </div>
              <p className={styles.text2}>Variables</p>
            </div>
            <div className={styles.badge2}>
              <div className={styles.checkCircle}>
                <div className={styles.icon} />
              </div>
              <p className={styles.text2}>Styles</p>
            </div>
            <div className={styles.badge2}>
              <div className={styles.checkCircle}>
                <div className={styles.icon} />
              </div>
              <p className={styles.text2}>Light/Dark Themes</p>
            </div>
          </div>
        </div>

        {/* AI 插图区域 */}
        <div className={styles.aIllustrations}>
          <div className={styles.frame72}>
            <div className={styles.frame5}>
              <img src="/images/mgxizm16-hy4w0li.svg" className={styles.frame} alt="Frame" />
            </div>
            <img src="/images/mgxizm16-v3dqi5t.svg" className={styles.frame6} alt="Frame 6" />
            <img src="/images/mgxizm16-qbbei72.svg" className={styles.frame7} alt="Frame 7" />
            <div className={styles.frame10}>
              <div className={styles.group4}>
                <div className={styles.vector13}>
                  <img
                    src="/images/mgxizm17-eab3lhq.svg"
                    className={styles.vector14}
                    alt="Vector 14"
                  />
                </div>
                <img
                  src="/images/mgxizm17-zqrn2g0.png"
                  className={styles.vector15}
                  alt="Vector 15"
                />
                <img
                  src="/images/mgxizm17-w6n3l85.svg"
                  className={styles.vector16}
                  alt="Vector 16"
                />
                <div className={styles.intersect}>
                  <img
                    src="/images/mgxizm17-8wjmg7s.svg"
                    className={styles.elementPlusLogoSmall}
                    alt="Element Plus Logo Small"
                  />
                </div>
              </div>
              <img
                src="/images/mgxizm17-8nt17yk.svg"
                className={styles.ellipse9}
                alt="Ellipse 9"
              />
              <img src="/images/mgxizm17-bd4wro7.svg" className={styles.vector9} alt="Vector 9" />
              <img
                src="/images/mgxizm17-4m4w1i7.svg"
                className={styles.vector12}
                alt="Vector 12"
              />
              <img
                src="/images/mgxizm17-voagre1.svg"
                className={styles.vector10}
                alt="Vector 10"
              />
              <img
                src="/images/mgxizm17-ym8ii90.png"
                className={styles.vector11}
                alt="Vector 11"
              />
              <img src="/images/mgxizm17-nmoszf0.svg" className={styles.vector8} alt="Vector 8" />
              <img src="/images/mgxizm17-lyg96zi.svg" className={styles.frame8} alt="Frame 8" />
              <img src="/images/mgxizm17-yr92548.svg" className={styles.frame9} alt="Frame 9" />
              <div className={styles.vector20}>
                <img
                  src="/images/mgxizm17-pa38b6u.svg"
                  className={styles.vector21}
                  alt="Vector 21"
                />
              </div>
              <img
                src="/images/mgxizm17-o5r0vjo.svg"
                className={styles.vector19}
                alt="Vector 19"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementPlusDemo;
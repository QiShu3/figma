/**
 * ReplaceContentDemo 组件 - 复现 "Replace Content - Try it out!" 页面
 * 展示 Figma 的 Replace Content 功能使用教程
 */
import React from 'react';
import styles from './ReplaceContentDemo.module.scss';

/**
 * ReplaceContentDemo 主组件
 * @returns JSX.Element
 */
const ReplaceContentDemo: React.FC = () => {
  return (
    <div className={styles.replaceContentTryItO}>
      {/* 左侧紫色区域 - 功能介绍 */}
      <div className={styles.copy}>
        <p className={styles.duplicateAndReplaceC}>Duplicate and Replace Content</p>
        <div className={styles.list}>
          <p className={styles.aIGeneratePopulatesR3}>
            <span className={styles.aIGeneratePopulatesR}>
              AI generate populates realistic text into your design mockups and
              replaces repetitive placeholder copy.
              <br />
            </span>
            <span className={styles.aIGeneratePopulatesR2}>
              You can use Replace Content on new or existing repeatable elements in
              an auto layout frame.
            </span>
          </p>
          <p className={styles.toUseReplaceContent}>To use Replace Content</p>
          
          {/* 步骤 1 */}
          <div className={styles.step}>
            <div className={styles.bullet}>
              <p className={styles.a1}>1</p>
            </div>
            <p className={styles.selectTheDuplicateCa}>
              Select the duplicate card stack on the right.
            </p>
          </div>
          
          {/* 步骤 2 */}
          <div className={styles.step}>
            <div className={styles.bullet}>
              <p className={styles.a1}>2</p>
            </div>
            <p className={styles.selectTheDuplicateCa}>
              Add more duplicates by dragging the magic handle at the bottom of your
              frame
            </p>
          </div>
          
          {/* 步骤 3 */}
          <div className={styles.step2}>
            <div className={styles.bullet}>
              <p className={styles.a1}>3</p>
            </div>
            <p className={styles.clickTheActionsMenuO2}>
              <span className={styles.aIGeneratePopulatesR}>
                Click the Actions menu, or use shortcut&nbsp;
              </span>
              <span className={styles.clickTheActionsMenuO}>⌘K&nbsp;</span>
              <span className={styles.aIGeneratePopulatesR}>(Mac) or&nbsp;</span>
              <span className={styles.clickTheActionsMenuO}>Ctrl + K&nbsp;</span>
              <span className={styles.aIGeneratePopulatesR}>(Windows)</span>
              <span className={styles.clickTheActionsMenuO}>.&nbsp;</span>
            </p>
          </div>
          
          {/* 步骤 4 */}
          <div className={styles.step2}>
            <div className={styles.bullet}>
              <p className={styles.a1}>4</p>
            </div>
            <p className={styles.clickTheActionsMenuO2}>
              <span className={styles.aIGeneratePopulatesR}>Select</span>
              <span className={styles.clickTheActionsMenuO}>
                &nbsp;'Replace Content'
              </span>
              <span className={styles.aIGeneratePopulatesR}>
                &nbsp;from the Actions menu&nbsp;&nbsp;or use shortcut&nbsp;
              </span>
              <span className={styles.clickTheActionsMenuO}>⌘↩</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* 中间区域 - 示例卡片 */}
      <div className={styles.lemon}>
        <div className={styles.card}>
          <p className={styles.number}>01</p>
          <div className={styles.itemInfo}>
            <div className={styles.header}>
              <p className={styles.itemName}>Lemon cake</p>
              <p className={styles.price}>$10</p>
            </div>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>
                Indulge in a delightful lemon cake, bursting with tangy citrus
                flavor and a moist, tender crumb.
              </p>
              <p className={styles.calories}>160 cal</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.number}>01</p>
          <div className={styles.itemInfo}>
            <div className={styles.header}>
              <p className={styles.itemName}>Lemon cake</p>
              <p className={styles.price}>$10</p>
            </div>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>
                Indulge in a delightful lemon cake, bursting with tangy citrus
                flavor and a moist, tender crumb.
              </p>
              <p className={styles.calories}>160 cal</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 右侧区域 - Try it out 步骤 */}
      <div className={styles.steps2}>
        <p className={styles.tryItOut}>Try it out!</p>
        <div className={styles.steps}>
          {/* Try it out 步骤 1 */}
          <div className={styles.aStep1}>
            <div className={styles.step3}>
              <div className={styles.bullet2}>
                <p className={styles.a12}>1</p>
              </div>
              <p className={styles.selectAndCopyThisObj}>
                Select the auto layout frame to the right that contains two
                duplicate dessert option cards.
              </p>
            </div>
          </div>
          
          {/* Try it out 步骤 2 */}
          <div className={styles.frame1430106153}>
            <div className={styles.bullet2}>
              <p className={styles.a12}>2</p>
            </div>
            <p className={styles.selectAndCopyThisObj2}>
              <span className={styles.aIGeneratePopulatesR}>
                Select the frame, and&nbsp;
              </span>
              <span className={styles.clickTheActionsMenuO}>
                drag the duplicate bar&nbsp;
              </span>
              <span className={styles.aIGeneratePopulatesR}>
                on the bottom right of downwards to duplicate the rows. Drag to
                duplicate 3 more.
              </span>
            </p>
          </div>
          
          {/* Try it out 步骤 3 */}
          <div className={styles.frame1430106153}>
            <div className={styles.bullet2}>
              <p className={styles.a12}>3</p>
            </div>
            <p className={styles.selectAndCopyThisObj2}>
              <span className={styles.aIGeneratePopulatesR}>
                Click the Actions menu, or use shortcut&nbsp;
              </span>
              <span className={styles.clickTheActionsMenuO}>⌘K&nbsp;</span>
              <span className={styles.aIGeneratePopulatesR}>(Mac) or&nbsp;</span>
              <span className={styles.clickTheActionsMenuO}>Ctrl + K&nbsp;</span>
              <span className={styles.aIGeneratePopulatesR}>(Windows).</span>
              <span className={styles.clickTheActionsMenuO}>
                &nbsp;&nbsp;
                <br />
              </span>
              <span className={styles.aIGeneratePopulatesR}>Select</span>
              <span className={styles.clickTheActionsMenuO}>
                &nbsp;'Replace Content'
              </span>
              <span className={styles.aIGeneratePopulatesR}>
                &nbsp;from the Actions menu&nbsp;&nbsp;or use shortcut&nbsp;
              </span>
              <span className={styles.clickTheActionsMenuO}>⌘↩</span>
              <span className={styles.aIGeneratePopulatesR}>.</span>
            </p>
          </div>
          
          {/* Try it out 步骤 4 */}
          <div className={styles.frame1430106153}>
            <div className={styles.bullet2}>
              <p className={styles.a12}>4</p>
            </div>
            <p className={styles.selectAndCopyThisObj2}>
              <span className={styles.aIGeneratePopulatesR}>Select</span>
              <span className={styles.clickTheActionsMenuO}>
                &nbsp;'Replace Content'
              </span>
              <span className={styles.aIGeneratePopulatesR}>
                &nbsp;from the Actions menu&nbsp;&nbsp;or use shortcut&nbsp;
              </span>
              <span className={styles.clickTheActionsMenuO}>⌘↩</span>
              <span className={styles.aIGeneratePopulatesR}>.</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* 箭头图标 */}
      <img src="/images/mgxib8bu-1uir8a4.svg" className={styles.arrow8} alt="Arrow" />
      <img src="/images/mgxib8bu-1uir8a4.svg" className={styles.arrow8} alt="Arrow" />
    </div>
  );
};

export default ReplaceContentDemo;
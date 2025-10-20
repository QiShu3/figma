/**
 * Add Interactions - Try it out! 组件
 * 展示 Figma 原型交互功能的说明界面
 */
import React from 'react';
import styles from './AddInteractions.module.scss';

const AddInteractions: React.FC = () => {
  return (
    <div className={styles.addInteractionsTryIt}>
      <div className={styles.copy}>
        <p className={styles.addInteractions}>Add interactions</p>
        <div className={styles.list}>
          <div className={styles.step}>
            <div className={styles.bullet}>
              <p className={styles.a1}>1</p>
            </div>
            <p className={styles.selectYourScreensByD}>
              Select your screens by dragging over the top level frames or selecting
              a containing section.&nbsp;
            </p>
          </div>
          <div className={styles.step2}>
            <div className={styles.bullet}>
              <p className={styles.a1}>2</p>
            </div>
            <p className={styles.inThePrototypeTabWit3}>
              <span className={styles.inThePrototypeTabWit}>
                In the prototype tab within the right design panel or through the
                Actions menu, select&nbsp;
              </span>
              <span className={styles.inThePrototypeTabWit2}>
                'Add interactions'&nbsp;
              </span>
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.bullet}>
              <p className={styles.a1}>3</p>
            </div>
            <p className={styles.selectYourScreensByD}>
              Preview your generated prototype
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.bullet}>
              <p className={styles.a1}>4</p>
            </div>
            <p className={styles.selectYourScreensByD}>
              Make edits or delete the interactions by click on the connector
            </p>
          </div>
          <p className={styles.noteToEnsureBetterAc2}>
            <span className={styles.noteToEnsureBetterAc}>Note:&nbsp;</span>
            <span className={styles.inThePrototypeTabWit}>
              To ensure better accuracy, name your frames for the primary action you
              wish to be performed.
            </span>
          </p>
        </div>
      </div>
      <div className={styles.visuals}>
        <p className={styles.tryItOut}>Try it out!</p>
        <div className={styles.autoWrapper}>
          <div className={styles.step3}>
            <div className={styles.bullet2}>
              <p className={styles.a12}>1</p>
            </div>
            <p className={styles.selectAndCopyThisObj}>
              <span className={styles.inThePrototypeTabWit}>
                Select this 'Onboarding Flow'
              </span>
              <span className={styles.inThePrototypeTabWit2}>&nbsp;</span>
              <span className={styles.inThePrototypeTabWit}>Section.</span>
            </p>
          </div>
          <img src="/images/mgxhd9uu-zc8qter.svg" className={styles.arrow} alt="Arrow" />
        </div>
        <div className={styles.step4}>
          <div className={styles.bullet2}>
            <p className={styles.a12}>2</p>
          </div>
          <p className={styles.selectAndCopyThisObj2}>Open the Actions menu.</p>
        </div>
        <div className={styles.step5}>
          <div className={styles.bullet2}>
            <p className={styles.a12}>3</p>
          </div>
          <p className={styles.selectAndCopyThisObj}>
            <span className={styles.inThePrototypeTabWit}>Select&nbsp;</span>
            <span className={styles.inThePrototypeTabWit2}>'Add interactions'</span>
            <span className={styles.inThePrototypeTabWit}>
              &nbsp;and watch the interactions generate between frames.
            </span>
          </p>
        </div>
        <div className={styles.step6}>
          <div className={styles.bullet2}>
            <p className={styles.a12}>4</p>
          </div>
          <p className={styles.selectAndCopyThisObj3}>
            <span className={styles.inThePrototypeTabWit}>
              Select 'Preview,' and review the generated interactions. Edit, add, or
              remove any connectors to finish your prototype, and when you are done
              select 'Keep it'.
            </span>
          </p>
        </div>
      </div>
      <div className={styles.connectingArrow}>
        <div className={styles.rightArrow}></div>
      </div>
      <div className={styles.onboardingFlow}>
        <div className={styles.onboarding1}>
          <img src="/images/mgxhd9uz-dgmb4b0.svg" className={styles.vector} alt="Vector" />
          <img
            src="/images/mgxhd9uz-7sd55wx.svg"
            className={styles.brandLogoWordmark}
            alt="Brand Logo"
          />
          <div className={styles.introCopy}>
            <p className={styles.joinTheWorldSLargest}>
              Join the world's largest community-powered cookbook to discover, rate,
              and review the recipes your friends love.
            </p>
          </div>
          <div className={styles.buttonLarge}>
            <p className={styles.signUp}>Sign up</p>
          </div>
        </div>
        <div className={styles.onboarding2}>
          <div className={styles.backButton}>
            <img
              src="/images/mgxhd9uz-9o5wlvo.svg"
              className={styles.iconArrowLarge}
              alt="Back Arrow"
            />
          </div>
          <p className={styles.name}>Browse</p>
          <div className={styles.subtitle} />
          <div className={styles.description} />
          <div className={styles.frame1430106096}>
            <img
              src="/images/mgxhd9v6-pm9of56.png"
              className={styles.imagePlaceholder}
              alt="Food Image 1"
            />
            <img
              src="/images/mgxhd9v6-jyyip53.png"
              className={styles.imagePlaceholder2}
              alt="Food Image 2"
            />
            <img
              src="/images/mgxhd9v6-kspa4bw.png"
              className={styles.imagePlaceholder}
              alt="Food Image 3"
            />
          </div>
          <div className={styles.buttonLarge2}>
            <p className={styles.continue}>Continue</p>
          </div>
        </div>
        <div className={styles.onboarding3}>
          <div className={styles.backButton2}>
            <img
              src="/images/mgxhd9uz-9o5wlvo.svg"
              className={styles.iconArrowLarge}
              alt="Back Arrow"
            />
          </div>
          <p className={styles.name2}>Discover</p>
          <div className={styles.subtitle2} />
          <div className={styles.description2} />
          <div className={styles.group1321319421}>
            <div className={styles.autoWrapper2}>
              <img
                src="/images/mgxhd9v6-w8yi5ig.png"
                className={styles.imagePlaceholder3}
                alt="Food Image 4"
              />
              <img
                src="/images/mgxhd9v6-2pwu0o1.png"
                className={styles.imagePlaceholder4}
                alt="Food Image 5"
              />
            </div>
            <div className={styles.autoWrapper3}>
              <img
                src="/images/mgxhd9v6-e1vgljc.png"
                className={styles.imagePlaceholder5}
                alt="Food Image 6"
              />
              <img
                src="/images/mgxhd9v6-85cr6db.png"
                className={styles.imagePlaceholder4}
                alt="Food Image 7"
              />
            </div>
          </div>
          <div className={styles.buttonLarge3}>
            <p className={styles.continue}>Let's go!</p>
          </div>
        </div>
      </div>
      <img src="/images/mgxhd9uz-93voa9a.svg" className={styles.nextButton} alt="Next Button" />
    </div>
  );
};

export default AddInteractions;
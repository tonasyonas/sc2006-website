import { memo } from "react";

import resets from "../styles/_resets.module.css";
import { CoverIcon } from "../ui/CoverIcon.jsx";
import classes from "../styles/LandingPage.module.css";

/* @figmaId 60:422 */
export const Main = memo(function LandingPage() {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.byVeronicaRoth}>by Veronica Roth</div>
      <div className={classes.divergent}>Divergent</div>
      <div className={classes.byJRRTolkien}>by J.R.R Tolkien</div>
      <div className={classes.theHobbit}>The Hobbit</div>
      <div className={classes.byJKRowling}>by J.K. Rowling</div>
      <div className={classes.harryPotterAndTheSorcererSSton}>
        <div className={classes.textBlock}>Harry Potter and the </div>
        <div className={classes.textBlock2}>Sorcerer’s Stone</div>
      </div>
      <div className={classes.recommendedForYou}>Recommended for you</div>
      <div className={classes._41}></div>
      <div className={classes._51}></div>
      <div className={classes.cover}>
        <CoverIcon className={classes.icon} />
      </div>
      <div className={classes.theMidnightLibrary}></div>
      <div className={classes.theVisualMBA}></div>
      <div className={classes.talkingToStrangers}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.startNow}>Start now →</div>
      <div className={classes.elevateYourReadingExperience}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Elevate your </span>
          <span className={classes.label2}>reading </span>
        </p>
        <div className={classes.textBlock3}>experience</div>
      </div>
      <div className={classes.effortlesslySearchForBooksGetR}>
        <div className={classes.textBlock4}>
          Effortlessly search for books, get recommendations, and more in our{" "}
        </div>
        <div className={classes.textBlock5}>webapp!</div>
      </div>
      <div className={classes.rectangle12}></div>
      <div className={classes.login}>Login</div>
      <div className={classes.menu}>
        <div className={classes.item}></div>
        <div className={classes.item2}>
          <div className={classes.getRecommendations}>Get Recommendations</div>
        </div>
        <div className={classes.item3}>
          <div className={classes.userLibrary}>User Library</div>
        </div>
        <div className={classes.item4}></div>
      </div>
      <div className={classes.menu2}>
        <div className={classes.item5}></div>
        <div className={classes.item6}>
          <div className={classes.getRecommendations2}>Get Recommendations</div>
        </div>
        <div className={classes.item7}>
          <div className={classes.userLibrary2}>User Library</div>
        </div>
        <div className={classes.item8}></div>
      </div>
      <div className={classes.menu3}>
        <div className={classes.item9}></div>
        <div className={classes.item10}>
          <div className={classes.getRecommendations3}>Get Recommendations</div>
        </div>
        <div className={classes.item11}>
          <div className={classes.userLibrary3}>User Library</div>
        </div>
        <div className={classes.item12}></div>
      </div>
      <div className={classes.logo}>
        <div className={classes.bookWorm}>BookWorm</div>
      </div>
      <div className={classes.bookSearch}> Book Search</div>
      <div className={classes._428441551}></div>
      <div className={classes._59071}></div>
      <div className={classes._133350371}></div>
    </div>
  );
});

export default Main;

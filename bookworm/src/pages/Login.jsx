

import resets from '../styles/_resets.module.css';
import { ClosedEyeIcon } from '../ui/ClosedEyeIcon.jsx';
import classes from '../styles/Login.module.css';

/* @figmaId 60:414 */
function Login() {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.form}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.login}>Login</div>
      <div className={classes.input}></div>
      <div className={classes.closedEye}>
        <ClosedEyeIcon className={classes.icon} />
      </div>
      <div className={classes.eG4kuBu7uhM3dk1t}>e.g. 4kuBu7uhM3dk1t</div>
      <div className={classes.password}>Password</div>
      <div className={classes.input2}></div>
      <div className={classes.eGJohndoeXyzCom}>e.g. johndoe@xyz.com</div>
      <div className={classes.email}>Email</div>
      <div className={classes.inputYourEmailAndPassword}>Input your email and password.</div>
      <div className={classes.login2}>Login</div>
      <div className={classes.login3}>Login</div>
      <div className={classes.unnamed}> / </div>
      <div className={classes.home}>Home</div>
      <div className={classes._53}></div>
      <div className={classes.bookWorm}>BookWorm</div>
    </div>
  );
};
export default Login;

import resets from "../styles/_resets.module.css";
import { ClosedEyeIcon } from "../ui/ClosedEyeIcon.jsx";
import classes from "../styles/Login.module.css";
import { useState } from "react";
/* @figmaId 60:414 */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.form}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.login}>Login</div>
      <div className={classes.input}></div>
      <div className={classes.closedEye}>
        <ClosedEyeIcon className={classes.icon} />
      </div>
      <input
        className={classes.eG4kuBu7uhM3dk1t}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <div className={classes.password}>Password</div>
      <div className={classes.input2}></div>
      <input
        className={classes.eGJohndoeXyzCom}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <div className={classes.email}>Email</div>
      <div className={classes.inputYourEmailAndPassword}>
        Input your email and password.
      </div>
      <div className={classes.login2}>Login</div>
      <div className={classes.login3}>Login</div>
      <div className={classes.unnamed}> / </div>
      <div className={classes.home}>Home</div>
      <div className={classes._53}></div>
      <div className={classes.bookWorm}>BookWorm</div>
    </div>
  );
}
export default Login;

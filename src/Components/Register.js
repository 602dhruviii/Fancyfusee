import './register.css'
import Navbar from './Navbar';
export default function Register() {
  return (
    <>
      <form className="form">
        <p className="title">Login </p>
        <p className="message">login to keep track of your orders ! </p>
        <div className="flex">
          <label>
            <input className="input" type="text" placeholder="username@fuzfuse" required="" />
          </label>
&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input className="input" type="text" placeholder="Password" required="" />
          </label>
        </div>
        <button className="submit">LOGIN</button>
        
        <p className="signin">
          Don't have an acount ? <a href="#">Register</a>{" "}
        </p>
      </form>
    </>
  );
}

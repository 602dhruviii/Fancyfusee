import "./about.css";
export default function About() {
  return (
    <>
      <div className="fs">
        <div className="ls">
         
            <img src="../assets/logo.png" alt="OFF-white Red Edition" className='intoimg' style={{width:"1000px"}} />
          
        </div>
        <div className="ls">
          <h2
            style={{
              color: "white",
              fontFamily: "Concert One",
              fontSize: "3rem",
            }}
          >
            About<span style={{ color: "#79a9fc" }}>Us</span>
          </h2>
          <br/>
          <p>
          FancyFuse is not just a website, it's a solution to a problem that has long plagued the online shopping industry. We invite you to embark on this exciting journey with us and be part of a transformative venture that is set to reshape the future of fashion retail. Thank you for your time, and let's explore the possibilities that FancyFuse has to offer.
          </p>
          <div class="details">
            <h2
              style={{
                color: "white",
                fontFamily: "Concert One",
                fontSize: "2rem",
              }}
            >
                <br/>
              What set's us <span style={{ color: "#79a9fc" }}>APART ?</span>
            </h2>
            <ul>
            <br/>
              <li>
              <img src='../assets/b.png' className='bull'/>&nbsp;
                <u>Customization:</u>&nbsp; Choose from a wide array of designs,
                colors, and patterns to create a personalized fashion statement.
              </li>
              <br/>
              <li>
              <img src='../assets/b.png' className='bull'/>&nbsp;
                <u>Premium Quality:</u>&nbsp; We use top-notch materials to ensure your
                custom items not only look great but last.
              </li>
              <br/>
              <li>
              <img src='../assets/b.png' className='bull'/>&nbsp;
              <u>Real-Time Preview:</u> &nbsp;See your design come to life on your chosen
                item instantly.
              </li>
              <br/>
              <li>
              <img src='../assets/b.png' className='bull'/>&nbsp;
              <u>Customer-Centric:</u> &nbsp;Your satisfaction is our priority, and we're
                committed to providing an exceptional experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

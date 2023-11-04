import "./slider.css";
export default function Slider() {
  return (
    <>
    <h2 style={{color:"white",textAlign:"center",fontFamily:"Concert One",fontSize:"3rem"}}>CELEBRATE YOUR<span style={{color:"#79a9fc"}}> DIWALI WITH YOUR OWN CREATED LOOK</span></h2>
    <br/>
    <br/>
    <br/>
    <div class="caro">
      <input type="radio" name="position" />
      <input type="radio" name="position"checked />
      <input type="radio" name="position"  />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <main id="carousel">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </main>
      </div>
    </>
  );
}

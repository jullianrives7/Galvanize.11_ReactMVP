import GetStartedBtn from "./buttons/GetStartedBtn";

const Body = () => (
  <main className="main">
    <div className="px-4 py-0 my-0 text-center">
      <img
        className="d-block mx-auto mb-0"
        id="hero_img"
        src="../../src/assets/images/check_list.svg"
        alt=""
        width="575"
        height="575"
      ></img>
      <h1 className="display-5 fw-bold">GET.IT.DONE.</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          {" "}
          Create personalized to-do list's with style and conquer your
          procrastination once and for all. Meet <b>MiLISTEE &trade;</b>, your
          new GO-TO app to get stuff done. List it, do it, and then check it off
          your list and forget it ever happened. The best part? It's FREE.
        </p>
        <GetStartedBtn />
      </div>
    </div>
  </main>
);

export default Body;

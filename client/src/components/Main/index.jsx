import "./styles.css";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

function index() {
  return (
    <div>
      <nav className="navbar bg-white">
        <div className="container">
          <div className="navbar-content">
            <div className="brand-and-toggler">
              <a href="index.html" className="navbar-brand">
                <img
                  src="assets/images/curriculum-vitae.png"
                  alt=""
                  className="navbar-brand-icon"
                />
                <span className="navbar-brand-text" />
                build <span>resume.</span>
              </a>
              {/* <button type="button" className="navbar-toggler-btn"> */}
              {/* <div className="bars"> */}
              <button className="white_btn" onClick={handleLogout}>
                Logout
              </button>	
              {/* </div> */}
              {/* </button> */}
            </div>
          </div>
        </div>
      </nav>

      <header className="header bg-bright" id="header">
        <div className="container">
          <div className="header-content text-center">
            <h6 className="text-uppercase text-blue-dark fs-14 fw-6 ls-1">
              online resume builder
            </h6>
            <h1 className="lg-title">
              Only 2% of resumes make it pas the first round. Be in the top 2%
            </h1>
            <p className="text-dark fs-18">
              Use professional field-tested resume templates that follow that
              exact 'resume rules' employers look for. Easy to use and done
              within minutes - try now for free!
            </p>
            <a href="resume.html" className="btn btn-primary text-uppercase">
              create my resume
            </a>
            <img src="assets/images/dublin-resume-templates.avif" />
          </div>
        </div>
      </header>

      <div className="section-one">
        <div className="container">
          <div className="section-one-content">
            <div className="section-one-l">
              <img src="assets/images/visual-0c7080adf17f1f207276f613447c924f667dab34b7ac415cd7ef653172defd0b.svg" />
            </div>
            <div className="section-one-r text-center">
              <h2 className="lg-title">
                Use the best resume maker as your guide!
              </h2>
              <p className="text">
                Getting that dream job can seem like an impossible task. We're
                here to change that. Give yourself a real advantage with the
                best online resume maker: created by experts, imporved by data,
                trusted by millions of professionals.
              </p>
              <div className="btn-group">
                <a
                  href="resume.html"
                  className="btn btn-primary text-uppercase"
                >
                  create my resume
                </a>
                <a href="#" className="btn btn-secondary text-uppercase">
                  watch video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-two bg-bright">
        <div className="container">
          <div className="section-two-content">
            <div className="section-items">
              <div className="section-item">
                <div className="section-item-icon">
                  <img
                    src="assets/images/feature-1-edf4481d69166ac81917d1e40e6597c8d61aa970ad44367ce78049bf830fbda5.svg"
                    alt=""
                  />
                </div>
                <h5 className="section-item-title">
                  Make a resume that wins interviews!
                </h5>
                <p className="text">
                  Use our resume maker with its advanced creation tools to tell
                  professional story that engages recruiters, hiring managers
                  and even CEOs.
                </p>
              </div>

              <div className="section-item">
                <div className="section-item-icon">
                  <img
                    src="assets/images/feature-2-a7a471bd973c02a55d1b3f8aff578cd3c9a4c5ac4fc74423d94ecc04aef3492b.svg"
                    alt=""
                  />
                </div>
                <h5 className="section-item-title">
                  Resume writing made easy!
                </h5>
                <p className="text">
                  Resume writing has never been this effortless. Pre-generated
                  text, visual designs and more - all already integrated into
                  the resume maker. Just fill in your details.
                </p>
              </div>

              <div className="section-item">
                <div className="section-item-icon">
                  <img
                    src="assets/images/feature-3-4e87a82f83e260488c36f8105e26f439fdc3ee5009372bb5e12d9421f32eabdd.svg"
                    alt=""
                  />
                </div>
                <h5 className="section-item-title">
                  A recruiter-tested CV maker tool
                </h5>
                <p className="text">
                  Our resume builder and its pre-generated content are tested by
                  recruiters and IT experts. We help your CV become truly
                  competitive in the hiring process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer bg-dark">
        <div className="container">
          <div className="footer-content text-center">
            <p className="fs-15">
              &copy;Copyright 2022. All Rights Reserved -{" "}
              <span>build.resume</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default index;

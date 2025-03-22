function About() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="display-4 fw-bold mb-4">About Our Mission</h1>
            <p className="lead mb-0">
              Revolutionizing heart disease prevention through artificial intelligence and data-driven insights
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h2 className="h3 mb-4">Our Vision</h2>
              <p className="lead mb-4">
                We envision a world where preventable heart diseases are detected early,
                enabling timely intervention and saving countless lives through accessible
                and accurate health assessments.
              </p>
              <div className="card p-4 mb-4">
                <h3 className="h5 mb-3">Key Objectives</h3>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center mb-3">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Early detection of heart disease risk factors
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Accessible health assessment for everyone
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Data-driven personalized health recommendations
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Continuous improvement through AI learning
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card p-4">
                <h3 className="h5 mb-4">Technology Stack</h3>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="feature-icon me-3" style={{width: '40px', height: '40px', fontSize: '1rem'}}>
                        <i className="fas fa-brain"></i>
                      </div>
                      <div>
                        <h4 className="h6 mb-1">AI/ML Models</h4>
                        <p className="small text-muted mb-0">Advanced prediction algorithms</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="feature-icon me-3" style={{width: '40px', height: '40px', fontSize: '1rem'}}>
                        <i className="fas fa-server"></i>
                      </div>
                      <div>
                        <h4 className="h6 mb-1">FastAPI Backend</h4>
                        <p className="small text-muted mb-0">High-performance API</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="feature-icon me-3" style={{width: '40px', height: '40px', fontSize: '1rem'}}>
                        <i className="fas fa-database"></i>
                      </div>
                      <div>
                        <h4 className="h6 mb-1">PostgreSQL</h4>
                        <p className="small text-muted mb-0">Secure data storage</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="feature-icon me-3" style={{width: '40px', height: '40px', fontSize: '1rem'}}>
                        <i className="fas fa-lock"></i>
                      </div>
                      <div>
                        <h4 className="h6 mb-1">Security</h4>
                        <p className="small text-muted mb-0">Enterprise-grade protection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Journey</h2>
          <div className="timeline">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3 className="h5 mb-3">Project Inception</h3>
                    <p className="mb-0">
                      Started with a vision to make heart disease prediction accessible to everyone
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3 className="h5 mb-3">AI Model Development</h3>
                    <p className="mb-0">
                      Developed and trained advanced machine learning models using extensive medical data
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3 className="h5 mb-3">Platform Launch</h3>
                    <p className="mb-0">
                      Launched our platform with state-of-the-art prediction capabilities
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3 className="h5 mb-3">Continuous Innovation</h3>
                    <p className="mb-0">
                      Constantly improving our algorithms and expanding our services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Our Impact</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="text-center mb-4">
                  <div className="feature-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                </div>
                <h3 className="h5 text-center mb-3">Lives Improved</h3>
                <p className="text-muted text-center">
                  Helping thousands of people understand and manage their heart health better
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="text-center mb-4">
                  <div className="feature-icon">
                    <i className="fas fa-hospital-user"></i>
                  </div>
                </div>
                <h3 className="h5 text-center mb-3">Healthcare Integration</h3>
                <p className="text-muted text-center">
                  Working with healthcare providers to enhance patient care
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="text-center mb-4">
                  <div className="feature-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                </div>
                <h3 className="h5 text-center mb-3">Global Reach</h3>
                <p className="text-muted text-center">
                  Making heart health assessment accessible worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="h3 mb-4">Join Us in Making a Difference</h2>
          <p className="lead mb-4">
            Be part of our mission to revolutionize heart disease prevention
          </p>
          <a href="/prediction" className="btn btn-primary btn-lg">
            Start Your Assessment
          </a>
        </div>
      </section>
    </div>
  )
}

export default About
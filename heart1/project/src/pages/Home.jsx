function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="display-3 fw-bold mb-4">
              Advanced Heart Disease Risk Assessment
            </h1>
            <p className="lead mb-5">
              Using cutting-edge AI technology to predict and prevent heart disease.
              Take control of your cardiovascular health with our comprehensive analysis system.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="/prediction" className="btn btn-primary btn-lg">
                Start Assessment
              </a>
              <a href="/about" className="btn btn-outline-light btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Our Platform?</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card feature-card h-100 p-4">
                <div className="feature-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="h5 mb-3">AI-Powered Analysis</h3>
                <p className="text-muted mb-0">
                  Advanced machine learning algorithms provide accurate risk assessment based on comprehensive health data
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card feature-card h-100 p-4">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="h5 mb-3">Instant Results</h3>
                <p className="text-muted mb-0">
                  Get your risk assessment and personalized recommendations in seconds
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card feature-card h-100 p-4">
                <div className="feature-icon">
                  <i className="fas fa-user-md"></i>
                </div>
                <h3 className="h5 mb-3">Expert Insights</h3>
                <p className="text-muted mb-0">
                  Backed by medical professionals and latest research in cardiology
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card feature-card h-100 p-4">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="h5 mb-3">Privacy First</h3>
                <p className="text-muted mb-0">
                  Your health data is encrypted and protected with enterprise-grade security
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Impact Statistics</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-number">98%</div>
                <p className="mb-0">Accuracy Rate</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-number">50K+</div>
                <p className="mb-0">Assessments Done</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-number">200+</div>
                <p className="mb-0">Medical Partners</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <p className="mb-0">Available Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">How It Works</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="text-center mb-4">
                  <div className="feature-icon">
                    <i className="fas fa-clipboard-list"></i>
                  </div>
                </div>
                <h3 className="h5 text-center mb-3">1. Input Your Data</h3>
                <p className="text-muted">
                  Provide your health information through our secure and easy-to-use form
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="text-center mb-4">
                  <div className="feature-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                </div>
                <h3 className="h5 text-center mb-3">2. AI Analysis</h3>
                <p className="text-muted">
                  Our AI system analyzes your data using advanced machine learning algorithms
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <div className="text-center mb-4">
                  <div className="feature-icon">
                    <i className="fas fa-file-medical-alt"></i>
                  </div>
                </div>
                <h3 className="h5 text-center mb-3">3. Get Results</h3>
                <p className="text-muted">
                  Receive detailed results and personalized health recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="h3 mb-4">Ready to Take Control of Your Heart Health?</h2>
          <p className="lead mb-4">
            Start your assessment today and get personalized insights about your heart health.
          </p>
          <a href="/prediction" className="btn btn-primary btn-lg">
            Begin Assessment Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
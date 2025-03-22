import { useLocation, Link } from 'react-router-dom';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import '../App.css';

function Results() {
  const location = useLocation();
  const { prediction, probability, recommendations } = location.state || {};
  const reportRef = useRef(null);

  // Early return if no recommendations
  if (!recommendations) {
    return (
      <div className="text-center">
        <h1>No Results Available</h1>
        <p>Please complete the prediction form first.</p>
        <Link to="/prediction" className="btn btn-primary">Go to Prediction Form</Link>
      </div>
    );
  }

  const handleDownloadPDF = () => {
    const element = reportRef.current;
    const opt = {
      margin: 10,
      filename: 'heart-health-report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="container">
      <h1 className="mb-4">Your Heart Health Results</h1>

      {/* PDF Download Button */}
      <div className="text-end mb-3">
        <button onClick={handleDownloadPDF} className="btn btn-success">
          <i className="bi bi-file-earmark-pdf me-2"></i>Download PDF Report
        </button>
      </div>

      {/* Report Content - Wrapped in div with ref for PDF generation */}
      <div ref={reportRef} className="pdf-report">
        {/* Prediction Result */}
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">Prediction Result</h2>
            <div className={`alert ${prediction === 1 ? 'alert-danger' : 'alert-success'}`}>
              {prediction === 1 ? (
                <>
                  <strong>⚠️ High Risk Detected:</strong> Based on your inputs, you may have an elevated risk of heart disease.  
                  It is advised to consult a doctor for a thorough checkup. (Probability: {(probability * 100).toFixed(2)}%)
                </>
              ) : (
                <>
                  <strong>✅ Low Risk:</strong> Your inputs suggest a lower risk of heart disease.  
                  Maintaining a healthy lifestyle is recommended to sustain good heart health. (Probability: {(probability * 100).toFixed(2)}%)
                </>
              )}
            </div>
            <p><strong>Risk Level:</strong> {recommendations.risk_level}</p>
          </div>
        </div>

        {/* Analysis */}
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">Analysis</h2>
            <p>{recommendations.analysis}</p>
          </div>
        </div>

        {/* Medications */}
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">Recommended Medications</h2>
            <ul className="list-group list-group-flush">
              {recommendations.recommendations.medications && recommendations.recommendations.medications.length > 0 ? (
                recommendations.recommendations.medications.map((med, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{med.name}</strong>: {med.description}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No medication recommendations available</li>
              )}
            </ul>
          </div>
        </div>

        {/* Doctors */}
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">Recommended Doctors</h2>
            <ul className="list-group list-group-flush">
              {recommendations.recommendations.doctors && recommendations.recommendations.doctors.length > 0 ? (
                recommendations.recommendations.doctors.map((doctor, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{doctor.specialist}</strong>: {doctor.reason}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No doctor recommendations available</li>
              )}
            </ul>
          </div>
        </div>

        {/* Exercises */}
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">Recommended Exercises</h2>
            <ul className="list-group list-group-flush">
              {recommendations.recommendations.exercises && recommendations.recommendations.exercises.length > 0 ? (
                recommendations.recommendations.exercises.map((exercise, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{exercise.activity}</strong>: {exercise.benefits}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No exercise recommendations available</li>
              )}
            </ul>
          </div>
        </div>

        {/* Diet */}
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">Diet Recommendations</h2>
            {recommendations.recommendations.diets && recommendations.recommendations.diets.length > 0 ? (
              recommendations.recommendations.diets.map((diet, index) => (
                <div key={index}>
                  <h5>{diet.category}</h5>
                  <p>{diet.recommendations}</p>
                </div>
              ))
            ) : (
              <p>No diet recommendations available</p>
            )}
          </div>
        </div>

        {/* Lifestyle Tips */}
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">Lifestyle Tips</h2>
            <ul className="list-group list-group-flush">
              {recommendations.recommendations.lifestyle_tips && recommendations.recommendations.lifestyle_tips.length > 0 ? (
                recommendations.recommendations.lifestyle_tips.map((tip, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{tip.area}</strong>: {tip.suggestions}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No lifestyle tips available</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons - Outside the PDF content */}
      <div className="text-center mt-4">
        <Link to="/prediction" className="btn btn-primary me-2">Make Another Prediction</Link>
        <Link to="/" className="btn btn-secondary">Return Home</Link>
      </div>
    </div>
  );
}

export default Results;
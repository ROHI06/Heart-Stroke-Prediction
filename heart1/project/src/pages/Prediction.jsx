import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Prediction() {
  const navigate = useNavigate()

  const validationSchema = Yup.object({
    gender: Yup.string().required('Please select your gender'),
    age: Yup.number()
      .required('Age is required')
      .min(1, 'Must be at least 1 year old')
      .max(120, 'Must be less than 120 years old'),
    hypertension: Yup.string().required('Please select yes or no'),
    heart_disease: Yup.string().required('Please select yes or no'),
    ever_married: Yup.string().required('Please select marital status'),
    work_type: Yup.string().required('Please select work type'),
    Residence_type: Yup.string().required('Please select residence type'),
    avg_glucose_level: Yup.number()
      .required('Glucose level is required')
      .min(0, 'Must be at least 0')
      .max(500, 'Must be less than 500'),
    height: Yup.number()
      .required('Height is required')
      .min(50, 'Must be at least 50 cm')
      .max(250, 'Must be less than 250 cm'),
    weight: Yup.number()
      .required('Weight is required')
      .min(20, 'Must be at least 20 kg')
      .max(500, 'Must be less than 500 kg'),
    smoking_status: Yup.string().required('Please select smoking status'),
  })

  const formik = useFormik({
    initialValues: {
      gender: '',
      age: '',
      hypertension: '',
      heart_disease: '',
      ever_married: '',
      work_type: '',
      Residence_type: '',
      avg_glucose_level: '',
      height: '',
      weight: '',
      bmi: '',
      smoking_status: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      try {
        const response = await fetch('http://127.0.0.1:8000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        
        const data = await response.json()
        console.log(data);
        navigate('/results', { state: {  prediction: data.prediction, recommendations: data.recommendations} })
      } catch (error) {
        console.error('Error:', error)
      }
    },
  })

  // Calculate BMI whenever height or weight changes
  useEffect(() => {
    const height = parseFloat(formik.values.height)
    const weight = parseFloat(formik.values.weight)
    
    if (height && weight) {
      // BMI formula: weight (kg) / (height (m))^2
      const heightInMeters = height / 100
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1)
      formik.setFieldValue('bmi', bmi)
    }
  }, [formik.values.height, formik.values.weight])

  // CSS to remove spinner buttons from number inputs
  const numberInputStyle = {
    /* For Webkit browsers like Chrome, Safari */
    WebkitAppearance: 'none',
    /* For Mozilla Firefox */
    MozAppearance: 'textfield',
    appearance: 'textfield',
    margin: 0
  }

  return (
    <div className="container">
      <h1 className="mb-4">Stroke Prediction Form</h1>
      <p className="alert alert-danger">
        All fields are mandatory. Please complete the prediction form before viewing results.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select
              className={`form-select ${formik.touched.gender && formik.errors.gender ? 'is-invalid' : ''}`}
              id="gender"
              {...formik.getFieldProps('gender')}
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {formik.touched.gender && formik.errors.gender && (
              <div className="invalid-feedback">{formik.errors.gender}</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              style={numberInputStyle}
              className={`form-control ${formik.touched.age && formik.errors.age ? 'is-invalid' : ''}`}
              id="age"
              placeholder="Enter your age"
              {...formik.getFieldProps('age')}
            />
            {formik.touched.age && formik.errors.age && (
              <div className="invalid-feedback">{formik.errors.age}</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Hypertension</label>
            <div className="mt-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hypertension"
                  id="hypertension0"
                  value="0"
                  checked={formik.values.hypertension === "0"}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="hypertension0">No</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hypertension"
                  id="hypertension1"
                  value="1"
                  checked={formik.values.hypertension === "1"}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="hypertension1">Yes</label>
              </div>
            </div>
            {formik.touched.hypertension && formik.errors.hypertension && (
              <div className="text-danger small mt-1">{formik.errors.hypertension}</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Heart Disease</label>
            <div className="mt-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="heart_disease"
                  id="heart_disease0"
                  value="0"
                  checked={formik.values.heart_disease === "0"}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="heart_disease0">No</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="heart_disease"
                  id="heart_disease1"
                  value="1"
                  checked={formik.values.heart_disease === "1"}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="heart_disease1">Yes</label>
              </div>
            </div>
            {formik.touched.heart_disease && formik.errors.heart_disease && (
              <div className="text-danger small mt-1">{formik.errors.heart_disease}</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="ever_married" className="form-label">Ever Married</label>
            <select
              className={`form-select ${formik.touched.ever_married && formik.errors.ever_married ? 'is-invalid' : ''}`}
              id="ever_married"
              {...formik.getFieldProps('ever_married')}
            >
              <option value="">Select marital status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {formik.touched.ever_married && formik.errors.ever_married && (
              <div className="invalid-feedback">{formik.errors.ever_married}</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="work_type" className="form-label">Work Type</label>
            <select
              className={`form-select ${formik.touched.work_type && formik.errors.work_type ? 'is-invalid' : ''}`}
              id="work_type"
              {...formik.getFieldProps('work_type')}
            >
              <option value="">Select work type</option>
              <option value="Private">Private</option>
              <option value="Self-employed">Self-employed</option>
              <option value="Govt_job">Government Job</option>
              <option value="Never_worked">Never Worked</option>
            </select>
            {formik.touched.work_type && formik.errors.work_type && (
              <div className="invalid-feedback">{formik.errors.work_type}</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="Residence_type" className="form-label">Residence Type</label>
            <select
              className={`form-select ${formik.touched.Residence_type && formik.errors.Residence_type ? 'is-invalid' : ''}`}
              id="Residence_type"
              {...formik.getFieldProps('Residence_type')}
            >
              <option value="">Select residence type</option>
              <option value="Urban">Urban</option>
              <option value="Rural">Rural</option>
            </select>
            {formik.touched.Residence_type && formik.errors.Residence_type && (
              <div className="invalid-feedback">{formik.errors.Residence_type}</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="avg_glucose_level" className="form-label">Average Glucose Level</label>
            <input
              type="number"
              step="0.1"
              style={numberInputStyle}
              className={`form-control ${formik.touched.avg_glucose_level && formik.errors.avg_glucose_level ? 'is-invalid' : ''}`}
              id="avg_glucose_level"
              placeholder="Enter glucose level (mg/dL)"
              {...formik.getFieldProps('avg_glucose_level')}
            />
            {formik.touched.avg_glucose_level && formik.errors.avg_glucose_level && (
              <div className="invalid-feedback">{formik.errors.avg_glucose_level}</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="height" className="form-label">Height</label>
            <input
              type="number"
              step="0.1"
              style={numberInputStyle}
              className={`form-control ${formik.touched.height && formik.errors.height ? 'is-invalid' : ''}`}
              id="height"
              placeholder="Enter height (cm)"
              {...formik.getFieldProps('height')}
            />
            {formik.touched.height && formik.errors.height && (
              <div className="invalid-feedback">{formik.errors.height}</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="weight" className="form-label">Weight</label>
            <input
              type="number"
              step="0.1"
              style={numberInputStyle}
              className={`form-control ${formik.touched.weight && formik.errors.weight ? 'is-invalid' : ''}`}
              id="weight"
              placeholder="Enter weight (kg)"
              {...formik.getFieldProps('weight')}
            />
            {formik.touched.weight && formik.errors.weight && (
              <div className="invalid-feedback">{formik.errors.weight}</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="bmi" className="form-label">BMI</label>
            <input
              type="number"
              step="0.1"
              style={numberInputStyle}
              className="form-control"
              id="bmi"
              placeholder="Calculated BMI (kg/m²)"
              value={formik.values.bmi}
              disabled
              readOnly
            />
            <small className="form-text text-muted">BMI is automatically calculated from height and weight</small>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="smoking_status" className="form-label">Smoking Status</label>
            <select
              className={`form-select ${formik.touched.smoking_status && formik.errors.smoking_status ? 'is-invalid' : ''}`}
              id="smoking_status"
              {...formik.getFieldProps('smoking_status')}
            >
              <option value="">Select smoking status</option>
              <option value="formerly_smoked">Formerly Smoked</option>
              <option value="never_smoked">Never Smoked</option>
              <option value="smokes">Currently Smokes</option>
            </select>
            {formik.touched.smoking_status && formik.errors.smoking_status && (
              <div className="invalid-feedback">{formik.errors.smoking_status}</div>
            )}
          </div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Predicting...' : 'Get Prediction'}
        </button>
      </form>
    </div>
  )
}

export default Prediction
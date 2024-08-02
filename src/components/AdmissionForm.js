import React, { useState } from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    formNo: '',
    registrationNo: '',
    courseName: '',
    courseDuration: '',
    timeSlot: '',
    fullName: '',
    dateOfBirth: '',
    sex: '',
    fatherName: '',
    motherName: '',
    occupation: '',
    monthlyIncome: '',
    postalAddress: '',
    permanentAddress: '',
    phoneNo: '',
    nationality: '',
    maritalStatus: '',
    examPassed: '',
    boardUniversity: '',
    yearOfPassing: '',
    division: '',
    date: '',
    place: '',
    guardianSignature: '',
    applicantSignature: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="admission-form">
      <h1>Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group">
            <label>Form No:</label>
            <input type="text" name="formNo" value={formData.formNo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Registration No:</label>
            <input type="text" name="registrationNo" value={formData.registrationNo} onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Course Name:</label>
            <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Course Duration:</label>
            <input type="text" name="courseDuration" value={formData.courseDuration} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Time Slot:</label>
            <input type="text" name="timeSlot" value={formData.timeSlot} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Full Name (In Block Letters):</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>

        <div className="row">
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Sex (Male/Female):</label>
            <input type="text" name="sex" value={formData.sex} onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Father's Name/Husband Name:</label>
            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Mother's Name:</label>
            <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Father's Occupation:</label>
            <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Monthly Income:</label>
            <input type="text" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Postal Address:</label>
          <input type="text" name="postalAddress" value={formData.postalAddress} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Permanent Address:</label>
          <input type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Phone No:</label>
          <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
        </div>

        <div className="row">
          <div className="form-group">
            <label>Nationality:</label>
            <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Marital Status:</label>
            <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} />
          </div>
        </div>

        <h3>Education (Last Exam Passed)</h3>
        <div className="row">
          <div className="form-group">
            <label>Exam Passed:</label>
            <input type="text" name="examPassed" value={formData.examPassed} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Board/University:</label>
            <input type="text" name="boardUniversity" value={formData.boardUniversity} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Year of Passing:</label>
            <input type="text" name="yearOfPassing" value={formData.yearOfPassing} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Division:</label>
            <input type="text" name="division" value={formData.division} onChange={handleChange} />
          </div>
        </div>

        <div className="declaration">
          <p>I hereby declare that all statements in the application are true to the best of my knowledge and belief.</p>
          <div className="row">
            <div className="form-group">
              <label>Date:</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Place:</label>
              <input type="text" name="place" value={formData.place} onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label>Signature of Parents/Guardians:</label>
              <input type="text" name="guardianSignature" value={formData.guardianSignature} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Signature of Applicant:</label>
              <input type="text" name="applicantSignature" value={formData.applicantSignature} onChange={handleChange} />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm;

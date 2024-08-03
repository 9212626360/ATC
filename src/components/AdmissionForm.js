import React from "react";
import "./AdmissionForm.css"; // Assuming you will use CSS for additional styling

const AdmissionForm = () => {
  return (
    <div className="container">
      <h1 className="text-center">AGGARWAL TYPING COLLEGE</h1>
      <h2 className="text-center text-white bg-blue">Admission Form</h2>
      <form>
        <fieldset>
          <legend><b>All Information</b></legend>
          <div className="form-group">
            <label>Form No:</label>
            <input type="text" name="formNo" className="form-control" />
          </div>
          <div className="form-group">
            <label>Registration No:</label>
            <input type="number" name="regNo" className="form-control" />
          </div>
          <div className="form-group">
            <label>Course Name:</label>
            <input type="text" name="courseName" className="form-control" />
          </div>
          <div className="form-group">
            <label>Course Duration:</label>
            <select name="courseDuration" className="form-control">
              <option value="Select">Select</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="1 Year">1 Year</option>
            </select>
          </div>
          <div className="form-group">
            <label>Time Slot:</label>
            <select name="timeSlot" className="form-control">
              <option value="Select">Select</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" name="fullName" className="form-control" />
          </div>
          <div className="form-group">
            <label>Date of Birth (DD/MM/YY):</label>
            <input type="text" name="dob" className="form-control" />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select name="gender" className="form-control">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
            </select>
          </div>
          <div className="form-group">
            <label>Father's/Husband's Name:</label>
            <input type="text" name="fatherHusbandName" className="form-control" />
          </div>
          <div className="form-group">
            <label>Mother's Name:</label>
            <input type="text" name="motherName" className="form-control" />
          </div>
          <div className="form-group">
            <label>Father's Occupation:</label>
            <input type="text" name="occupation" className="form-control" />
          </div>
          <div className="form-group">
            <label>Monthly Income:</label>
            <input type="number" name="monthlyIncome" className="form-control" />
          </div>
          <div className="form-group">
            <label>Postal Address:</label>
            <textarea rows="3" name="postalAddress" className="form-control"></textarea>
          </div>
          <div className="form-group">
            <label>Permanent Address:</label>
            <textarea rows="3" name="permanentAddress" className="form-control"></textarea>
          </div>
          <div className="form-group">
            <label>Phone No:</label>
            <input type="number" name="phoneNo" className="form-control" />
          </div>
          <div className="form-group">
            <label>Nationality:</label>
            <input type="text" name="nationality" className="form-control" />
          </div>
        </fieldset>
        <fieldset>
          <legend><b>EDUCATION (LAST EXAM)</b></legend>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>EXAM PASSED</th>
                <th>BOARD/UNIVERSITY</th>
                <th>YEAR OF PASSING</th>
                <th>DIVISION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" name="examPassed" className="form-control" /></td>
                <td><input type="text" name="boardUniversity" className="form-control" /></td>
                <td><input type="text" name="yearOfPassing" className="form-control" /></td>
                <td><input type="text" name="division" className="form-control" /></td>
              </tr>
              <tr>
                <td><input type="text" name="examPassed" className="form-control" /></td>
                <td><input type="text" name="boardUniversity" className="form-control" /></td>
                <td><input type="text" name="yearOfPassing" className="form-control" /></td>
                <td><input type="text" name="division" className="form-control" /></td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <fieldset>
          <legend><b>DECLARATION</b></legend>
          <div className="form-group">
            <input type="checkbox" name="declaration" />
            <label>
              I hereby declare that all the statements in the application are true to the best of my knowledge and belief.
            </label>
          </div>
        </fieldset>
        <div className="text-center">
          <button type="submit" className="btn btn-primary" onClick={() => alert('Submitted Successfully')}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;

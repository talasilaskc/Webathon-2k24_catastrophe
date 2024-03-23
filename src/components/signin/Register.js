// import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  let navigate = useNavigate();
  const onSubmit = (formData) => {
    // Remove confirm password field from form data
    delete formData.confirmPassword;
    axios.post('http://localhost:4000/alumni/create_user', formData)
      .then(response => {
        console.log(response);
        alert("User created successfully");
        navigate('/Login');
      })
      .catch(error => {
        console.error('Error creating user:', error);
        alert("Something went wrong in creating user");
      });
  };

  return (
    <div className="container vh-100 d-flex align-items-center">
      <div className="bg-light p-4 mx-auto w-100" style={{ maxWidth: '600px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 className="text-center mt-2">Registration Form</h1><br />
        <form className="row row-cols-2 p-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="profilePhoto">Profile Photo:</label>
            <input type="file" id="profilePhoto" {...register('profilePhoto', { required: true })} className="form-control" />
            {errors.profilePhoto && <span className="error">Profile Photo is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" {...register('name', { required: true })} className="form-control" />
            {errors.name && <span className="error">Name is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" {...register('username', { required: true })} className="form-control" />
            {errors.username && <span className="error">Username is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" {...register('password', { required: true })} className="form-control" />
            {errors.password && <span className="error">Password is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" {...register('confirmPassword', { required: true })} className="form-control" />
            {errors.confirmPassword && <span className="error">Confirm Password is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" {...register('dob', { required: true })} className="form-control" />
            {errors.dob && <span className="error">Date of Birth is required</span>}
          </div>

          <div className="form-group">
            <label>Gender:</label><br />
            <label>
              <input type="radio" {...register('gender', { required: true })} value="male" /> Male
            </label>
            <label>
              <input type="radio" {...register('gender', { required: true })} value="female" /> Female
            </label>
            <label>
              <input type="radio" {...register('gender', { required: true })} value="other" /> Other
            </label>
            {errors.gender && <span className="error">Gender is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="areaOfExpertise">Area of Expertise:</label>
            <input type="text" id="areaOfExpertise" {...register('areaOfExpertise', { required: true })} className="form-control" />
            {errors.areaOfExpertise && <span className="error">Area of Expertise is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="professionalBackground">Professional Background:</label>
            <input type="text" id="professionalBackground" {...register('professionalBackground', { required: true })} className="form-control" />
            {errors.professionalBackground && <span className="error">Professional Background is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="LinkedinUrl">Linkedin Profile Url:</label>
            <input type="text" id="LinkedinUrl" {...register('LinkedinUrl', { required: true })} className="form-control" />
            {errors.LinkedinUrl && <span className="error">Linkedin profile is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="college">Select College:</label>
            <select id="college" {...register('college', { required: true })} className="form-control">
              <option value="">Select College</option>
              <option value="VNR VJIET">VNR VJIET</option>
              <option value="CBIT">CBIT</option>
              <option value="JNTUH">JNTUH</option>
              <option value="GRIET">GRIET</option>
            </select>
            {errors.college && <span className="error">College is required</span>}
          </div>

          <button type="submit" className="col-2 m-3 btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

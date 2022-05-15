import React from 'react';
import './edit.css';

const Edit = () => {
  return (
    <div className='col-md-7'>
      <div className='contact-wrap w-100 p-md-5 p-4'>
        <h3 className='mb-4'>To-Do</h3>
        {/* <div id='form-message-warning' className='mb-4'></div>
        <div id='form-message-success' className='mb-4'>
          Your message was sent, thank you!
        </div> */}
        <form
          method='POST'
          id='contactForm'
          name='contactForm'
          className='contactForm'
          // novalidate='novalidate'
        >
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                {/* <label className='label' for='name'> */}
                <label className='label' htmlFor='name'>
                  제목
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  id='name'
                  placeholder='텍스트 입력'
                />
              </div>
            </div>
            {/* <div className='col-md-6'>
              <div className='form-group'>
                <label className='label' for='email'>
                  Email Address
                </label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  id='email'
                  placeholder='Email'
                />
              </div>
            </div> */}
            <div className='col-md-12'>
              <div className='form-group'>
                {/* <label className='label' for='#'> */}
                <label className='label' htmlFor='#'>
                  내용
                </label>
                <textarea
                  name='message'
                  className='form-control'
                  id='message'
                  cols='30'
                  rows='4'
                  placeholder='텍스트 입력'
                  style={{ resize: 'none' }}
                ></textarea>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='form-group'>
                {/* <label className='label' for='subject'> */}
                <label className='label' htmlFor='subject'>
                  Due Date (Option)
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='subject'
                  id='subject'
                  placeholder='날짜 입력'
                />
              </div>
            </div>

            <div className='col-md-12'>
              <div className='form-group'>
                <input type='submit' value='저장 버튼' className='btn btn-primary' />
                <div className='submitting'></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;

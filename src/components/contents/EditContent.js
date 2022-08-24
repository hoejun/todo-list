import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { listState } from '../../store/atom';
import { v4 as uuid } from 'uuid';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditContent = ({ history }) => {
  const [content, setContent] = useRecoilState(listState);
  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    message: '',
    date: '',
  });
  const location = useLocation();
  const { name, message, date } = inputs;

  const handleChage = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onChange = (_date) => {
    const date = new Date(_date).toLocaleDateString('ko-KR');
    setInputs((prev) => {
      return { ...prev, date: date };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const dateObj = inputs;

    if (dateObj.id?.length === 0) {
      const unique_id = uuid();
      dateObj.id = unique_id;
    }

    dateObj.checked = false;

    if (location.detail) {
      setContent(
        content.map((user) =>
          user.id === inputs.id
            ? {
                id: inputs.id,
                name: inputs.name,
                message: inputs.message,
                date: inputs.date,
              }
            : user
        )
      );
    } else {
      setContent((e) => [
        ...e,
        { id: inputs.id, name: inputs.name, message: inputs.message, date: inputs.date },
      ]);
    }
    history.push('/');
  };
  useEffect(() => {
    if (location.state !== undefined) {
      setInputs((prev) => {
        return {
          ...prev,
          id: location.state.id,
          name: location.state.name,
          message: location.state.message,
          date: location.state.date,
        };
      });
    }
  }, [location.state]);

  useEffect(() => {
    window.localStorage.setItem('todoList', JSON.stringify(content));
  }, [content]);

  return (
    <div className='col-md-7'>
      <div className='contact-wrap w-100 p-md-5 p-4'>
        <form
          // method='POST'
          // id='contactForm'
          // name='contactForm'
          // novalidate='novalidate'
          className='contactForm'
          onSubmit={handleSubmit}
        >
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label className='label'>제목</label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  value={name}
                  placeholder='텍스트 입력'
                  onChange={handleChage}
                />
              </div>
            </div>
            <div className='col-md-12'>
              <div className='form-group'>
                <label className='label'>내용</label>
                <textarea
                  name='message'
                  className='form-control'
                  value={message}
                  placeholder='텍스트 입력'
                  style={{ resize: 'none' }}
                  onChange={handleChage}
                ></textarea>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='form-group0'>
                <label className='label'>Due Date (Option)</label>
                <DatePicker
                  className='form-control'
                  value={date}
                  name='date'
                  dateFormat='yyyy.MM.dd'
                  onChange={onChange}
                />
              </div>
            </div>
            <div className='col-md-12'>
              <div className='form-group'>
                <button type='submit' className='btn btn-primary'>
                  저장 버튼
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContent;

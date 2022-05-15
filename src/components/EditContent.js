import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { listState } from '../store/atom';
import { v4 as uuid } from 'uuid';
// import { DayPicker } from 'react-day-picker';
// import { ko } from 'date-fns/esm/locale';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// import 'react-day-picker/lib/style.css';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

const EditContent = ({ history }) => {
  const [content, setContent] = useRecoilState(listState);
  const [obj, setObj] = useState({});
  const [selected, setSelected] = useState();
  const location = useLocation();
  // const { name, message, date } = content;
  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    message: '',
    date: '',
  });
  const { name, message, date } = inputs;
  const handleChage = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    console.log(value);
    // setContent({
    //   ...content,
    //   [name]: value,

    // });
    // setObj({
    //   ...obj,
    //   id: unique_id,
    //   [name]: value,
    // });
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onChange = (_date) => {
    // const date = `${_date.getFullYear()}.0${_date.getMonth() + 1}.${_date.getDate()}`;
    const d = new Date(_date).toLocaleDateString('ko-KR');
    setInputs((prev) => {
      return { ...prev, date: d };
    });
    setSelected(d);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const dateObj = obj;
    // dateObj.date = selected;
    const dateObj = inputs;

    if (dateObj.id?.length === 0) {
      const unique_id = uuid();
      dateObj.id = unique_id;
    }
    dateObj.checked = false;

    // setContent((e) => [...e, dateObj]);
    // if (content.length === 0) {
    //   setContent((e) => [
    //     ...e,
    //     { id: inputs.id, name: inputs.name, message: inputs.message, date: inputs.date },
    //   ]);
    // } else {
    //   const updateItem = content.map((e) => {
    //     console.log(e);
    //     console.log(inputs);
    //     return e.id === inputs.id ? inputs : dateObj;
    //   });
    //   console.log(updateItem);
    //   setContent(updateItem);
    // }
    // console.log(updateItem);

    console.log(location.detail);
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

    // setContent(content.map((e) => (e.id === dateObj.id ? { ...e, dateObj } : e)));

    // setContent((e) => [
    //   ...e,
    //   e.map((item) =>
    //     item.id === inputs.id
    //       ? {
    //           ...item,
    //           ['id']: inputs.id,
    //           ['name']: inputs.name,
    //           ['message']: inputs.message,
    //           ['date']: inputs.date,
    //         }
    //       : inputs
    //   ),
    // ]);
    // content.map((x) =>
    //   x.id === inputs.id
    //     ? {
    //         name: inputs.name,
    //         message: inputs.message,
    //         date: inputs.date,
    //       }
    //     : inputs
    // );

    history.push('/');
  };
  useEffect(() => {
    if (location.state !== undefined) {
      // setContent((prev)=>{
      //   return {...prev,
      //     name: location.state.name,
      //     message: location.state.message,
      //     date: location.state.date,
      //   }
      // })
      console.log(location.state);
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
    console.log(content);
  }, [content]);
  return (
    <div className='col-md-7'>
      <div className='contact-wrap w-100 p-md-5 p-4'>
        <h3 className='mb-4'>To-Do</h3>
        {/* <div id='form-message-warning' className='mb-4'></div>
        <div id='form-message-success' className='mb-4'>
          Your message was sent, thank you!
        </div> */}
        <form
          // method='POST'
          id='contactForm'
          name='contactForm'
          className='contactForm'
          // novalidate='novalidate'
          onSubmit={handleSubmit}
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
                  // value={location.state === undefined ? inputs.name : location.state.name}
                  value={name}
                  placeholder='텍스트 입력'
                  onChange={handleChage}
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
                  value={message}
                  // value={location.state === undefined ? inputs.message : location.state.message}
                  placeholder='텍스트 입력'
                  style={{ resize: 'none' }}
                  onChange={handleChage}
                ></textarea>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='form-group0'>
                {/* <label className='label' for='subject'> */}
                <label className='label' htmlFor='subject'>
                  Due Date (Option)
                </label>
                {/* <DayPicker
                  locale={ko}
                  // mode='single'
                  // onSelect={setSelected}
                  // style={{ lineHeight: 'none' }}
                /> */}
                {/* <DayPickerInput
                  inputProps={{ readOnly: true }}
                  placeholder='DD/MM/YYYY'
                  format='DD/MM/YYYY'
                /> */}
                <DatePicker
                  className='form-control'
                  // selected={selected}
                  // value={selected}
                  // value={location.state === undefined ? inputs.date : location.state.date}
                  value={date}
                  name='date'
                  dateFormat='yyyy.MM.dd'
                  // onChange={(date: Date) => setStartDate(date)}
                  // onChange={(date) => onChange(date)}
                  onChange={onChange}
                />
                {/* <input
                  type='text'
                  className='form-control'
                  name='subject'
                  id='subject'
                  value={subject}
                  placeholder='날짜 입력'
                  onChange={handleChage}
                /> */}
              </div>
            </div>

            <div className='col-md-12'>
              <div className='form-group'>
                <button type='submit' className='btn btn-primary'>
                  저장 버튼
                </button>
                {/* <div className='submitting'></div> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContent;

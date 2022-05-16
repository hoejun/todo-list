// import React, { useEffect, useState } from 'react';
// // import './App.css';
// import './todo.css';
// import API from './api/request';
// import Header from './components/Header';
// import AppTemplate from './components/Apptemplate';

// function App() {
//   const [icon, setIcon] = useState('');
//   const TestAPI = async () => {
//     const data = await API.getWeather();
//     console.log(data.data);
//     // console.log(data.data.daily[0].)
//     setIcon(data.data.daily[0].weather[0].icon);
//   };

//   useEffect(() => {
//     TestAPI();
//   }, []);
//   return (
//     <>
//       {/* <div id='myDIV' className='header'>
//         <h2>My To Do List</h2>
//         <input type='text' id='myInput' placeholder='Title...' />
//         <span className='addBtn'>Add</span>
//       </div>

//       <ul id='myUL'>
//         <li>Hit the gym</li>

//         <li className='checked'>
//           <input type='checkbox' name='color' value='blue' />
//           Pay bills
//           <span className='close'>x</span>
//         </li>
//         <li>Meet George</li>
//         <li>Buy eggs</li>
//         <li>Read a book</li>
//         <li>Organize office</li>
//       </ul> */}
//       <div className='inner'>
//         {/* <!-- 헤더 --> */}
//         {/* <header>
//           <span className='material-icons header-icon'>drive_file_rename_outline</span>
//           <h1>TO-DO LIST</h1>
//         </header> */}

//         <div>
//           <h1 className='card-heading'>THIS WEEK</h1>
//           <div style={{ marginTop: '-20px' }}>신나는 일주일 계획합시다!</div>
//         </div>
//         <div>
//           <h2>이번주 날씨</h2>
//           <div>d</div>
//           <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
//         </div>
//         {/* <!-- 본문 --> */}
//         <div>
//           {/* <!-- 전체/진행중/완료 조회 --> */}
//           <div className='searchBox'>
//             <h2>이번주 To-Do</h2>
//             {/* <input type='button' className='searchBtn btn-all' value='전체 : 2' />
//             <input type='button' className='searchBtn btn-before' value='진행중 : 1' />
//             <input type='button' className='searchBtn btn-after' value='완료 : 1' /> */}
//           </div>

//           {/* <!-- Todo-List --> */}
//           <div className='listBox'>
//             {/* <!-- 작성하기 --> */}
//             <div className='addBox'>
//               <button style={{ width: '100%', height: '100%' }}>추가 버튼</button>
//               {/* <div className='addBox_inner'>
//                 <input
//                   type='text'
//                   className='addTxt'
//                   placeholder='새로 작성하기'
//                   style={{ borderBottom: '1px solid rgb(163, 155, 155)' }}
//                 />
//                 <input type='button' className='addBtn' value='+' />
//               </div> */}
//             </div>

//             {/* <!-- 목록 --> */}
//             <div className='listBox_inner'>
//               <div className='list'>
//                 <label className='listLb' style={{ textDecoration: 'line-through' }}>
//                   <input type='checkbox' className='listCheck' />
//                   sdfsdf
//                 </label>
//                 <button className='delBtn'>x</button>
//               </div>
//               <div className='list'>
//                 <label className='listLb'>
//                   <input type='checkbox' className='listCheck' />
//                   sdf
//                 </label>
//                 <button className='delBtn'>x</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

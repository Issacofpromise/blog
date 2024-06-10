import './App.css';import { useState } from 'react';
import { useRef } from 'react';

function App() {  let inputRef_1 = useRef(null);  let inputRef_2 = useRef(null);
  let post = '라멘 맛집';  let [moda_1, dex_1] = useState('');
  let [a, b] = useState([]);let [modal, setModal] =  useState(false);
let [moda, dex] = useState(0); let [따봉, 변경] = useState([]);
let inc = (d) => { let new따봉 = [...따봉]; new따봉[d] += 1;변경(new따봉)}
let [tim, tamp] = useState([]); let [moda_2, dex_2] = useState('');
let te = new Date(); let da = `${te.getFullYear()}-${te.getMonth() + 1}-${te.getDate()}  
  ${te.getHours()}:${te.getMinutes()}:${te.getSeconds()}`;
  return (
    <div className="App">
    <div className="black-nav"><h4>블로그</h4></div>
        <h4 style={{textAlign:'center', fontSize : '20px'}}>{post}</h4> 
<button onClick={() => {
let data = a.map((c, i) => ({ a: c, 따봉: 따봉[i], tim: tim[i],moda:i }));  
  data.sort((x, y) => x.tim.localeCompare(y.tim));
  b(data.map(x => x.a));변경(data.map(x => x.따봉));dex(data.findIndex(x => x.moda === moda));
  tamp(data.map(x => x.tim)) }}>date기준 오름차순</button>        
 {a.map((c,i)=>{ return ( <div className="list" key={i}>
 <h4 onClick={()=>{console.log(i); dex(i);setModal(!modal); 
  inputRef_2.current.value = c}}>{c.substring(0, 50)}
 <span onClick={(w)=>{console.log('i',i); w.stopPropagation(); inc(i)}}>👍</span>{따봉[i]}</h4>
  <p>{tim[i]}</p><button onClick={() => {console.log(i); a.splice(i, 1);b(a);
    dex(moda-1);따봉.splice(i, 1);변경(따봉);   if (moda == 0) { setModal(false)
    }}}>삭제</button></div> ) })}
  <input ref={inputRef_1} onChange={w=>{ dex_1(w.target.value)}}/>
  <button onClick={() => {console.log('moda_1',moda_1); if (moda_1 !== '') { 
    a.unshift(moda_1);b(a);변경([0, ...따봉]); dex(moda+1);tamp([da, ...tim]);dex_1('');
    inputRef_1.current.value = ''}}}>댓글달기 </button>  
  <input ref={inputRef_2} onChange={w=>{ dex_2(w.target.value)}} />
  <button onClick={() => {if (moda_2 !== '') { 
    let ne = [...a]; ne[moda] = moda_2;b(ne); dex_2('');inputRef_2.current.value = ''}}}>내용수정</button> 
 {modal == true ? <Modal color={'#FCE2DA'} a={a} b={b} i={moda} tim={tim}/> : null}
    </div>
  )}; 
  let Modal = (s) =>{ return ( <div className="modal" style={{ background : s.color }}> 
 <h4>{s.a[s.i]}</h4><p>{s.tim[s.i]}</p></div>  )};  

export default App;

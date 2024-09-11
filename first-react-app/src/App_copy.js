import { useState } from 'react';
import './App.css';
import MemberList from './components/MemberList';

function App() {
  //const [기초상태, 변경될상태] = useState(기초상태값);
  const [isActive, setIsActive] = useState(false);

  const arr = [1,2,3,4,5];

  const handleClick = () => {
    alert(isActive ? 'true' : 'false');
    setIsActive(!isActive);
  };

  const handleClick2 = () => {
    alert(isActive);
    setIsActive(!isActive);
  };
  
  return (
    <>
    {/** 
     * 1. 컴포넌트나 태그를 여러개 사용할 때는 최상위 부모 태그로 감싸줘야한다.
     * <>,</>sk <Fragment></Fragment>나 <div></div>로 묶어준다.
     * 주로 <>,</> 를 사용한다.
     */}
    {/**
      * 2. JavaScript 문법(변수, 메소드, 표현식)을 사용할 때는 중괄호({})블록으로 묶어서 사용한다.
      *  if문은 조건문으로 사용할 수 없고 삼항 연산자를 사용해야한다.
    */}

      {arr && arr.map(num => <p>{num}</p>)}
      {/** 3. 이벤트나 태그의 속성 값들은 카멜케이스로 저장한다. */}
      {isActive 
      // 원래꺼
      // ? <p onClick={() => alert('true')} style={{color: 'green', backgroundColor: 'gray'}}>true</p> 
      // : <p onClick={() => alert('false')} style={{color: 'red', backgroundColor: 'yellow'}}>false</p>}
      // 바꾸는 방법 1
      // ? <p onClick={() => {alert(isActive); setIsActive(!isActive);}} style={{color: 'green', backgroundColor: 'gray'}}>true</p> 
      // : <p onClick={() => {alert(isActive); setIsActive(!isActive);}} style={{color: 'red', backgroundColor: 'yellow'}}>false</p>}
      // 바꾸는 방법 2
        ? <p onClick={handleClick} style={{color: 'green', backgroundColor: 'gray'}}>true</p> 
        : <p onClick={handleClick} style={{color: 'red', backgroundColor: 'yellow'}}>false</p>}
        {/** 4. html의 class 속성은 className으로 지정한다. */}
        <div className='App'>
          <p>JSX</p>
        </div>
        {/** 5. JSX에서는 닫는 태그를 생략하면 에러가 발생한다.
         *      html에서 닫는 태그 없는 태그들도 JSX에서는 닫는 태그로 닫아줘야한다.
         */}
         <input type='text' value={arr[0]}></input>
         {/** 6. 주석은 중괄호 안에 슬래시 별 별 슬래시 */}
    </>
  );
}

export default App;

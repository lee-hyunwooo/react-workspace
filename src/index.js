import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Count from './js/Count';
import ToggleButton from './js/ToggleButton';
import IndexExample from './js/IndexExample';
import ImageChange from './js/ImageChange';
import ObjectExample from './js/ObjectExample';
import OldComponent from './js/OldComponent';
import Animal from './js/Animal';
import TimerCount from './js/TimerCount';
import CountPre from './js/CountPre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App /> react에서 주석은 {/ * * /} 표기함 */}
    {/*<Count /> */}
    {/*<ToggleButton />*/}
    {/*<IndexExample />*/}
    {/*<ImageChange />*/}
    {/*<ObjectExample />*/}
    {/*<Animal />*/}
    {/*<TimerCount />*/}
    <CountPre />
  </React.StrictMode>
);

reportWebVitals();

//<React.StrictMode> : react 내부에서 잠재적인 문제가 있는지 알아내기 위한 도구

//reportWebVitals(); : react 성능 측정하기 위한 메서드
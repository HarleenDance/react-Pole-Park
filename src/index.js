import React from 'react';
import ReactDOM from 'react-dom/client';
// 先导入 antd 样式文件
// https://github.com/ant-design/ant-design/issues/33327
import 'antd/dist/antd.min.css'
// 再导入全局样式文件，防止样式覆盖！
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


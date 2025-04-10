// src/components/GNB.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function GNB() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/login">로그인</Link></li>
        <li><Link to="/signup">회원가입</Link></li>
        {/* 필요하면 더 추가 */}
      </ul>
    </nav>
  );
}
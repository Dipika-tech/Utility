import React from 'react';
import { useOutletContext } from "react-router-dom";


export default function About() {
  const [mode] = useOutletContext();

  return (
    <div className="d-flex align-items-center justify-content-center"
    style={{color: mode==='light'?'black':'white'}}>
    <div className="text-center">
    <h1 className="display-2 fw-bold">About Us</h1>
    <p className="fs-4">TextUtils gives you a way to analyze your text quickly and efficiently. TextUtils is a free charachter counter tool that provides instant character count & word count statistics for a given text.</p>
    </div>
    </div>
  );
}

import React from 'react';
import { useTranslations } from 'context-multi-language';
import './App.css';

function App() {
  const { t, changeLanguage, languages } = useTranslations();

  return (
    <div className="App">
      <div className="card">
        <Input label={t?.phoneNumber} />
        <Input label={t?.password} />
        <div className="button">
          <span className="button-title">{t?.signIn}</span>
        </div>
        <div className="languageGroup">
          {languages?.map((lang) => (
            <div className="language" onClick={() => changeLanguage(lang)}>
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Input = ({ label }: { label: string }) => (
  <div className="inputContainer">
    <span className="label">{label}</span>
    <input className="input" />
  </div>
);

export default App;

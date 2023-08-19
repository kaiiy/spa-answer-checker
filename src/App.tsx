import { Route, Routes, useNavigate, MemoryRouter } from 'react-router-dom';
import { useState, FC } from 'react';
import { AESHelper } from "./crypt"

const ANSWER_CRYPTO = "U2FsdGVkX1+TvJuAYndt802ApIma3Y0mXAr0wK30VJg="

const Home: FC = () => {
  const navigate = useNavigate()
  const [userText, setUserText] = useState("world");

  return (
    <>
      <div>Home Page</div>
      <hr />
      <div>
        <label>解答を入力:</label>
        <input
          type="text"
          value={userText}
          onChange={event => setUserText(event.target.value)}
        />
      </div>
      <button onClick={() => {
        const decResult = AESHelper.decrypt(ANSWER_CRYPTO, userText)
        decResult.success && navigate(decResult.data)
      }} >提出</button >
      <hr />
      <div>正答: hello</div>
    </>
  );
}

const About: FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>About Page</div>
      <hr />
      <button onClick={() => navigate('/')} >Go to Home</button >
    </>
  );
}


export const App = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
}


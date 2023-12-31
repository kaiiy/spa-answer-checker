import { Route, Routes, useNavigate, MemoryRouter } from 'react-router-dom';
import { useState, FC } from 'react';
import { AESHelper } from "./crypt"

const ANSWER_CRYPTO = "U2FsdGVkX1/fhh/meBYqlW5/s39uyWeAz9veAMQRXhU="
const CLEAR_PATH = "/c"

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

const Clear: FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Clear Page</div>
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
        <Route path={CLEAR_PATH} element={<Clear />} />
      </Routes>
    </MemoryRouter>
  );
}


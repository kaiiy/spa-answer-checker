import { Route, Routes, useNavigate, MemoryRouter } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate('/about')} >Go to About</button >
    </>
  );
}

function About() {
  const navigate = useNavigate()
  return (
    <>
      <div>About Page</div>
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


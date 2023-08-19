import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

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
  return <div>About Us</div>;
}


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}


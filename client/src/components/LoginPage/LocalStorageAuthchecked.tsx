import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCheck: React.FC = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const storedId = localStorage.getItem("jobTracker_id");
    if (storedId) {
      try {
        const parsedId = JSON.parse(storedId);
        if (parsedId !== null && parsedId !== "") {
          console.log(`coming data from local storage => ${parsedId}`);
          navigate('/dashboard');
        }else{
            navigate('/login')
            console.log(`login page is coming because we don't have any data in the local storage`);
        }
      } catch (error) {
        console.error("Error parsing stored data:", error);
        navigate('/login')
        console.log(` login page is coming because an error is find in the data `);
      }
    }else{
      navigate('/login')
      console.log(` login page is coming because we don't have the key there`);
    }
  }, [navigate]);

  return null;
};

export default AuthCheck;
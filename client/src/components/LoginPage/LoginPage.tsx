import { useEffect, useState } from 'react';
import { Input, Button, Card, Form, message, Alert, Space } from 'antd';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [form] = Form.useForm(); 
  const [emailValue, setEmailValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => { 
    const storedEmail = localStorage.getItem("jobTracker_id");
    if (storedEmail) {
      try {
        const parsedEmail = JSON.parse(storedEmail);
        if (parsedEmail) {
          console.log(`coming data from local storage => ${parsedEmail}`);
          navigate('/dashboard')  
        }
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
  }, []);

  const reset = form.resetFields;

  const onFinish = (values: any) => {
    console.log('Received Email  form:', values.email);
    setLoading(true);
    axios.post("http://localhost:8111/api/v1/login-or-signup", { email: values.email })
      .then((result) => {
        console.log(result);  
        reset();
        setEmailValue(values.email);
        localStorage.setItem("jobTracker_id", JSON.stringify(values.email));
        navigate('/dashboard');
        void message.success('Submit success!');
      })
      .catch((err) =>{
        console.log(err);
        if (err.message === "Network Error") {
          setErrorMessage('Network Error. Please check your internet connection.');
        }else{
           setErrorMessage('An error occurred while processing your request. Please try again.');
        }
      })
      .finally(()=>{
        setLoading(false);
      })
  } 
      
    return (
      <Card className='login-page-container'>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email address!' },
            ]}
            >
            <Input placeholder="Put your email" />
          </Form.Item>

          {errorMessage ? (
            <Alert
             message=""
             description={errorMessage}
             type="error"
             closable
             onClose={() => setErrorMessage(null)}
            />
          ) : null}
  
          <div className='button-container'>
            <Button type="primary" htmlType="submit" loading={loading}>
              Sign in
            </Button>
          </div>
        </Form>
      </Card>
    );
  };
  
  export default LoginPage;

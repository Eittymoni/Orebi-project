import React from 'react'
import { LockOutlined, UserOutlined,InboxOutlined } from '@ant-design/icons';
import { Button,Form, Input } from 'antd';
import { useState } from "react";
import Container from '../components/Container';

const Registration = () => {
    
    let [fullName, setFullName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [nameerr, setNameErr] = useState('')
    let [emailerr, setEmailErr] = useState("")
    let [passworderr, setPasswordErr] = useState("")

    let handleFullname = (e)=>{
        setFullName(e.target.value);
    }

    let handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    let handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    let handleSubmit = () =>{
        if(!fullName){
            setNameErr("fullname is missing");
        }else if(!email){
            setEmailErr("Email is missing");
        }else if(!password){
            setPasswordErr("password is missing");
        }
    }
  return (
    <Container>
       <div className="w-[30%] mx-auto my-10">
        <h2 className="text-center mb-3">Sign up</h2>
       <Form>
      <Form.Item
        name="username"
      >
        <Input prefix={<UserOutlined />} onChange={handleFullname} placeholder="Username" />
       <p className="text-red-500"> {nameerr}</p>
      </Form.Item>
      <Form.Item
        name="Email"
      >
        <Input prefix={<InboxOutlined />} onChange={handleEmail} placeholder="Email" />
        <p className="text-red-500"> {emailerr}</p>
      </Form.Item>
      <Form.Item
        name="password"
      >
        <Input prefix={<LockOutlined />} type="password" onChange={handlePassword} placeholder="Password" />
        <p className="text-red-500"> {passworderr}</p>
      </Form.Item>
    

      <Form.Item>
        <Button onClick={handleSubmit} block type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
       </div>
    </Container>
  )
}

export default Registration

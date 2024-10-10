
import React from "react";
import styled from "styled-components";

const CTAWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ConsultButton = styled.a`
  border-radius: 100px;
  border: 1px solid #ed1c25;
  color: #ed1c25;
  padding: 8px 35px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
`;

const RegisterButton = styled.a`
  border-radius: 100px;
  background-color: #ed1c25;
  color: #fff;
  padding: 9px 32px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
`;

const CallToAction = () => (
  <CTAWrapper>
    <ConsultButton href="#consult">Tư vấn</ConsultButton>
    <RegisterButton href="#register">Đăng ký</RegisterButton>
  </CTAWrapper>
);

export default CallToAction;

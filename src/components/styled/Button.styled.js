import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};

  color: ${({ color }) => color || "#fff"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const ModeButton = styled.button`
  padding: 15px;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  border: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

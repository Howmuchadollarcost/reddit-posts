import React from 'react';
import styled from 'styled-components';

const Clicker = styled.button`
  background: transparent; 
  display: inline-block;
  height: 38px;
  color: #555;
  font-size: 11px;
  text-align:center;
  font-weight: 600;
  line-height:38px;
  letter-spacing:1px;
  text-decoration:none;
  white-space:nowrap;
  padding: 0 30px;
  border: 1px solid #bbb;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom:1rem;
  outline:none;
  &:active{
      color: #eee;
  }
  @media (max-width:420px)  {
        padding: 0 20px;
        width: 200px;
    }

`;


export default function Button(props) {
    return (
        <Clicker onClick={props.onClick}>{props.name}</Clicker>
    )
}

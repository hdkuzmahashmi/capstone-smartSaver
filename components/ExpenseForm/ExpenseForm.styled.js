import styled from "styled-components";
import Link from "next/link";

export const FormContainer = styled.div`
  max-width: 20rem;
  margin: 0 auto;
  width: 24rem;
`;

export const FormTitle = styled.h1`
  font-weight: bold;
  padding-bottom: 1rem;
  font-size: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-top: 1rem;
`;

export const StyledInput = styled.input`
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
`;

export const StyledTextarea = styled.textarea`
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
`;

export const StyledSelect = styled.select`
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
`;

export const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
  color: gray;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(0, 2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
  color: gray;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(0, 2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

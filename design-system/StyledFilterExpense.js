import styled from "styled-components";

export const commonFilterStyle = `
  padding: 0.2rem;
  margin: 0.3rem;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
  inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
  inset 0 -2px 1px rgba(0, 0, 0, 0.05);
transition: background 0.3s, box-shadow 0.15s;
  color: #777;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  background-color: transparent;

 
  &:hover {
    border: 1px solid #eee;
    border-right: 10px solid ${({ $color }) => $color};
  }

  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  ${commonFilterStyle}
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const CollapseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CollapsiblePanelContainer = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2px 2px;
  overflow: hidden;
  max-height: ${(props) => (props.$collapsed ? "0" : "none")};
  padding: ${(props) => (props.$collapsed ? "0" : "10px")};
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  margin-right: 10px;
  border: 1px solid #1c91e3;
  box-shadow: inset -0.3em -1.1em 0.4em #1c91e3, 0.05em 0.05em 0.15em #78b3e6;
  border-radius: 15px;
  background: linear-gradient(to right, #1c91e3, #78b3e6);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.15s;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: ${(props) => (props.$isCenter ? "center" : "flex-end")};
  position: ${(props) => (props.$isOnImage ? "sticky" : "")};

  &:hover {
    border: 1px solid #1c91e3;
    box-shadow: inset -0.2em -0.1em 0.25em #1c91e3;
  }

  &:focus {
    outline: none;
  }
`;

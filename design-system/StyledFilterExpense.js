import styled from "styled-components";

export const commonFilterStyle = `
  padding: 0.2rem;
  margin: 0.3rem;
  text-align: center;
  border: 1px solid rgba(120, 179, 230, 0.3);
  border-radius: 10px;
  color: #777;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  font-style: italic;
  background-color: transparent;

 
  &:hover {
    box-shadow: 0 2px 10px rgba(120, 179, 230, 0.3),
      0 0 5px rgba(120, 179, 230, 0.2);
  }

  &:focus {
    outline: none;
    border-color: #1c91e3;
    box-shadow: 0 0 5px rgba(120, 179, 230, 0.3);
  }
`;

export const Select = styled.select`
  background-color: transparent;
  ${commonFilterStyle};
  margin-bottom: 10px;
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
  margin: 3px;
  transition: max-height 0.3s ease;
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
  align-self: flex-end;

  &:hover {
    border: 1px solid #1c91e3;
    box-shadow: inset -0.2em -0.1em 0.25em #1c91e3;
  }

  &:focus {
    outline: none;
  }
`;

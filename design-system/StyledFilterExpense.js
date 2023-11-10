import styled from "styled-components";

export const commonFilterStyle = `
  padding: 0.2rem;
  margin: 0.3rem;
  text-align: center;
  border: 1px solid rgba(28, 145, 227, 0.3);
  border-radius: 10px;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  // transition: border-color 0.3s;
  // box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
  //   inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
  //   inset 0 -2px 1px rgba(0, 0, 0, 0.05);

  &:hover {
    /* border-color: #666; */
    box-shadow: 0 2px 10px rgba(28, 145, 227, 0.3),
      0 0 5px rgba(28, 145, 227, 0.2);
  }

  &:focus {
    outline: none;
    border-color: #1c91e3;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Select = styled.select`
  ${commonFilterStyle}
  width: 100%;
`;

export const CollapseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CollapsiblePanelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  transition: max-height 0.3s ease;
  overflow: hidden;
  max-height: ${(props) => (props.collapsed ? "0" : "none")};
  padding: ${(props) => (props.collapsed ? "0" : "10px")};
  /* border: ${(props) =>
    props.collapsed ? "none" : "1px solid rgba(0, 0, 0, 0.2)"};
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(28, 145, 227, 0.3),
    0 0 5px rgba(28, 145, 227, 0.2); */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  margin: 10px;
  border: none;
  border-radius: 15px;
  background: linear-gradient(to right, #1c91e3, #00bfff);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: flex-end;

  &:hover {
    background: linear-gradient(to right, #00bfff, #1c91e3);
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; 
  gap: 5vh;
`;

const TotalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
  color: #333;
`;

const data = {
  labels: ["Red", "Blue", "Yellow", "Purple"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 200],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(224, 176, 255)",
      ],
      hoverOffset: 4,
      borderRadius: 8,
    },
  ],
};

const config = {
    type: 'doughnut',
    data: data,
  };

function Graph() {
  return (
    <GraphContainer>
      <div style={{ position: "relative" }}>
        <Doughnut {...config}></Doughnut>
        <TotalContainer>
          <div>Total</div>
          <div>0 €</div>
        </TotalContainer>
      </div>
      <div>List</div>
    </GraphContainer>
  );
}

export default Graph;

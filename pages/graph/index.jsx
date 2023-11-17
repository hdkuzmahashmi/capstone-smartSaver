import BarChart from "@/components/BarChart";
import DoughnutGraph from "@/components/DoughnutGraph";

function GraphPage() {
  return (
    <>
      <div>
        <DoughnutGraph />
      </div>
  
      <div>
        <BarChart />
      </div>
    </>
  );
}

export default GraphPage;

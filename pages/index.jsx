import styled from "styled-components";
import useSWR from "swr";
import Loading from "@/components/Loading";
import DoughnutGraph from "@/components/DoughnutGraph";
import DashboardExpenses from "@/components/DashboardExpenses";
import BarChart from "@/components/BarChart";
import ViewAllExpenses from "@/components/DashboardViewAllExpenses";
import { StyledHeading } from "@/design-system/StyledViewAllExpenses";

const Dashboard = ({ setToast }) => {
  const { data, error, isLoading } = useSWR("/api/expenses");

  if (isLoading) {
    return <Loading />;
  }
  if (!data) {
    return;
  }
  if (error) {
    setToast(
      true,
      "Something went wrong. Please contact the application administrator.",
      "Error"
    );
    return;
  }

  const lastExpenses = data
    .toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <PageContainer>
      <StyledHeading>Category Expense Summary</StyledHeading>
      <DoughnutGraph />
      <StyledHeading>Last Expenses</StyledHeading>
      <ViewAllExpenses />
      <DashboardExpenses expenses={lastExpenses} />
      <StyledHeading>Monthly Expense Summary</StyledHeading>
      <BarChart />
    </PageContainer>
  );
};

export default Dashboard;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  max-width: 800px;
  margin: auto;
  padding: 1rem;
`;

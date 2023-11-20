import styled from "styled-components";
import useSWR from "swr";
import Loading from "@/components/Loading";
import DoughnutGraph from "@/components/DoughnutGraph";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledIcon } from "@/design-system/StyledIcon";
import { StyledLink } from "@/design-system/StyledLink";
import DashboardExpenses from "@/components/DashboardExpenses";

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
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <PageContainer>
      <DoughnutGraph />
      <StyledContainer $isSpaceBetween $isDashboard>
        <h2>Last Expenses</h2>
        <StyledLink href="/details">
          <StyledIcon icon="material-symbols:history" width="36" />
        </StyledLink>
      </StyledContainer>
      <DashboardExpenses expenses={lastExpenses} />
    </PageContainer>
  );
};

export default Dashboard;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

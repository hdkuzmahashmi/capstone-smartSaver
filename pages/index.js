import ExpenseList from "@/components/ExpenseList";
import styled from "styled-components";

const HomePage = () => {
  return (
    <PageContainer>
      <Title>Smart Saver</Title>
      <ExpenseList />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0077b6;
  text-shadow: 2px 2px 4px #000;
`;

export default HomePage;

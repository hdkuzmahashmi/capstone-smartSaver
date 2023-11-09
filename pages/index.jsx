import ExpenseList from "@/components/ExpenseList";
import styled from "styled-components";

const HomePage = ({ setToast }) => {
  return (
    <PageContainer>
      <ExpenseList setToast={setToast} />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default HomePage;

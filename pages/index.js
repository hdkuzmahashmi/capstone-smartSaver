import ExpenseList from "@/components/ExpenseList";
import styled from "styled-components";

const HomePage = ({ setToast, setToastMessage }) => {
  return (
    <PageContainer>
      <ExpenseList setToast={setToast} setToastMessage={setToastMessage} />
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

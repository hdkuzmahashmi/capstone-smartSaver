import { useRouter } from "next/router";
import useSWR from "swr";
import ExpenseDetail from "@/components/ExpenseDetail";
import Loading from "@/components/Loading";
function DetailPage({ setToast, setToastMessage }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/expenses/${id}`);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    setToastMessage(
      "Something went wrong. Please contact to application administrator.",
      "error"
    );
    setToast();
  }

  if (!data) {
    setToastMessage(
      "Something went wrong, API does not response data. Please contact to application administrator.",
      "warning"
    );
    setToast();
    return;
  }
  return (
    <ExpenseDetail
      expense={data}
      setToast={setToast}
      setToastMessage={setToastMessage}
    />
  );
}

export default DetailPage;

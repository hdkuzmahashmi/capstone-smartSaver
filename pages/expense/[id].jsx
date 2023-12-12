import { useRouter } from "next/router";
import useSWR from "swr";

import ExpenseDetail from "@/components/ExpenseDetail";
import Loading from "@/components/Loading";

function DetailPage({ setToast }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/expenses/${id}`);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    setToast(
      true,
      "Something went wrong, API does not response data. Please contact to application administrator.",
      "error"
    );
    return;
  }

  if (!data) {
    setToast(
      true,
      "Something went wrong, API does not response data. Please contact to application administrator.",
      "warning"
    );
    return;
  }

  return <ExpenseDetail expense={data} setToast={setToast} expid={id} />;
}

export default DetailPage;

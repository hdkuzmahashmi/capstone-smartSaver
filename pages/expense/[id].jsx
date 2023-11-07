import { useRouter } from "next/router";
import useSWR from "swr";
import ExpenseDetail from "@/components/ExpenseDetail";
import Loading from "@/components/Loading";

function DetailPage({ setToast }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/expenses/${id}`);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return;
  }
  return <ExpenseDetail expense={data} setToast={setToast} />;
}

export default DetailPage;

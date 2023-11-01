import { useRouter } from "next/router";
import useSWR from "swr";
import ExpenseDetail from "@/components/ExpenseDetail";
import Loading from "@/design-system/Loading";

function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/expenses/${id}`);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return;
  }
  return <ExpenseDetail expense={data} />;
}

export default DetailPage;

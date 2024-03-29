import { Header } from "@/presentation/components/common/Header";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";

const User = (): JSX.Element => {
  return (
    <DefaultLayout>
      <section>
        <Header>User</Header>
      </section>
    </DefaultLayout>
  );
};

export default User;

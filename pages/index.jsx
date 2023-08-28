import { Header } from "../components/header";
import { UiSelectField } from "../components/uikit/fields/UiSelectField";

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      <UiSelectField
        label="Label"
        placeholder="Placeholder"
        required
        helperText="Helper text"
        options={[
          { label: "Первый label", value: 1 },
          { label: "Второй label", value: 2 },
        ]}
      />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}

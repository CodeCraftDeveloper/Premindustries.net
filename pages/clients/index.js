import Head from "next/head";
import ClientInfo from "../../components/clients/info";

export default function ClientsPage() {
  return (
    <>
      <Head>
        <title>Client Network | Prem Industries India Limited</title>
        <meta
          name="title"
          content="Client Network | Prem Industries India Limited"
        />
        <meta
          name="description"
          content="Explore the B2B client network of Prem Industries India Limited, including public account references, sector-wise client groups, and proof-backed business relationships."
        />
      </Head>
      <ClientInfo />
    </>
  );
}

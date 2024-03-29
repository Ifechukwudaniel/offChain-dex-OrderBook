import type { NextPage } from "next";
import { ContractUI } from "~~/components/scaffold-eth";
import Head from "next/head";

const Debug: NextPage = () => {
  return (
    <>
      <Head>
        <title>Debug Page </title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-6 py-12 px-10 lg:gap-12 w-full max-w-7xl my-0">
          <ContractUI contractName="Bat" />
          <ContractUI contractName="Dai" />
          <ContractUI contractName="Rep" />
          <ContractUI contractName="Usdt" />
          <ContractUI contractName="Wbtc" />
          <ContractUI contractName="Weth" />
          <ContractUI contractName="Zrx" />
        </div>
      </div>
    </>
  );
};

export default Debug;

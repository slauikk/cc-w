import { FC } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PageLayout } from "../../layouts";
import { PageItem } from "../../components/page-item";
import { dataContent } from "./lib/dataContent";

interface ICompositionCC {}

export const CompositionCC: FC<ICompositionCC> = () => {
  return (
    <PageLayout title="Склад ЦК">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  );
};

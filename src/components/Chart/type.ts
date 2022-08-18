export type Props = {
  title: string;
  data: any[];
  date: string[];
};

export type MyDescProps = {
  title: string;
  data: {
    [key: string]: string;
  };
};
export type MyStatProps = {
  title?: string;
  path?: string;
  data?: {
    title: string;
    subTitle: string;
    data: number[];
    units: string;
  }[];
};

export type MyStatTitleProps = {
  title: string;
  subTitle: string;
};

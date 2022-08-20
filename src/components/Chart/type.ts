export type Props = {
  title: string;
  data: any[];
  date: string[];
};

export type MyDescProps = {
  descData: {
    [key: string]: string;
  }[]
};
export type MyStatProps = {
  expand?: boolean;
  title?: string;
  path?: string;
  num?: number;
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

export type BarProps = {
  title: string;
  data: {
    [key in string]: number
  }
}
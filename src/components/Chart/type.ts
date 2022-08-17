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
  title: string;
  data: number[];
};

export type MyStatTitleProps = {
  title: string;
  subTitle: string;
};

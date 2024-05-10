import * as data from "./postsData.ts";

export * from "./postsData.ts";

export const getRandom = <T>(array: T[]) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

export const getMultipleRandom = <T>(array: T[], amount: number) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};

export type TitleType = {
  type: "title";
  body: string;
};

export type ParagraphType = {
  type: "paragraph";
  body: string[];
};

export type ImageType = {
  type: "image";
  body: string;
};

export type PostData = TitleType | ParagraphType | ImageType;

export const generatePost = (): PostData[] => {
  return [
    {
      type: "title",
      body: data.titles[0],
    },
    {
      type: "paragraph",
      body: getMultipleRandom(data.paragraphs, 2),
    },
    {
      type: "image",
      body: getRandom(data.images),
    },
    {
      type: "title",
      body: data.titles[1],
    },
    {
      type: "paragraph",
      body: getMultipleRandom(data.paragraphs, 1),
    },
    {
      type: "title",
      body: data.titles[2],
    },
    {
      type: "paragraph",
      body: getMultipleRandom(data.paragraphs, 1),
    },
  ];
};

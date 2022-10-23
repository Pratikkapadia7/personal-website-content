export interface ColorType {
  color: string;
  backgroundColor: string;
}

export interface BlogTagsTypeProps {
  PrimaryPurple: ColorType;
  Indigo: ColorType;
  Pink: ColorType;
  BlueLight: ColorType;
  GrayBlue: ColorType;
  Orange: ColorType;
  Rose: ColorType;
  SuccessGreen: ColorType;
}

interface contentType {
  id: string;
  date: string;
  type: "TITLE" | "LIST";
  title: string;
  subTitle: string;
  blogHref: string;
  blogType: "title" | "list";
  blogTags: Array<{ text: string; blogTagKey: keyof BlogTagsTypeProps }>;
  imageData: {
    url: string;
    altData: string;
  };
}

const content: Array<contentType> = [
  {
    id: "content-01",
    date: "20 Jan 2022",
    title: "UX review presentations",
    subTitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    blogHref: "/",
    type: "LIST",
    blogTags: [
      { text: "Design", blogTagKey: "PrimaryPurple" },
      { text: "Research", blogTagKey: "Indigo" },
      { text: "Presentation", blogTagKey: "Pink" },
    ],
    blogType: "list",
    imageData: {
      url: "/images/main-blog-wallpaper.jpg",
      altData: "Main Blog Wallpaper",
    },
  },
  {
    id: "content-02",
    type: "TITLE",
    date: "23 Sept 2022",
    title: "Corezoid Architecture Interface",
    subTitle:
      "How do you initiate Corezoid and expose its endpoints to outside environment?",
    blogHref: "/",
    blogTags: [
      { text: "Design", blogTagKey: "PrimaryPurple" },
      { text: "Research", blogTagKey: "Indigo" },
      { text: "Architecture", blogTagKey: "BlueLight" },
    ],
    blogType: "title",
    imageData: {
      url: "images/corezoid-wallpaper.jpg",
      altData: "Corezoid Wallpaper",
    },
  },
];
export default content;

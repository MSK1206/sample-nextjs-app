export type BlogTypes = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  author: [
    {
      name: string;
    },
    {
      authorimg: {
        url: string;
        width: number;
        height: number;
      };
    }
  ];
  description: string;
  body: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
  };
  categories: [
    {
      name: string;
    }
  ];
};

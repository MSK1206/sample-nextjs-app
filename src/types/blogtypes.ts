export type BlogTypes = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  body: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
  };
  category: [
    {
      name: string;
    },
    {
      name: string;
    },
    {
      name: string;
    },
    {
      name: string;
    },
    {
      name: string;
    }
  ];
};

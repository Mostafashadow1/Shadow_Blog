// author
export type Author = {
  name: string;
  id: string;
  bio: string;
  avatar: any;
};
// Categories
export type Categories = {
  author?: Author;
  description?: string;
  href?: string;
  id?: string;
  image?: any;
  name?: string;
  createdAt?: string;
};
// articles
export type Articles = {
  createdAt: string;
  description: string;
  href: string;
  image: any;
  title?: string;
  author: Author;
  content?: any;
};

// Categories Props
export type CategoriesProps = {
  categories: Categories[];
};
// Category Props
export type CategoryProps = {
  category: Categories;
};

// Banner Props
export type BannerProps = {
  title1: string;
  title2: string;
  description?: string;
  image: any;
  buttonCategory?: boolean;
};

// articles Props
export type articlesProps = {
  articles: Articles[];
};

// article Props
export type articleProps = {
  article: Articles;
};

// details articles
export type articleDetailsProps = {
  articleDetails: Articles;
};

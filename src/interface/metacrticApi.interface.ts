export interface Game {
  description: string;
  releaseDate: string;
  score: number;
  slug: string;
  title: string;
  image: string;
}

export interface GameItem {
  description: string;
  slug: string;
  releaseDate: string;
  image: {
    bucketType: string;
    bucketPath: string;
  };
  criticScoreSummary: {
    score: number;
  };
  title: string;
}

export interface GameDetails {
  img: string;
  title: string;
  slug: string;
  description: string;
  score: number;
  reviews: Review[];
}

export interface Image {
  typeName: string;
  bucketType: string;
  bucketPath: string;
}

export interface Review {
  quote: string;
  score: number;
  date: string;
  publicationName: string;
  author: string;
}

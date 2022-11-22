type User = {
  id: number;
  name: string;
}

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type Reviews = Review[];

export type ReviewFormData = {
  rating: number | null;
  comment: string;
}

export type NewReview = {
  rating: number;
  comment: string;
}


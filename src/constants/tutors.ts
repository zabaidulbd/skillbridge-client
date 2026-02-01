export interface Tutor {
  id: string;
  name: string;
  subject: string;
  category: string;
  rating: number;
  price: number;
  image: string;
  reviews: number;
  description: string;
}

export const TUTORS_DATA: Tutor[] = [
  {
    id: "1",
    name: "John Doe",
    subject: "Mathematics",
    category: "Science",
    rating: 4.8,
    price: 25,
    image:
      "https://img.freepik.com/free-photo/smiling-young-handsome-man-holding-note-pad-pencil-looking-camera-isolated-blue-background_141793-136849.jpg",
    reviews: 120,
    description:
      "Expert in Calculus and Algebra with 5 years of teaching experience.",
  },
  {
    id: "2",
    name: "Jane Smith",
    subject: "Physics",
    category: "Science",
    rating: 4.9,
    price: 30,
    image:
      "https://img.freepik.com/free-photo/smiling-young-handsome-man-holding-note-pad-pencil-looking-camera-isolated-blue-background_141793-136849.jpg",
    reviews: 85,
    description:
      "PhD in Physics, helping students simplify complex quantum theories.",
  },
  {
    id: "3",
    name: "Sarah Khan",
    subject: "English Literature",
    category: "Arts",
    rating: 4.7,
    price: 20,
    image:
      "https://img.freepik.com/free-photo/smiling-young-handsome-man-holding-note-pad-pencil-looking-camera-isolated-blue-background_141793-136849.jpg",
    reviews: 50,
    description:
      "Passionate about literature and helping students improve writing skills.",
  },
  {
    id: "4",
    name: "Alex Reed",
    subject: "Computer Science",
    category: "Technology",
    rating: 5.0,
    price: 40,
    image:
      "https://img.freepik.com/free-photo/smiling-young-handsome-man-holding-note-pad-pencil-looking-camera-isolated-blue-background_141793-136849.jpg",
    reviews: 200,
    description:
      "Full-stack developer teaching Next.js and Node.js from scratch.",
  },
];


export interface Course {
  id: string;
  title: string;
  thumbnail: string;
  module?: string;
  progress?: number;
  lessonsLeft?: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  rating?: number;
  reviewsCount?: string;
  price?: string;
  originalPrice?: string;
  instructor?: Instructor;
}

export interface Instructor {
  name: string;
  role: string;
  avatar: string;
  students: string;
  courses: number;
}

export interface Activity {
  id: string;
  type: 'completed' | 'badge' | 'streak';
  title: string;
  time: string;
  icon: string;
  color: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

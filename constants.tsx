
import { Course, Activity, Achievement } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced Node.js Patterns',
    thumbnail: 'https://picsum.photos/seed/node/600/400',
    module: 'Module 4',
    progress: 75,
    lessonsLeft: '3 Lessons left',
    duration: '12h',
    level: 'Advanced',
    category: 'Backend',
    price: '$19.99',
    originalPrice: '$89.99'
  },
  {
    id: '2',
    title: 'React Native Basics',
    thumbnail: 'https://picsum.photos/seed/react/600/400',
    module: 'Module 1',
    progress: 10,
    lessonsLeft: 'Introduction',
    duration: '8h',
    level: 'Beginner',
    category: 'Mobile'
  },
  {
    id: '3',
    title: 'Python for Data Science',
    thumbnail: 'https://picsum.photos/seed/python/600/400',
    duration: '24h',
    level: 'Intermediate',
    category: 'Data Science',
    rating: 4.8,
    reviewsCount: '1.2k'
  },
  {
    id: '4',
    title: 'Full Stack with Next.js',
    thumbnail: 'https://picsum.photos/seed/nextjs/600/400',
    duration: '12h',
    level: 'Intermediate',
    category: 'Frontend'
  }
];

export const ACTIVITIES: Activity[] = [
  { id: '1', type: 'completed', title: "Completed 'Intro to GraphQL'", time: '2 hours ago', icon: 'check', color: 'bg-green-500' },
  { id: '2', type: 'badge', title: "Earned 'Bug Hunter' Badge", time: 'Yesterday', icon: 'emoji_events', color: 'bg-primary' },
  { id: '3', type: 'streak', title: "Reached 10 Day Streak", time: '2 days ago', icon: 'local_fire_department', color: 'bg-orange-500' }
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: '1', title: 'Python Master', description: 'Completed Advanced Python', icon: 'emoji_events', color: 'text-yellow-500', bgColor: 'bg-yellow-500/20' },
  { id: '2', title: 'Bug Hunter', description: 'Fixed 50 practice bugs', icon: 'bug_report', color: 'text-red-500', bgColor: 'bg-red-500/20' },
  { id: '3', title: 'JS Ninja', description: 'Mastered ES6+', icon: 'javascript', color: 'text-yellow-400', bgColor: 'bg-yellow-300/20' },
  { id: '4', title: 'Git Guru', description: '100 commits pushed', icon: 'call_split', color: 'text-orange-500', bgColor: 'bg-orange-500/20' }
];

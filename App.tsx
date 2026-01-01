
import React, { useState } from 'react';
import Home from './screens/Home';
import Explore from './screens/Explore';
import Profile from './screens/Profile';
import CourseDetails from './screens/CourseDetails';
import Lesson from './screens/Lesson';

type Screen = 'home' | 'explore' | 'profile' | 'course-details' | 'lesson';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const navigateTo = (screen: Screen, courseId?: string) => {
    if (courseId) setSelectedCourseId(courseId);
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigate={(s, id) => navigateTo(s, id)} />;
      case 'explore':
        return <Explore onNavigate={(s, id) => navigateTo(s, id)} />;
      case 'profile':
        return <Profile onNavigate={(s, id) => navigateTo(s, id)} />;
      case 'course-details':
        return <CourseDetails onNavigate={(s, id) => navigateTo(s, id)} onBack={() => navigateTo('home')} />;
      case 'lesson':
        return <Lesson onBack={() => navigateTo('course-details')} />;
      default:
        return <Home onNavigate={(s, id) => navigateTo(s, id)} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display">
      <div className="max-w-md mx-auto shadow-2xl min-h-screen relative overflow-hidden flex flex-col">
        <main className="flex-1 overflow-y-auto no-scrollbar pb-20">
          {renderScreen()}
        </main>
        
        {/* Persistent Bottom Nav - Hidden on Lesson/CourseDetails for better immersion */}
        {['home', 'explore', 'profile'].includes(currentScreen) && (
          <nav className="fixed bottom-0 max-w-md w-full bg-card-light/95 dark:bg-card-dark/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 pb-safe z-50">
            <div className="flex justify-around items-center h-16">
              <button 
                onClick={() => navigateTo('home')}
                className={`flex flex-col items-center justify-center gap-1 w-full ${currentScreen === 'home' ? 'text-primary' : 'text-slate-400'}`}
              >
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: `'FILL' ${currentScreen === 'home' ? 1 : 0}` }}>home</span>
                <span className="text-[10px] font-medium">Home</span>
              </button>
              <button 
                onClick={() => navigateTo('explore')}
                className={`flex flex-col items-center justify-center gap-1 w-full ${currentScreen === 'explore' ? 'text-primary' : 'text-slate-400'}`}
              >
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: `'FILL' ${currentScreen === 'explore' ? 1 : 0}` }}>search</span>
                <span className="text-[10px] font-medium">Browse</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1 w-full text-slate-400">
                <span className="material-symbols-outlined text-[24px]">school</span>
                <span className="text-[10px] font-medium">Learning</span>
              </button>
              <button 
                onClick={() => navigateTo('profile')}
                className={`flex flex-col items-center justify-center gap-1 w-full ${currentScreen === 'profile' ? 'text-primary' : 'text-slate-400'}`}
              >
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: `'FILL' ${currentScreen === 'profile' ? 1 : 0}` }}>person</span>
                <span className="text-[10px] font-medium">Profile</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { BookOpen, Sparkles, Award, Menu, X, Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/audioAmbience';

interface NavbarProps {
  activeTab: 'home' | 'works' | 'knowledge' | 'games' | 'exams' | 'achievements';
  setActiveTab: (tab: 'home' | 'works' | 'knowledge' | 'games' | 'exams' | 'achievements') => void;
  onOpenFortune: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenFortune }) => {
  const { stats } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'works', label: 'Kho tác phẩm' },
    { id: 'knowledge', label: 'Thư viện' },
    { id: 'games', label: 'Trò chơi' },
    { id: 'exams', label: 'Thử thách' },
    { id: 'achievements', label: 'Thành tích' },
  ] as const;

  const handleNavClick = (id: typeof activeTab) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    soundEngine.toggleAmbience((playing) => {
      setIsAudioPlaying(playing);
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFF9F0]/95 backdrop-blur-md border-b border-[#25234A]/10 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left font-serif-literary text-lg sm:text-xl font-bold tracking-tight text-[#25234A] hover:text-[#7C3AED] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-[#8B5CF6] text-white flex items-center justify-center shadow-xs">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="hidden sm:inline">VĂN HỌC 12 – KẾT NỐI TRI THỨC</span>
          <span className="sm:hidden">VĂN HỌC 12</span>
        </button>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#25234A]/80">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1.5 border-b-2 text-sm font-bold cursor-pointer ${
                  isActive
                    ? 'text-[#25234A] border-[#8B5CF6]'
                    : 'text-[#25234A]/70 hover:text-[#25234A] border-transparent'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons: Sound, Fortune Card, Points */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Study Ambience Sound Toggle */}
          <button
            onClick={handleToggleSound}
            className={`p-2 rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer border ${
              isAudioPlaying
                ? 'bg-emerald-100 text-emerald-800 border-emerald-300 ring-2 ring-emerald-400/20 shadow-xs'
                : 'bg-white border-[#25234A]/15 text-[#25234A]/70 hover:text-[#25234A] hover:bg-[#25234A]/5'
            }`}
            title={isAudioPlaying ? 'Tắt tiếng mưa rơi thư viện' : 'Bật tiếng mưa rơi thư giãn khi học'}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-emerald-600 animate-pulse" />
                <span className="hidden xl:inline">Tiếng mưa êm</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-[#25234A]/50" />
                <span className="hidden xl:inline">Nhạc đọc sách</span>
              </>
            )}
          </button>

          {/* Gieo Quẻ Button */}
          <button
            onClick={onOpenFortune}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#F5C76A] to-[#FBBF24] text-[#25234A] text-xs font-bold hover:shadow-md transition-all cursor-pointer shadow-2xs border border-[#F5C76A]"
            title="Gieo quẻ may mắn và nhận danh ngôn truyền cảm hứng"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#25234A]" />
            <span className="hidden sm:inline">Gieo quẻ</span>
          </button>

          {/* Points Pill */}
          <button
            onClick={() => handleNavClick('achievements')}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25234A] text-[#FFF9F0] text-xs font-bold hover:bg-[#343163] transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <Award className="w-3.5 h-3.5 text-[#F5C76A]" />
            <span>{stats.totalPoints}đ</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#25234A] hover:bg-[#25234A]/10 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#25234A]/15 bg-[#FFF9F0] px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-colors cursor-pointer ${
                activeTab === link.id
                  ? 'bg-[#A78BFA]/25 text-[#25234A]'
                  : 'text-[#25234A]/80 hover:bg-[#25234A]/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#25234A]/10 flex items-center justify-between px-2 text-sm">
            <button
              onClick={() => {
                onOpenFortune();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 font-bold text-[#D97706]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Gieo quẻ may mắn</span>
            </button>
            <span className="font-bold text-[#25234A] flex items-center gap-1 bg-[#25234A]/5 px-3 py-1 rounded-lg">
              <Award className="w-4 h-4 text-[#F5C76A]" />
              {stats.totalPoints} điểm
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

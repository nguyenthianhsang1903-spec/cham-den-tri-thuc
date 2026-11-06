import React from 'react';
import { BookMarked, Heart, Sparkles, Feather } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'home' | 'works' | 'knowledge' | 'games' | 'exams' | 'achievements') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#25234A] text-[#FFF9F0] border-t border-[#3B3868] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Main Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Feather className="w-6 h-6 text-[#F5C76A]" />
              <h3 className="font-serif-literary text-xl font-bold tracking-wide text-[#FFF9F0]">
                VĂN HỌC 12 – CHẠM ĐẾN TRI THỨC
              </h3>
            </div>
            <p className="text-sm text-[#FFF9F0]/80 leading-relaxed max-w-md">
              Sản phẩm số học tập môn Ngữ văn 12 – Bộ sách <strong>Kết nối tri thức với cuộc sống</strong>.
              Nơi giao thoa giữa cảm thụ văn học nghệ thuật và trải nghiệm tương tác số hiện đại.
            </p>
            <div className="pt-2">
              <p className="text-xs italic text-[#F5C76A]/90 font-serif-literary leading-relaxed border-l-2 border-[#F5C76A] pl-3 py-0.5">
                “Mỗi tác phẩm là một thế giới, mỗi lần đọc là một hành trình khám phá.”
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#A78BFA]">
              Phân hệ nội dung
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF9F0]/70">
              <li>
                <button
                  onClick={() => onNavigate('works')}
                  className="hover:text-[#FFF9F0] transition-colors"
                >
                  Kho tàng tác phẩm SGK 12
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('knowledge')}
                  className="hover:text-[#FFF9F0] transition-colors"
                >
                  Thư viện kỹ năng & Sổ tay tu từ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('games')}
                  className="hover:text-[#FFF9F0] transition-colors"
                >
                  5 Trò chơi văn học tương tác
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('exams')}
                  className="hover:text-[#FFF9F0] transition-colors"
                >
                  Đề luyện thi & Trắc nghiệm tự chấm
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('achievements')}
                  className="hover:text-[#FFF9F0] transition-colors"
                >
                  Bảng vàng thành tích & Huy hiệu
                </button>
              </li>
            </ul>
          </div>

          {/* Creators info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#A78BFA]">
              Người thực hiện dự án
            </h4>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#FFF9F0]">
                <Sparkles className="w-4 h-4 text-[#F5C76A]" />
                <span className="font-semibold">Lưu Gia Linh</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#FFF9F0]">
                <Sparkles className="w-4 h-4 text-[#F5C76A]" />
                <span className="font-semibold">Nguyễn Thị Ánh Sáng</span>
              </div>
              <p className="text-xs text-[#FFF9F0]/60 pt-1">
                Dự án sáng tạo giáo dục số môn Ngữ văn lớp 12 phục vụ học sinh và giáo viên toàn quốc.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9F0]/60">
          <p>© 2026 VĂN HỌC 12 – CHẠM ĐẾN TRI THỨC. Bản quyền thuộc về Lưu Gia Linh & Nguyễn Thị Ánh Sáng.</p>
          <div className="flex items-center gap-2">
            <span>Đồng hành cùng sĩ tử 2007 - 2008</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Thực hiện với <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> và nhiệt huyết văn chương
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

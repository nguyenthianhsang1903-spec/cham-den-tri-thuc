import React from 'react';
import {
  BookOpen,
  Gamepad2,
  BrainCircuit,
  FileCheck2,
  Award,
  ArrowRight,
  Sparkles,
  Feather,
  Compass,
  Star,
  Flame,
  Volume2
} from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (tab: 'home' | 'works' | 'knowledge' | 'games' | 'exams' | 'achievements') => void;
  onSelectWork: (workId: string) => void;
  onOpenFortune: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate, onSelectWork, onOpenFortune }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-10 lg:pt-10 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A78BFA]/20 text-[#25234A] text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
              <span>Chương trình GDPT 2018 · SGK Kết nối tri thức với cuộc sống 2026</span>
            </div>

            <h1 className="font-serif-literary text-3xl sm:text-5xl lg:text-6xl font-bold text-[#25234A] leading-[1.2] text-balance">
              “Văn học không chỉ để đọc, mà còn để cảm nhận và khám phá”
            </h1>

            <p className="text-lg sm:text-xl text-[#25234A]/85 leading-relaxed font-medium">
              Chào mừng bạn đến với <strong>VĂN HỌC 12 – CHẠM ĐẾN TRI THỨC</strong>, kho tàng học tập số kết hợp
              sơ đồ tư duy, hệ thống 32 tác phẩm toàn diện (Tập 1 & Tập 2) và đấu trường trò chơi tương tác thực tế dành cho học sinh,
              thầy cô và những ai yêu thích văn chương.
            </p>

            {/* Two prominent action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('works')}
                className="px-7 py-4 rounded-2xl bg-[#25234A] text-[#FFF9F0] font-bold text-base hover:bg-[#383466] transition-all shadow-lg hover:shadow-xl flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Khám phá tác phẩm</span>
                <ArrowRight className="w-5 h-5 text-[#F5C76A] group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('games')}
                className="px-7 py-4 rounded-2xl bg-[#8B5CF6] text-white font-bold text-base hover:bg-[#7C3AED] transition-all shadow-md hover:shadow-lg flex items-center gap-2.5 cursor-pointer"
              >
                <Gamepad2 className="w-5 h-5" />
                <span>Bắt đầu luyện tập</span>
              </button>
            </div>

            {/* Creators highlight */}
            <div className="pt-6 border-t border-[#25234A]/10 flex flex-wrap items-center gap-y-2 gap-x-8 text-sm text-[#25234A]">
              <span className="font-bold uppercase tracking-wider text-xs text-[#8B5CF6]">Người thực hiện:</span>
              <span className="flex items-center gap-2 font-bold text-base text-[#25234A]">
                <Feather className="w-4 h-4 text-[#8B5CF6]" />
                Lưu Gia Linh
              </span>
              <span className="flex items-center gap-2 font-bold text-base text-[#25234A]">
                <Feather className="w-4 h-4 text-[#8B5CF6]" />
                Nguyễn Thị Ánh Sáng
              </span>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[16/10] lg:aspect-[4/3] group">
              <img
                src="/src/assets/images/hero_literary_study_1793974936394.jpg"
                alt="Bàn học văn học nghệ thuật với sách mở và bút mực tím"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25234A]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-wider text-[#F5C76A] font-bold">
                  Kết nối tri thức với cuộc sống 2026
                </span>
                <p className="font-serif-literary text-xl font-bold">
                  Kho tàng Ngữ văn 12 toàn diện & tương tác
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-4 sm:p-5 rounded-3xl shadow-xl border border-[#25234A]/10 items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#A78BFA]/20 flex items-center justify-center text-[#8B5CF6] shrink-0">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs text-[#25234A]/60 font-semibold">Bộ SGK Kết nối tri thức 2026</p>
                <p className="text-base font-bold text-[#25234A]">Cả 2 học kì · 32 Tác phẩm trọn vẹn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ENGAGING FEATURE: GIEO QUẺ VĂN HỌC BANNER */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#25234A] via-[#37336D] to-[#25234A] text-white p-6 sm:p-10 border-2 border-[#F5C76A] shadow-2xl">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F5C76A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5C76A]/20 border border-[#F5C76A]/40 text-[#F5C76A] text-xs font-bold tracking-wider uppercase">
              <Flame className="w-4 h-4 text-[#F5C76A]" />
              <span>Góc tương tác lôi cuốn · Độc quyền lớp 12</span>
            </div>
            <h2 className="font-serif-literary text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFF9F0]">
              Gieo Quẻ Văn Học – Rút Thẻ Cảm Hứng Mùa Thi
            </h2>
            <p className="text-base sm:text-lg text-white/85 max-w-2xl font-normal leading-relaxed">
              Bạn đang hồi hộp trước kỳ thi hay cần một luồng cảm hứng viết bài? Hãy lắc ống quẻ tri thức để nhận câu danh ngôn văn học kiệt tác, lời bình may mắn và <strong>+25 điểm thưởng</strong> ngay lập tức!
            </p>
          </div>

          <button
            onClick={onOpenFortune}
            className="shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F5C76A] via-[#FDE047] to-[#F5C76A] text-[#25234A] font-bold text-base sm:text-lg shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-3"
          >
            <Sparkles className="w-6 h-6 text-[#25234A]" />
            <span>Gieo quẻ lấy may ngay!</span>
          </button>
        </div>
      </section>

      {/* Quick Statistics Strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-6 rounded-3xl bg-white border border-[#25234A]/10 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#A78BFA]/20 flex items-center justify-center text-[#8B5CF6] shrink-0">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold font-serif-literary text-[#25234A]">32</p>
            <p className="text-sm text-[#25234A]/80 font-bold">Tác phẩm cả 2 học kì</p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#25234A]/10 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#F5C76A]/20 flex items-center justify-center text-[#D97706] shrink-0">
            <BrainCircuit className="w-7 h-7" />
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold font-serif-literary text-[#25234A]">9 Bài</p>
            <p className="text-sm text-[#25234A]/80 font-bold">Chuyên đề SGK Tập 1 & 2</p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#25234A]/10 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-[#6D28D9] shrink-0">
            <Gamepad2 className="w-7 h-7" />
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold font-serif-literary text-[#25234A]">5 Game</p>
            <p className="text-sm text-[#25234A]/80 font-bold">Đấu trường trí tuệ phân kỳ</p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#25234A]/10 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
            <FileCheck2 className="w-7 h-7" />
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold font-serif-literary text-[#25234A]">10 Ải</p>
            <p className="text-sm text-[#25234A]/80 font-bold">Vượt chướng ngại vật</p>
          </div>
        </div>
      </section>

      {/* Feature Highlights Bento */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif-literary text-3xl sm:text-4xl font-bold text-[#25234A]">
            Hệ sinh thái học tập toàn diện & trực quan
          </h2>
          <p className="text-base text-[#25234A]/80 font-medium">
            Tất cả công cụ cần thiết để học sinh lớp 12 tự tin bứt phá điểm số môn Văn trong kỳ thi tốt nghiệp THPT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            onClick={() => onNavigate('works')}
            className="p-7 rounded-3xl bg-white border border-[#25234A]/10 shadow-sm hover:shadow-xl transition-all cursor-pointer group space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#A78BFA]/20 flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif-literary text-xl font-bold text-[#25234A] group-hover:text-[#8B5CF6] transition-colors">
              1. Kho tàng 32 tác phẩm chuẩn SGK
            </h3>
            <p className="text-sm text-[#25234A]/80 leading-relaxed font-medium">
              Đúng chuẩn phân phối chương trình: Bài 1 – 5 (Tập 1) và Bài 6 – 9 (Tập 2). Đầy đủ hoàn cảnh sáng tác, tóm tắt, giá trị nghệ thuật, sơ đồ tư duy và dàn ý đề thi THPT.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-[#8B5CF6]">
              <span>Khám phá ngay</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => onNavigate('knowledge')}
            className="p-7 rounded-3xl bg-white border border-[#25234A]/10 shadow-sm hover:shadow-xl transition-all cursor-pointer group space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#F5C76A]/20 flex items-center justify-center text-[#D97706] group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif-literary text-xl font-bold text-[#25234A] group-hover:text-[#D97706] transition-colors">
              2. Thư viện kiến thức & Kỹ năng
            </h3>
            <p className="text-sm text-[#25234A]/80 leading-relaxed font-medium">
              Cẩm nang 4 mức độ Đọc hiểu, công thức viết đoạn văn Nghị luận xã hội 200 chữ, bí kíp mở bài Nghị luận văn học đạt điểm 8.5+, và sổ tay tra cứu biện pháp tu từ tiếng Việt.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-[#D97706]">
              <span>Xem thư viện</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => onNavigate('games')}
            className="p-7 rounded-3xl bg-white border border-[#25234A]/10 shadow-sm hover:shadow-xl transition-all cursor-pointer group space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-[#25234A] group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif-literary text-xl font-bold text-[#25234A] group-hover:text-[#8B5CF6] transition-colors">
              3. Góc trò chơi văn học tương tác
            </h3>
            <p className="text-sm text-[#25234A]/80 leading-relaxed font-medium">
              5 trò chơi phân tách theo Học kì 1 và Học kì 2: Thử tài hiểu biết, Ai là tác giả, Đoán tên tác phẩm, Mảnh ghép văn học và Vượt chướng ngại vật với tính điểm tự động.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-[#8B5CF6]">
              <span>Chơi & Tích điểm</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Literary Works Spotlight */}
      <section className="p-8 sm:p-10 rounded-3xl bg-white border border-[#25234A]/10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif-literary text-2xl sm:text-3xl font-bold text-[#25234A]">
              Tác phẩm tiêu biểu của 2 học kì
            </h2>
            <p className="text-sm text-[#25234A]/70 font-medium">
              Nhấn vào từng tác phẩm để mở trực tiếp sơ đồ tư duy và hướng dẫn làm bài chi tiết
            </p>
          </div>
          <button
            onClick={() => onNavigate('works')}
            className="text-sm font-bold text-[#8B5CF6] hover:underline flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>Xem tất cả 32 tác phẩm</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { id: 'xuan-toc-do-cuu-quoc', title: 'Xuân Tóc Đỏ cứu quốc', author: 'Vũ Trọng Phụng', genre: 'Tiểu thuyết trào phúng', sem: 'Học kì 1 (Bài 1)' },
            { id: 'tay-tien', title: 'Tây Tiến', author: 'Quang Dũng', genre: 'Thơ lãng mạn bi tráng', sem: 'Học kì 1 (Bài 2)' },
            { id: 'muoi-cua-rung', title: 'Muối của rừng', author: 'Nguyễn Huy Thiệp', genre: 'Truyện huyền thoại', sem: 'Học kì 1 (Bài 4)' },
            { id: 'tuyen-ngon-doc-lap', title: 'Tuyên ngôn Độc lập', author: 'Hồ Chí Minh', genre: 'Văn chính luận bất hủ', sem: 'Học kì 2 (Bài 6)' },
            { id: 'voi-vang', title: 'Vội vàng', author: 'Xuân Diệu', genre: 'Thơ mới đỉnh cao', sem: 'Học kì 2 (Bài 9)' },
            { id: 'hon-truong-ba-da-hang-thit', title: 'Hồn Trương Ba, da Hàng Thịt', author: 'Lưu Quang Vũ', genre: 'Kịch triết lý nhân sinh', sem: 'Học kì 2 (Bài 9)' }
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onNavigate('works');
                onSelectWork(item.id);
              }}
              className="p-6 rounded-2xl bg-[#FFF9F0] border-2 border-[#25234A]/10 hover:border-[#8B5CF6] hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs font-bold text-[#25234A]/70">
                <span className="text-[#8B5CF6]">{item.sem}</span>
                <span>{item.genre}</span>
              </div>
              <h4 className="font-serif-literary text-xl font-bold text-[#25234A] group-hover:text-[#8B5CF6] transition-colors mt-2">
                {item.title}
              </h4>
              <p className="text-sm text-[#25234A]/80 font-semibold mt-1">Tác giả: {item.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creators Card & Philosophy */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <div className="md:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#25234A] text-white flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F5C76A] text-xs font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Sản phẩm sáng tạo học tập số</span>
            </div>
            <h3 className="font-serif-literary text-2xl sm:text-3xl font-bold leading-snug">
              Trao quyền làm chủ kiến thức cho học sinh thế hệ mới
            </h3>
            <p className="text-base text-white/85 leading-relaxed font-normal">
              Môn Ngữ văn không còn là những trang sách khô khan hay học vẹt. Bằng việc số hóa kho tàng bài học
              thành các sơ đồ tư duy trực quan và góc trò chơi tương tác thực tế, website giúp các bạn học sinh
              chủ động ghi nhớ sâu sắc, khơi dậy niềm say mê và tình yêu chân thành với văn học nước nhà.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-[#F5C76A] font-bold uppercase tracking-wider">Tác giả dự án</p>
              <p className="font-serif-literary text-lg font-bold text-white mt-1">Lưu Gia Linh</p>
              <p className="text-xs text-white/70 mt-0.5">Biên soạn nội dung & Sư phạm Ngữ văn</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-[#F5C76A] font-bold uppercase tracking-wider">Tác giả dự án</p>
              <p className="font-serif-literary text-lg font-bold text-white mt-1">Nguyễn Thị Ánh Sáng</p>
              <p className="text-xs text-white/70 mt-0.5">Thiết kế trải nghiệm & Ngân hàng dữ liệu số</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-lg border border-[#25234A]/10 bg-white relative min-h-64">
          <img
            src="/src/assets/images/literature_library_books_1793974937139.jpg"
            alt="Thư viện văn học sách và ghi chú"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
};

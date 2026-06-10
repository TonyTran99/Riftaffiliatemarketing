import Image from 'next/image';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Shield, PlayCircle, BarChart3, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="RIFT Logo" width={40} height={40} className="rounded-lg object-cover" />
              <span className="text-2xl font-bold tracking-wider hidden sm:inline">RIFT <span className="text-gold">AI</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-gold transition">Nền kinh tế Tham gia</a>
              <a href="#commission" className="text-gray-300 hover:text-gold transition">Thu nhập kép</a>
              <a href="#resources" className="text-gray-300 hover:text-gold transition">Tài nguyên & FAQ</a>
            </div>
            <div>
              <a href="https://zalo.me/0935635788" target="_blank" className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-gold-light transition shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                Liên hệ Zalo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium mb-6">
              Vượt qua giới hạn Affiliate truyền thống
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Đừng Chỉ Bán Hàng Một Lần. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Xây Dựng Đế Chế Thu Nhập Thụ Động.</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Cơ hội trở thành Đối tác phát triển toàn cầu cùng RIFT AI - Nền tảng giao dịch tự động đã chứng minh năng lực tạo dòng tiền thực với hơn <strong className="text-gold">6.000+ thành viên</strong> trên toàn thế giới.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.riftprotocol.ai/r/riftvn" target="_blank" className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Đăng ký miễn phí <ArrowRight size={20} />
              </a>
              <a href="https://zalo.me/0935635788" target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg border border-gold/50 text-gold hover:bg-gold/10 transition">
                Tư vấn trực tiếp
              </a>
            </div>
          </div>
          <div className="relative z-10 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="w-full h-full bg-zinc-900 relative">
                <Image src="/ceo.jpg" alt="RIFT AI CEO" fill className="object-cover object-top" />
              </div>
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-gold font-bold text-xl">Đồng hành cùng RIFT</p>
                <p className="text-sm text-gray-300">Khẳng định vị thế toàn cầu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sự dịch chuyển tài chính */}
      <section className="py-20 bg-black relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Bạn đang ở đâu trong sự dịch chuyển <span className="text-gold">Nghìn Tỷ Đô?</span></h2>
            <p className="text-gray-400">10 ngành nghề sẽ bùng nổ trong thập kỷ tới, và FinTech cùng AI Trading chính là sân chơi lớn nhất mang lại giá trị bền vững cho mọi cá nhân.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:border-gold/30 transition group">
              <div className="w-14 h-14 bg-black rounded-xl border border-gold/20 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Sự tàn lụi của CEX</h3>
              <p className="text-gray-400">Dòng tiền ồ ạt chảy sang các Sàn Phi Tập Trung (DEX). Tiền của bạn an toàn tuyệt đối trong Ví Lạnh, Ví Web3 của chính bạn, không bị giam giữ.</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:border-gold/30 transition group">
              <div className="w-14 h-14 bg-black rounded-xl border border-gold/20 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Hợp nhất Tài sản</h3>
              <p className="text-gray-400">Chứng khoán, Hàng hóa, Crypto, Ngoại hối không còn phân mảnh. Chúng được tích hợp chung vào một nền tảng phi tập trung duy nhất.</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:border-gold/30 transition group">
              <div className="w-14 h-14 bg-black rounded-xl border border-gold/20 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Sự thống trị của AI Trading</h3>
              <p className="text-gray-400">AI tiếp quản thị trường bằng Giao dịch Tần suất cao (HFT). Loại bỏ cảm xúc, phân tích hàng triệu dữ liệu mỗi giây với tốc độ ánh sáng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Economy */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Không phải Bán hàng.<br/>Đây là <span className="text-gold">Nền kinh tế Tham gia.</span></h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  MLM truyền thống tập trung vào việc mở rộng mạng lưới: Tuyển người mới → Tạo doanh thu. Khi không tuyển được người, hệ thống sụp đổ.
                </p>
                <p>
                  Trong nền kinh tế <strong className="text-white">RIFT</strong>, trọng tâm là kích hoạt vốn, tạo hoạt động giao dịch và xây dựng hệ sinh thái có doanh thu thực. 
                </p>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                    <span><strong>Giá trị sinh ra từ giao dịch thực:</strong> Phí hệ thống và lợi nhuận trading tạo ra nguồn doanh thu bền vững.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                    <span><strong>Không lấy tiền người sau trả người trước:</strong> Nguồn tiền hoa hồng đến từ Phí sử dụng phần mềm và Phí thành công (Success fee) khi khách hàng có lãi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                    <span><strong>Mạng lưới không phải sản phẩm:</strong> Hoạt động kinh tế mới là sản phẩm.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-black border border-white/10 rounded-3xl p-8 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold to-transparent opacity-20 blur-2xl"></div>
              <h3 className="text-2xl font-bold text-center mb-8 border-b border-white/10 pb-4">Hành trình tạo Giá trị RIFT</h3>
              <div className="space-y-4">
                <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                  <span className="font-semibold">1. Kích hoạt dòng vốn</span>
                  <ArrowRight className="text-gold" />
                </div>
                <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                  <span className="font-semibold">2. Giao dịch thực tế bằng AI</span>
                  <ArrowRight className="text-gold" />
                </div>
                <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                  <span className="font-semibold">3. Nền tảng tạo Doanh thu</span>
                  <ArrowRight className="text-gold" />
                </div>
                <div className="bg-gold/10 p-4 rounded-xl border border-gold/30 flex items-center justify-center text-gold font-bold text-lg">
                  Chia sẻ cho Hệ sinh thái (Affiliates)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Plan */}
      <section id="commission" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Cơ Chế <span className="text-gold">Thu Nhập Kép</span></h2>
            <p className="text-gray-400">Động lực phát triển bền vững cho các Affiliate Marketer chuyên nghiệp. Bạn được tri ân trên cả phí giấy phép và lợi nhuận giao dịch của khách hàng.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Nguồn 1 */}
            <div className="bg-black border border-white/10 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[50px]"></div>
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm mb-4">Nguồn thu số 1</div>
              <h3 className="text-2xl font-bold text-gold mb-2">40% Phí Nền Tảng</h3>
              <p className="text-gray-400 mb-8 text-sm">Chia sẻ phí mua giấy phép AI Auto Trading hàng năm ($100 - $1.000)</p>
              
              <div className="space-y-3">
                {[
                  { level: 'Level 1 (F1)', percent: '10%' },
                  { level: 'Level 2 (F2)', percent: '10%' },
                  { level: 'Level 3 (F3)', percent: '10%' },
                  { level: 'Level 4 (F4)', percent: '5%' },
                  { level: 'Level 5 (F5)', percent: '5%' },
                ].map((tier, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-zinc-900/50 rounded-lg border border-white/5">
                    <span className="font-medium text-gray-300">{tier.level}</span>
                    <span className="font-bold text-gold text-lg">{tier.percent}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nguồn 2 */}
            <div className="bg-black border border-gold/30 p-8 rounded-3xl relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.05)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-[50px]"></div>
              <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-sm text-gold mb-4">Nguồn thu số 2 (Đột phá)</div>
              <h3 className="text-2xl font-bold text-gold mb-2">5% Lợi Nhuận Giao Dịch</h3>
              <p className="text-gray-400 mb-6 text-sm">Quỹ thưởng 5% (Trích từ 10% Success Fee) chia sẻ ngược lại cho mạng lưới.</p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gold/5 rounded-lg border border-gold/20">
                  <span className="font-medium text-gray-200">Level 1 (50% quỹ thưởng)</span>
                  <span className="font-bold text-gold text-lg">2.5%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gold/5 rounded-lg border border-gold/10">
                  <span className="font-medium text-gray-300">Level 2 (25% quỹ thưởng)</span>
                  <span className="font-bold text-gold-light text-lg">1.25%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-900 rounded-lg border border-white/5">
                  <span className="font-medium text-gray-400">Level 3 (12.5% quỹ thưởng)</span>
                  <span className="font-bold text-white text-lg">0.625%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-900 rounded-lg border border-white/5">
                  <span className="font-medium text-gray-400">Level 4 (6.25% quỹ thưởng)</span>
                  <span className="font-bold text-white text-lg">0.3125%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-900 rounded-lg border border-white/5">
                  <span className="font-medium text-gray-400">Level 5 (3.125% quỹ thưởng)</span>
                  <span className="font-bold text-white text-lg">0.15625%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Hub & Social Proof */}
      <section id="resources" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Kho Thông Tin & <br/><span className="text-gold">Hệ Sinh Thái Tài Nguyên.</span></h2>
              <p className="text-gray-400 mb-8">
                RIFT cung cấp đầy đủ hành trang kiến thức, video đào tạo trực tiếp từ CEO và tài liệu minh bạch giúp Đối tác dễ dàng tìm hiểu và lan tỏa giá trị đến cộng đồng.
              </p>
              
              <div className="space-y-4 mb-8">
                <a href="https://dautucongngheai.vercel.app/" target="_blank" className="flex items-center gap-4 p-4 bg-gold/10 rounded-xl border border-gold/30 hover:bg-gold/20 transition group shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <Globe className="text-gold group-hover:scale-110 transition" size={32} />
                  <div>
                    <h4 className="font-bold text-gold text-lg">Trang Thông Tin Sản Phẩm</h4>
                    <p className="text-sm text-gray-400">Tổng quan về AI RIFT & Lợi nhuận chi tiết</p>
                  </div>
                </a>
                <a href="https://www.youtube.com/playlist?list=PLBkXqcyBeXu8gTGAvgpbIJxN7l4JiJfcx" target="_blank" className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-xl border border-white/10 hover:border-gold/50 transition group">
                  <PlayCircle className="text-red-500 group-hover:scale-110 transition" size={32} />
                  <div>
                    <h4 className="font-bold text-white">Video CEO đào tạo công nghệ</h4>
                    <p className="text-sm text-gray-400">Phân tích chuyên sâu hệ thống lõi</p>
                  </div>
                </a>
                <a href="https://www.youtube.com/playlist?list=PLBkXqcyBeXu-SJu1on3wT_5Rt1TZd4f_z" target="_blank" className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-xl border border-white/10 hover:border-gold/50 transition group">
                  <PlayCircle className="text-red-500 group-hover:scale-110 transition" size={32} />
                  <div>
                    <h4 className="font-bold text-white">Giới thiệu RIFT từ A-Z</h4>
                    <p className="text-sm text-gray-400">Bộ tài liệu chuẩn dành cho người mới</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl text-center">
                <div className="text-4xl font-extrabold text-gold mb-2">6000+</div>
                <div className="text-sm text-gray-400">Thành viên toàn cầu</div>
              </div>
              <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl text-center">
                <div className="text-4xl font-extrabold text-gold mb-2">100%</div>
                <div className="text-sm text-gray-400">Tiền nằm ví khách hàng</div>
              </div>
              <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl text-center col-span-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[30px]"></div>
                <div className="text-4xl font-extrabold text-gold mb-2">AI HFT</div>
                <div className="text-sm text-gray-400">Giao dịch Tần suất cao Thông minh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hỏi Đáp <span className="text-gold">Chuyên Sâu</span></h2>
            <p className="text-gray-400">Minh bạch thông tin là chìa khóa để xây dựng hệ sinh thái bền vững.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-black border border-white/10 p-6 rounded-2xl hover:border-gold/30 transition">
              <h3 className="text-xl font-bold text-gold mb-3 flex items-start gap-3">
                <CheckCircle2 className="shrink-0 mt-1" size={20} />
                RIFT có phải là mô hình lấy tiền người sau trả người trước (Ponzi)?
              </h3>
              <p className="text-gray-300 ml-8 leading-relaxed">
                Tuyệt đối không. RIFT hoạt động theo mô hình <strong>Nền kinh tế Tham gia (Participation Economy)</strong>. Doanh thu của hệ thống sinh ra từ việc bán quyền truy cập phần mềm và phí hiệu quả (Success Fee - chỉ thu khi AI giao dịch có lãi cho khách). Dòng tiền chiết khấu 100% đến từ giá trị thặng dư được tạo ra trên thị trường tài chính thực.
              </p>
            </div>
            
            <div className="bg-black border border-white/10 p-6 rounded-2xl hover:border-gold/30 transition">
              <h3 className="text-xl font-bold text-gold mb-3 flex items-start gap-3">
                <CheckCircle2 className="shrink-0 mt-1" size={20} />
                Khách hàng của tôi nạp tiền vào đâu? RIFT có giữ vốn không?
              </h3>
              <p className="text-gray-300 ml-8 leading-relaxed">
                <strong>RIFT KHÔNG GIỮ VỐN.</strong> Khách hàng tự nạp tiền và giữ tài sản 100% trên ví Web3 cá nhân hoặc sàn giao dịch uy tín của họ (như Hyperliquid). RIFT chỉ là đơn vị cung cấp thuật toán AI, kết nối thông qua API/Smart Contract để giao dịch hộ và hoàn toàn không có quyền rút tiền của khách hàng.
              </p>
            </div>
            
            <div className="bg-black border border-white/10 p-6 rounded-2xl hover:border-gold/30 transition">
              <h3 className="text-xl font-bold text-gold mb-3 flex items-start gap-3">
                <CheckCircle2 className="shrink-0 mt-1" size={20} />
                Nguồn thu nhập thụ động 5% từ lợi nhuận giao dịch liệu có bền vững?
              </h3>
              <p className="text-gray-300 ml-8 leading-relaxed">
                Đây là nguồn thu nhập <strong>bền vững nhất</strong>. Chừng nào khách hàng của bạn còn sử dụng bot để giao dịch và sinh lời, họ sẽ tiếp tục trả Success Fee. Hệ thống trích quỹ thưởng này chia lại cho mạng lưới. Khách hàng kiếm được tiền, bạn cũng kiếm được tiền hàng ngày.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Shield className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Kỷ nguyên mới đã gõ cửa!</h2>
          <p className="text-xl text-gray-400 mb-10">
            Hoặc bạn làm chủ AI, hoặc bạn sẽ bị AI lấy đi cơ hội. Hãy là người dẫn đầu trong xu hướng Fintech & DeFi ngay hôm nay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.riftprotocol.ai/r/riftvn" target="_blank" className="bg-gold text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-light transition shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Trải nghiệm RIFT Miễn Phí
            </a>
            <a href="https://zalo.me/0935635788" target="_blank" className="px-10 py-4 rounded-full font-bold text-lg border border-white/20 hover:border-gold hover:text-gold transition">
              Nhắn tin Tư Vấn (0935 635 788)
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="RIFT Logo" width={32} height={32} className="rounded object-cover" />
            <span className="text-xl font-bold tracking-wider">RIFT <span className="text-gold">AI</span></span>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="https://giaidapriftprotocol.vercel.app/" target="_blank" className="hover:text-gold transition">Giải đáp RIFT Protocol</a>
            <a href="https://www.facebook.com/tonytranaitrading" target="_blank" className="hover:text-gold transition">Fanpage</a>
            <a href="https://www.youtube.com/@TradeWithAI8" target="_blank" className="hover:text-gold transition">Kênh Youtube</a>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; 2026 RIFT AI Affiliate. Hotline/Zalo: 0935 635 788.
          </div>
        </div>
      </footer>
    </div>
  );
}

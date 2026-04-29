export default function Footer() {
  return (
    <footer className="w-full px-6 py-10 flex flex-col items-center gap-3 text-center border-t border-slate-100 bg-[#F8F9FA]">
      <span className="text-slate-300 font-bold tracking-widest text-sm">MBTI TRVL</span>
      <p className="text-xs font-medium text-slate-400">© 2024 MBTI Travel Prescription. Designed for your wellness.</p>
      <div className="flex gap-5 mt-1">
        <a href="#" className="text-xs text-slate-400 hover:text-[#A7C7E7] transition-colors">이용약관</a>
        <a href="#" className="text-xs text-slate-400 hover:text-[#A7C7E7] transition-colors">개인정보처리방침</a>
        <a href="#" className="text-xs text-slate-400 hover:text-[#A7C7E7] transition-colors">고객센터</a>
      </div>
    </footer>
  )
}

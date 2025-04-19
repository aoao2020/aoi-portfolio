import Image from "next/image";
import Link from "next/link";

export default function Sushi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100">
      {/* ナビゲーション */}
      <nav className="bg-white/70 backdrop-blur-md fixed top-0 left-0 right-0 z-10 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-8 py-4">
          <ul className="flex justify-end gap-6">
            <li>
              <Link href="/" className="text-blue-800 hover:text-blue-600 hover:underline font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/skills" className="text-blue-800 hover:text-blue-600 hover:underline font-bold">
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-8 pt-24 pb-20">
        <Link href="/" className="inline-flex items-center text-blue-800 hover:text-blue-600 mb-8 group">
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          <span className="ml-2 hover:underline">戻る</span>
        </Link>
        
        <h1 className="text-5xl font-bold mb-8 text-blue-800 tracking-tight">お寿司ゲーム（開発中）</h1>
        
        {/* メイン画像 */}
        <div className="mb-16">
          <div className="bg-white/80 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm border border-blue-100">
            <div className="h-96 relative p-8">
              <Image
                src="/Gamepage.jpg"
                alt="sushiプロジェクト"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* プロジェクト詳細 */}
        <div className="space-y-12">
          <section className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">概要</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Unityで開発した寿司をテーマにした2Dゲームです。プレイヤーはおちてくるお寿司をキャッチします。
              キャッチしてはいけないお寿司もあるので気をつけましょう。
            </p>
          </section>

          <section className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">主な機能</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>落ちてくるお寿司をキャッチ</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>タイミングベースの操作システム</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>ゲームをクリアするとコインが貯まるシステム（未実装）</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>貯めたコインでガチャが引ける（未実装）</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>ガチャで新しいお寿司を手にいれる（未実装）</span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">使用技術</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">
                Unity
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">
                C#
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">
                2D Game
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">
                Animation
              </span>
            </div>
          </section>

          <section className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">リンク</h2>
            <a
              href="https://github.com/aoao2020/sushi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>GitHubでコードを見る</span>
              <span className="ml-2">→</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
} 
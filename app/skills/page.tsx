import Image from "next/image";
import Link from "next/link";

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100">
      {/* ナビゲーション */}
      <nav className="bg-white/70 backdrop-blur-md fixed top-0 left-0 right-0 z-10 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-8 py-4">
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

      <div className="max-w-6xl mx-auto px-8 pt-24 pb-20">
        <Link href="/" className="inline-flex items-center text-blue-800 hover:text-blue-600 mb-8 group">
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          <span className="ml-2 hover:underline">戻る</span>
        </Link>

        <h1 className="text-5xl font-bold mb-16 text-blue-900">
          <span className="block text-xl text-blue-600 mb-2">My Expertise</span>
          Skills & Technologies
        </h1>

        <div className="space-y-16">
          {/* モバイル開発 */}
          <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">モバイル開発</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-700">主要技術</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">
                    Swift
                  </span>
              </div>
                <p className="text-gray-600">
                  iOSプラットフォームでネイティブアプリケーションを開発。
                  </p>
              </div>
              <div className="pace-y-4">
                <h3 className="text-lg font-semibold text-blue-700">関連スキル</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    ユーザー体験設計
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    アプリのライフサイクル管理
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    データ永続化
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ゲーム開発 */}
          <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">ゲーム開発</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-700">主要技術</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">
                    Unity
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">
                    C#
                  </span>
                </div>
                <p className="text-gray-600">
                  Unityエンジンを使用した2Dゲームの開発経験があります。
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-700">関連スキル</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    ゲームデザイン
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    アニメーション制御
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    物理演算
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 
import Link from "next/link";

export default function Career() {
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
            <li>
              <Link href="/career" className="text-blue-800 hover:text-blue-600 hover:underline font-bold">
                Career
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* メインコンテンツ */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-12">
            <span className="block text-xl text-blue-600 mb-2">Career History</span>
            経歴
          </h1>

          {/* 経歴タイムライン */}
          <div className="space-y-12">
            {/* 2025年 */}
            <div className="relative">
              <div className="absolute left-0 w-24 text-right pr-8">
                <span className="text-lg font-bold text-blue-800">2025</span>
              </div>
              <div className="ml-32 pl-8 border-l-2 border-blue-200">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">就活開始！ゲーム開発に力を入れる</h3>
                  <p className="text-gray-600 mb-4">
                    Unityゲーム開発とWebゲーム開発の学習を継続
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      Unity
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      Webゲーム
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2024年 */}
            <div className="relative">
              <div className="absolute left-0 w-24 text-right pr-8">
                <span className="text-lg font-bold text-blue-800">2024</span>
              </div>
              <div className="ml-32 pl-8 border-l-2 border-blue-200">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">横浜市立大学 理学部 在学中</h3>
                  <p className="text-gray-600 mb-4">
                    理学部で生物学を学びながら、iOSアプリ開発とゲーム開発の学習を継続
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      大学
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      iOS開発
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      ゲーム開発
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2023年 */}
            <div className="relative">
              <div className="absolute left-0 w-24 text-right pr-8">
                <span className="text-lg font-bold text-blue-800">2023</span>
              </div>
              <div className="ml-32 pl-8 border-l-2 border-blue-200">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">横浜市立大学 理学部 入学</h3>
                  <p className="text-gray-600 mb-4">
                    理学部で生物学を学びながら、プログラミングの学習を継続
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      大学
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      プログラミング
                    </span>
                  </div>
                </div>
                <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">法政大学国際高等学校 卒業</h3>
                  <p className="text-gray-600 mb-4">
                    高校卒業後、プログラミングの学習を開始
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      高校
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      プログラミング
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2022年 */}
            <div className="relative">
              <div className="absolute left-0 w-24 text-right pr-8">
                <span className="text-lg font-bold text-blue-800">2022</span>
              </div>
              <div className="ml-32 pl-8 border-l-2 border-blue-200">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">大学受験の合間に息抜きでプログラミング</h3>
                  <p className="text-gray-600 mb-4">
                    モバイルアプリ開発の基礎を学ぶ
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      iOS開発
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      プログラミング
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2021年 */}
            <div className="relative">
              <div className="absolute left-0 w-24 text-right pr-8">
                <span className="text-lg font-bold text-blue-800">2021</span>
              </div>
              <div className="ml-32 pl-8 border-l-2 border-blue-200">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">エンジニアとしてのキャリアスタート</h3>
                  <p className="text-gray-600 mb-4">
                    モバイルアプリ開発の基礎を学ぶ
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      iOS開発
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm">
                      プログラミング
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
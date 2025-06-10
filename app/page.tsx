import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            <li>
              <Link href="/game" className="text-blue-800 hover:text-blue-600 hover:underline font-bold">
                Game
              </Link>
            </li>
            <li>
              <Link href="/shooting" className="text-blue-800 hover:text-blue-600 hover:underline font-bold">
                Shooting
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>
        <div className="max-w-6xl mx-auto px-8 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold text-blue-900 leading-tight">
                  Hirano Aoi
                  <span className="block text-2xl text-blue-700 mt-2">iOS & Game Developer</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  iOSアプリとゲーム開発をしています
                  ゲーム開発はUnityを使用しています。自分の描いた絵でゲームを作っています。
                  このサイトはNext.jsで作成しています。
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/skills" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  スキルを見る
                  <span className="ml-2">→</span>
                </Link>
                <Link 
                  href="/game" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-bold hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  タッピングゲーム
                  <span className="ml-2">🎮</span>
                </Link>
                <Link 
                  href="/shooting" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-xl font-bold hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  シューティングゲーム
                  <span className="ml-2">🐾</span>
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                
                <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100">
                  <h3 className="text-sm font-semibold text-blue-800 mb-1">経験</h3>
                  <p className="text-gray-600">実際に開発を始めたのは高校生から</p>
                </div>
                <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100">
                  <h3 className="text-sm font-semibold text-blue-800 mb-1">開発分野</h3>
                  <p className="text-gray-600">iOS・ゲーム開発</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-64 h-64 mx-auto relative rounded-2xl overflow-hidden border-4 border-white/80 shadow-xl transform hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-100 to-cyan-100">
                <Image
                  src="/profiledot.jpg"
                  alt="プロフィール画像"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -z-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12 text-blue-900">
            <span className="block text-xl text-blue-600 mb-2">My Works</span>
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* studynewプロジェクト */}
            <Link href="/projects/studynew" className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100">
                <div className="aspect-video relative bg-gradient-to-br from-white/90 to-blue-50/90 p-8">
                  <Image
                    src="/studynew.jpg"
                    alt="studynewプロジェクト"
                    fill
                    className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-blue-800 group-hover:text-blue-600 transition-colors">
                    タスク達成のためのタイマーアプリ
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    直感的な操作で使えるシンプルなタイマーアプリです。
                    START/STOPボタンで計測を開始・停止でき、記録の管理や目標設定も可能です。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm font-bold">
                      Swift
                    </span>
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm font-bold">
                      iOS
                    </span>
                    
                  </div>
                </div>
              </div>
            </Link>

            {/* sushiプロジェクト */}
            <Link href="/projects/sushi" className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100">
                <div className="aspect-video relative bg-gradient-to-br from-white/90 to-blue-50/90 p-8">
                  <Image
                    src="/sushi.jpg"
                    alt="sushiプロジェクト"
                    fill
                    className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-blue-800 group-hover:text-blue-600 transition-colors">
                    お寿司ゲーム（開発中）
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    Unityで開発した寿司をテーマにしたゲームです。
                    プレイヤーは落ちてくるお寿司をキャッチします。キャッチしてはいけないお寿司もあるので気をつけましょう
                    タイミングよく操作して、美味しい寿司を提供しましょう。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm font-bold">
                      Unity
                    </span>
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm font-bold">
                      C#
                    </span>
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm font-bold">
                      2D Game
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


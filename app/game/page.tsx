'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NYA_SOUND = '/nya.mp3';

export default function Game() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    setTimeout(() => moveTarget(), 200);
  };

  const moveTarget = () => {
    const catSize = 128;
    if (gameAreaRef.current) {
      const rect = gameAreaRef.current.getBoundingClientRect();
      const maxX = rect.width - catSize;
      const maxY = rect.height - catSize;
      setPosition({
        x: Math.random() * maxX,
        y: Math.random() * maxY,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
    setIsVisible(true);
  };

  const handleClick = () => {
    if (isPlaying) {
      setScore((prev) => prev + 1);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      setIsVisible(false);
      setTimeout(() => {
        moveTarget();
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-100 font-mplus">
      {/* ナビゲーション */}
      <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-10 border-b border-cyan-200 shadow-md">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <ul className="flex justify-end gap-6">
            <li>
              <Link href="/" className="text-cyan-700 hover:text-blue-500 hover:underline font-bold text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link href="/skills" className="text-cyan-700 hover:text-blue-500 hover:underline font-bold text-lg">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/career" className="text-cyan-700 hover:text-blue-500 hover:underline font-bold text-lg">
                Career
              </Link>
            </li>
            <li>
              <Link href="/game" className="text-cyan-700 hover:text-blue-500 hover:underline font-bold text-lg">
                Game
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ゲームエリア */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-8 drop-shadow-lg text-center">
            <span className="block text-2xl mb-2 font-bold text-cyan-400 tracking-wide">Mini Game</span>
            <span className="inline-block px-8 py-2 rounded-full bg-cyan-50 text-blue-400 font-bold shadow-sm border border-cyan-100" style={{fontSize:'2.2rem', letterSpacing:'0.1em'}}>青い猫をタップ！</span>
          </h1>

          <div ref={gameAreaRef} className="bg-white/90 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border-4" style={{borderColor:'#87ceeb', background:'#fff', minHeight: 600}}>
            <div className="text-center mb-10">
              <div className="text-4xl font-bold" style={{color:'#3498db'}}>
                スコア: <span className="inline-block" style={{background:'#87ceeb', color:'#226699', borderRadius:'9999px', padding:'0.5rem 2rem', marginLeft:'0.5rem', fontWeight:'bold', boxShadow:'0 2px 8px #87ceeb55'}}>{score}</span>
              </div>
              <div className="text-2xl mb-6 font-bold" style={{color:'#87ceeb'}}>
                残り時間: <span className="inline-block" style={{background:'#e0f7fa', color:'#3498db', borderRadius:'9999px', padding:'0.25rem 1rem', marginLeft:'0.5rem', fontWeight:'bold', boxShadow:'0 2px 8px #87ceeb55'}}>{timeLeft}秒</span>
              </div>
              {!isPlaying && (
                <button
                  onClick={startGame}
                  className="px-10 py-5 rounded-full font-bold text-2xl shadow-lg transition-all hover:scale-105 border-2"
                  style={{background: 'linear-gradient(90deg, #3498db 0%, #87ceeb 100%)', color: 'white', borderColor:'#87ceeb'}}>
                  {timeLeft === 30 ? 'ゲームスタート' : 'リトライ'}
                </button>
              )}
            </div>

            {isPlaying && isVisible && (
              <div
                className="w-32 h-32 absolute cursor-pointer transition-all transform hover:scale-110 drop-shadow-lg"
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                }}
                onClick={handleClick}
              >
                <Image
                  src="/blue-cat.png"
                  alt="青い猫"
                  fill
                  className="object-contain"
                />
              </div>
            )}

            <audio ref={audioRef} src={NYA_SOUND} preload="auto" />

            <div className="mt-12 text-center font-bold text-lg" style={{color:'#3498db'}}>
              <p className="mb-2">ルール：</p>
              <p>1. 30秒間でできるだけ多くの青い猫をタップしてください</p>
              <p>2. 猫をタップするたびにスコアが1点増えます</p>
              <p>3. 時間切れになるとゲーム終了です</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
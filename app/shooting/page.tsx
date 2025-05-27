'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PLAYER_WIDTH = 64;
const PLAYER_HEIGHT = 64;
const ENEMY_SIZE = 48;
const BULLET_WIDTH = 12;
const BULLET_HEIGHT = 24;
const GAME_WIDTH = 480;
const GAME_HEIGHT = 600;
const ENEMY_SPEED = 2;
const BULLET_SPEED = 8;

export default function Shooting() {
  const [playerX, setPlayerX] = useState(GAME_WIDTH / 2 - PLAYER_WIDTH / 2);
  const [bullets, setBullets] = useState<{x: number, y: number}[]>([]);
  const [enemies, setEnemies] = useState<{x: number, y: number}[]>([]);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // プレイヤー移動
  const movePlayer = (dir: -1 | 1) => {
    setPlayerX((prev) => {
      let next = prev + dir * 32;
      if (next < 0) next = 0;
      if (next > GAME_WIDTH - PLAYER_WIDTH) next = GAME_WIDTH - PLAYER_WIDTH;
      return next;
    });
  };

  // 弾発射
  const shoot = () => {
    setBullets((prev) => [...prev, { x: playerX + PLAYER_WIDTH / 2 - BULLET_WIDTH / 2, y: GAME_HEIGHT - PLAYER_HEIGHT - BULLET_HEIGHT }]);
  };

  // キー操作
  useEffect(() => {
    if (!isPlaying) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') movePlayer(-1);
      if (e.key === 'ArrowRight') movePlayer(1);
      if (e.key === ' ' || e.key === 'Spacebar') shoot();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isPlaying, playerX]);

  // ゲームループ
  useEffect(() => {
    if (!isPlaying) return;
    const loop = () => {
      // 弾移動
      setBullets((prev) => prev.map(b => ({ ...b, y: b.y - BULLET_SPEED })).filter(b => b.y > -BULLET_HEIGHT));
      // 敵移動
      setEnemies((prev) => prev.map(e => ({ ...e, y: e.y + ENEMY_SPEED })).filter(e => e.y < GAME_HEIGHT));
      // 衝突判定
      setEnemies((prevEnemies) => {
        let newEnemies = [...prevEnemies];
        setBullets((prevBullets) => {
          let newBullets = [...prevBullets];
          for (let i = 0; i < prevEnemies.length; i++) {
            for (let j = 0; j < prevBullets.length; j++) {
              const e = prevEnemies[i];
              const b = prevBullets[j];
              if (
                b.x < e.x + ENEMY_SIZE &&
                b.x + BULLET_WIDTH > e.x &&
                b.y < e.y + ENEMY_SIZE &&
                b.y + BULLET_HEIGHT > e.y
              ) {
                // 衝突
                newEnemies.splice(i, 1);
                newBullets.splice(j, 1);
                setScore((s) => s + 1);
                return newBullets;
              }
            }
          }
          return newBullets;
        });
        return newEnemies;
      });
      // 敵が下まで来たらゲームオーバー
      setEnemies((prev) => {
        if (prev.some(e => e.y + ENEMY_SIZE >= GAME_HEIGHT - PLAYER_HEIGHT)) {
          setIsPlaying(false);
          setGameOver(true);
          return [];
        }
        return prev;
      });
      // 敵追加
      if (Math.random() < 0.02) {
        setEnemies((prev) => [...prev, { x: Math.random() * (GAME_WIDTH - ENEMY_SIZE), y: -ENEMY_SIZE }]);
      }
      animationRef.current = requestAnimationFrame(loop);
    };
    animationRef.current = requestAnimationFrame(loop);
    return () => animationRef.current && cancelAnimationFrame(animationRef.current);
  }, [isPlaying]);

  // ゲーム開始
  const startGame = () => {
    setPlayerX(GAME_WIDTH / 2 - PLAYER_WIDTH / 2);
    setBullets([]);
    setEnemies([]);
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  };

  // タッチ操作用
  const handleTouchLeft = () => { if (isPlaying) movePlayer(-1); };
  const handleTouchRight = () => { if (isPlaying) movePlayer(1); };
  const handleTouchShoot = () => { if (isPlaying) shoot(); };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-100 font-mplus">
      <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-10 border-b border-cyan-200 shadow-md">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <ul className="flex justify-end gap-6">
            <li>
              <Link href="/" className="text-cyan-700 hover:text-blue-500 hover:underline font-bold text-lg">Home</Link>
            </li>
            <li>
              <Link href="/game" className="text-cyan-700 hover:text-blue-500 hover:underline font-bold text-lg">Game</Link>
            </li>
            <li>
              <Link href="/shooting" className="text-cyan-700 hover:text-blue-500 hover:underline font-bold text-lg">Shooting</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="pt-24 pb-16">
        <div className="max-w-xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center drop-shadow-lg">
            <span className="block text-2xl text-cyan-400 mb-2 font-bold">Shooting Game</span>
            青い猫のシューティング！
          </h1>
          <div className="bg-white/90 rounded-3xl shadow-2xl border-4 border-cyan-200 p-6 mx-auto relative overflow-hidden" style={{width: '100%', maxWidth: GAME_WIDTH, height: GAME_HEIGHT}} ref={gameAreaRef}>
            {/* プレイヤー */}
            <div style={{position:'absolute', left:playerX, top:GAME_HEIGHT-PLAYER_HEIGHT, width:PLAYER_WIDTH, height:PLAYER_HEIGHT, zIndex:2}}>
              <Image src="/blue-cat.png" alt="自機" width={PLAYER_WIDTH} height={PLAYER_HEIGHT} style={{objectFit:'contain'}} />
            </div>
            {/* 弾 */}
            {bullets.map((b, i) => (
              <div key={i} style={{position:'absolute', left:b.x, top:b.y, width:BULLET_WIDTH, height:BULLET_HEIGHT, background:'#87ceeb', borderRadius:6, zIndex:1}} />
            ))}
            {/* 敵 */}
            {enemies.map((e, i) => (
              <div key={i} style={{position:'absolute', left:e.x, top:e.y, width:ENEMY_SIZE, height:ENEMY_SIZE, background:'#87ceeb', borderRadius:'50%', border:'2px solid #3498db', zIndex:1, boxShadow:'0 2px 8px #87ceeb55'}} />
            ))}
            {/* ゲームオーバー */}
            {gameOver && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10">
                <div className="text-3xl font-bold text-blue-600 mb-4">Game Over</div>
                <button onClick={startGame} className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full font-bold text-xl shadow-lg hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105 border-2 border-cyan-200">リトライ</button>
              </div>
            )}
            {/* スコア */}
            <div className="absolute left-4 top-4 text-xl font-bold text-blue-600 bg-cyan-100 rounded-full px-6 py-2 shadow">スコア: {score}</div>
            {/* スマホ用操作ボタン */}
            {isPlaying && (
              <div className="absolute left-0 right-0 bottom-0 flex justify-between items-end gap-2 p-4 md:hidden z-20" style={{pointerEvents:'auto'}}>
                <button onTouchStart={handleTouchLeft} className="w-20 h-20 bg-cyan-200 text-blue-700 rounded-full text-3xl font-bold shadow-lg active:bg-cyan-300">←</button>
                <button onTouchStart={handleTouchShoot} className="w-24 h-24 bg-blue-400 text-white rounded-full text-3xl font-bold shadow-lg active:bg-blue-500 border-4 border-cyan-200">ショット</button>
                <button onTouchStart={handleTouchRight} className="w-20 h-20 bg-cyan-200 text-blue-700 rounded-full text-3xl font-bold shadow-lg active:bg-cyan-300">→</button>
              </div>
            )}
          </div>
          {!isPlaying && !gameOver && (
            <div className="text-center mt-8">
              <button onClick={startGame} className="px-10 py-5 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full font-bold text-2xl shadow-lg hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105 border-2 border-cyan-200">ゲームスタート</button>
            </div>
          )}
          <div className="mt-10 text-center text-blue-500 font-bold text-lg">
            <p className="mb-2">ルール：</p>
            <p>・←→キーで猫を左右に動かせます</p>
            <p>・スペースキーで弾を発射</p>
            <p>・敵に弾を当ててスコアを稼ごう！</p>
            <p>・敵が下まで来るとゲームオーバー</p>
          </div>
        </div>
      </main>
    </div>
  );
} 
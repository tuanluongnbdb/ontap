'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  BookOpen, 
  Shuffle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  RotateCcw,
  Home,
  Lock
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BIOLOGY_DATA, Question, Topic } from '@/lib/biology-data';

type QuizMode = 'selection' | 'topic-list' | 'quiz' | 'result';

// Simple sound utility using Web Audio API
const playSound = (type: 'correct' | 'incorrect' | 'click') => {
  if (typeof window === 'undefined') return;
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  if (type === 'correct') {
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1046.50, audioContext.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
  } else if (type === 'incorrect') {
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
    oscillator.frequency.linearRampToValueAtTime(100, audioContext.currentTime + 0.2);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.4);
  } else {
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
  }
};

export default function BiologyPage() {
  const [mode, setMode] = useState<QuizMode>('selection');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState<number>(0);
  const [quizDuration, setQuizDuration] = useState<number>(0);

  const currentQuestion = questions[currentIndex];

  const startQuiz = useCallback(() => {
    setMode('quiz');
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    // Use an effect to set start time to avoid purity issues if needed, 
    // but here we are in a callback which is generally fine.
    // However, to be extra safe for the linter:
    const now = Date.now();
    setQuizStartTime(now);
  }, []);

  const handleStartRandom = () => {
    playSound('click');
    const allQuestions = BIOLOGY_DATA.flatMap(topic => topic.questions);
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    startQuiz();
  };

  const handleSelectTopic = (topic: Topic) => {
    playSound('click');
    setQuestions(topic.questions);
    startQuiz();
  };

  const handleAnswer = useCallback((option: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(option);
    setIsAnswered(true);
    
    if (option === currentQuestion.answer) {
      setScore(prev => prev + 1);
      playSound('correct');
    } else {
      playSound('incorrect');
    }
  }, [isAnswered, currentQuestion]);

  const handleNext = useCallback(() => {
    if (!isAnswered) return;
    
    playSound('click');
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      const now = Date.now();
      setQuizDuration(Math.round((now - quizStartTime) / 1000));
      setMode('result');
    }
  }, [currentIndex, questions.length, isAnswered, quizStartTime]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mode === 'quiz' && !isAnswered && currentQuestion) {
        if (e.key === '1') handleAnswer(currentQuestion.options[0]);
        if (e.key === '2') handleAnswer(currentQuestion.options[1]);
        if (e.key === '3') handleAnswer(currentQuestion.options[2]);
        if (e.key === '4') handleAnswer(currentQuestion.options[3]);
      }
      
      if (e.key === 'Enter') {
        if (mode === 'quiz' && isAnswered) {
          handleNext();
        } else if (mode === 'result') {
          setMode('selection');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, isAnswered, currentQuestion, handleAnswer, handleNext]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans">
      <nav className="px-6 py-8 sm:px-12 flex justify-between items-center bg-white border-b border-slate-50">
        <Link href="/" className="flex items-center gap-2 group transition-all">
          <ArrowLeft size={20} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
          <span className="text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">Quay lại</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">STUDYFLOW</span>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-8 max-w-4xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {mode === 'selection' && (
            <motion.div 
              key="selection"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="w-full space-y-12 text-center"
            >
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-slate-900">Môn Sinh Học</h1>
                <p className="text-slate-500 italic">Hành trình khám phá sự sống</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <button 
                  onClick={() => { playSound('click'); setMode('topic-list'); }}
                  className="group bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-900 hover:shadow-xl transition-all text-left"
                >
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <BookOpen size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Theo bài học</h3>
                  <p className="text-slate-400">Ôn tập tập trung cho Bài 18 (Chu kì tế bào) và Bài 19 (Quá trình phân bào).</p>
                </button>

                <button 
                  onClick={handleStartRandom}
                  className="group bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-900 hover:shadow-xl transition-all text-left"
                >
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <Shuffle size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Tổng hợp</h3>
                  <p className="text-slate-400">Ôn tập ngẫu nhiên tất cả các bài thuộc chương trình học kì 2.</p>
                </button>
              </div>
            </motion.div>
          )}

          {mode === 'topic-list' && (
            <motion.div 
              key="topic-list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full space-y-8"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-slate-900">Nội dung ôn tập</h2>
                <button 
                  onClick={() => { playSound('click'); setMode('selection'); }}
                  className="text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors"
                >
                  Quay lại
                </button>
              </div>

              <div className="space-y-4">
                {BIOLOGY_DATA.map((topic, index) => (
                  <motion.button
                    key={topic.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleSelectTopic(topic)}
                    className="w-full p-6 text-left bg-white border border-slate-100 rounded-2xl hover:border-slate-900 transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
                  >
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-slate-900 group-hover:translate-x-1 transition-transform">{topic.title}</h4>
                      <p className="text-xs text-slate-400">{topic.questions.length} câu hỏi</p>
                    </div>
                    <ArrowRight className="text-slate-200 group-hover:text-slate-900 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {mode === 'quiz' && currentQuestion && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-2xl space-y-8"
            >
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span>Câu hỏi {currentIndex + 1} / {questions.length}</span>
                  <span>Đúng: {score}</span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-slate-900"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                  {currentQuestion.question}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, idx) => {
                  const isCorrectResult = isAnswered && option === currentQuestion.answer;
                  const isWrongResult = isAnswered && selectedAnswer === option && option !== currentQuestion.answer;
                  
                  return (
                    <motion.button
                      key={idx}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleAnswer(option)}
                      disabled={isAnswered}
                      className={cn(
                        "p-5 rounded-2xl border-2 text-left transition-all relative flex items-center justify-between group",
                        !isAnswered && "border-slate-100 hover:border-slate-900 bg-white",
                        isAnswered && option === currentQuestion.answer && "border-green-500 bg-green-50 text-green-900",
                        isAnswered && selectedAnswer === option && option !== currentQuestion.answer && "border-red-500 bg-red-50 text-red-900",
                        isAnswered && selectedAnswer !== option && option !== currentQuestion.answer && "border-slate-50 bg-white opacity-50"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <span className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                          !isAnswered && "bg-slate-50 text-slate-400 group-hover:bg-slate-900 group-hover:text-white",
                          isCorrectResult && "bg-green-500 text-white",
                          isWrongResult && "bg-red-500 text-white",
                          isAnswered && !isCorrectResult && !isWrongResult && "bg-slate-100 text-slate-300"
                        )}>
                          {idx + 1}
                        </span>
                        <span className="font-medium">{option}</span>
                      </div>
                      
                      {isCorrectResult && <CheckCircle2 className="text-green-500" size={20} />}
                      {isWrongResult && <XCircle className="text-red-500" size={20} />}
                    </motion.button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center text-slate-400 text-xs font-medium italic">
                <div className="flex gap-4">
                  <span>Dùng phím 1-4 để chọn</span>
                  <span>Enter để tiếp tục</span>
                </div>
                {isAnswered && (
                  <motion.button
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={handleNext}
                    className="flex items-center gap-2 text-slate-900 font-bold not-italic"
                  >
                    {currentIndex === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
                    <ArrowRight size={16} />
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}

          {mode === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-lg space-y-12 text-center"
            >
              <div className="space-y-6">
                <div className="inline-block p-6 rounded-full bg-green-600 text-white mb-4">
                  <CheckCircle2 size={48} />
                </div>
                <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter">Hoàn thành!</h1>
                <div className="flex justify-center gap-12">
                  <div className="space-y-1">
                    <p className="text-5xl font-black text-slate-900">{score}/{questions.length}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Điểm số</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-5xl font-black text-slate-900">{Math.round((score / questions.length) * 100)}%</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Độ chính xác</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm italic">Thời gian hoàn thành: {quizDuration} giây</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => { playSound('click'); setMode('selection'); }}
                  className="flex items-center justify-center gap-3 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg"
                >
                  <RotateCcw size={20} />
                  ÔN LẠI
                </button>
                <Link 
                  href="/"
                  className="flex items-center justify-center gap-3 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:border-slate-900 transition-all active:scale-95"
                >
                  <Home size={20} />
                  VỀ TRANG CHỦ
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="px-6 py-8 sm:px-12 border-t border-slate-100 flex justify-between items-center text-slate-300">
        <div className="flex gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-slate-100"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-slate-100"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-slate-100"></div>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">{mode.toUpperCase()} _ MODULE // BIOLOGY</span>
      </footer>
    </div>
  );
}

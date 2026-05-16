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
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [tfAnswers, setTfAnswers] = useState<Record<string, boolean | null>>({});
  const [matchingAnswers, setMatchingAnswers] = useState<Record<string, string>>({});
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState<number>(0);
  const [quizDuration, setQuizDuration] = useState<number>(0);

  const currentQuestion = questions[currentIndex];

  const startQuiz = useCallback((quizQuestions: Question[]) => {
    setMode('quiz');
    setQuestions(quizQuestions);
    setWrongQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setTfAnswers({});
    setMatchingAnswers({});
    setIsAnswered(false);
    const now = Date.now();
    setQuizStartTime(now);
  }, []);

  const handleStartRandom = () => {
    playSound('click');
    const allQuestions = BIOLOGY_DATA.flatMap(topic => topic.questions);
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    startQuiz(shuffled);
  };

  const handleSelectTopic = (topic: Topic) => {
    playSound('click');
    startQuiz(topic.questions);
  };

  const handleReviewWrong = () => {
    playSound('click');
    if (wrongQuestions.length > 0) {
      startQuiz(wrongQuestions);
    }
  };

  const checkCompositeCorrect = useCallback(() => {
    if (!currentQuestion) return false;
    if (currentQuestion.type === 'choice') {
      return selectedAnswer === currentQuestion.answer;
    }
    if (currentQuestion.type === 'true-false') {
      return currentQuestion.statements.every(s => tfAnswers[s.id] === s.answer);
    }
    if (currentQuestion.type === 'matching') {
      return currentQuestion.pairs.every(p => matchingAnswers[p.left] === p.right);
    }
    return false;
  }, [currentQuestion, selectedAnswer, tfAnswers, matchingAnswers]);

  const handleAnswer = useCallback((option: string) => {
    if (isAnswered || !currentQuestion || currentQuestion.type !== 'choice') return;
    
    setSelectedAnswer(option);
    setIsAnswered(true);
    
    if (option === currentQuestion.answer) {
      setScore(prev => prev + 1);
      playSound('correct');
    } else {
      setWrongQuestions(prev => [...prev, currentQuestion]);
      playSound('incorrect');
    }
  }, [isAnswered, currentQuestion]);

  const handleTFAnswer = (statementId: string, value: boolean) => {
    if (isAnswered) return;
    playSound('click');
    setTfAnswers(prev => ({ ...prev, [statementId]: value }));
  };

  const handleMatchingAnswer = (left: string, right: string) => {
    if (isAnswered) return;
    playSound('click');
    setMatchingAnswers(prev => ({ ...prev, [left]: right }));
  };

  const handleValidateComposite = useCallback(() => {
    if (isAnswered) return;
    
    const isCorrect = checkCompositeCorrect();
    setIsAnswered(true);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      playSound('correct');
    } else {
      setWrongQuestions(prev => [...prev, currentQuestion]);
      playSound('incorrect');
    }
  }, [isAnswered, checkCompositeCorrect, currentQuestion]);

  const handleNext = useCallback(() => {
    if (!isAnswered) return;
    
    playSound('click');
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setTfAnswers({});
      setMatchingAnswers({});
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
      if (mode === 'quiz' && !isAnswered && currentQuestion && currentQuestion.type === 'choice') {
        if (e.key === '1') handleAnswer(currentQuestion.options[0]);
        if (e.key === '2') handleAnswer(currentQuestion.options[1]);
        if (e.key === '3') handleAnswer(currentQuestion.options[2]);
        if (e.key === '4') handleAnswer(currentQuestion.options[3]);
      }
      
      if (e.key === 'Enter') {
        if (mode === 'quiz') {
          if (isAnswered) {
            handleNext();
          } else if (currentQuestion && (currentQuestion.type === 'true-false' || currentQuestion.type === 'matching')) {
            // Check if all answered
            if (currentQuestion.type === 'true-false' && Object.keys(tfAnswers).length === currentQuestion.statements.length) {
              handleValidateComposite();
            } else if (currentQuestion.type === 'matching' && Object.keys(matchingAnswers).length === currentQuestion.pairs.length) {
              handleValidateComposite();
            }
          }
        } else if (mode === 'result') {
          setMode('selection');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, isAnswered, currentQuestion, handleAnswer, handleNext, tfAnswers, matchingAnswers, handleValidateComposite]);

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

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-12 py-4 sm:py-8 max-w-4xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {mode === 'selection' && (
            <motion.div 
              key="selection"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="w-full space-y-8 sm:space-y-12 text-center"
            >
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Môn Sinh Học</h1>
                <p className="text-slate-500 italic text-sm">Hành trình khám phá sự sống</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                <button 
                  onClick={() => { playSound('click'); setMode('topic-list'); }}
                  className="group bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-900 hover:shadow-xl transition-all text-left"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Theo bài học</h3>
                  <p className="text-slate-400 text-sm">Ôn tập tập trung từng bài học cụ thể trong chương trình.</p>
                </button>

                <button 
                  onClick={handleStartRandom}
                  className="group bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-900 hover:shadow-xl transition-all text-left"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <Shuffle size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Tổng hợp</h3>
                  <p className="text-slate-400 text-sm">Ôn tập ngẫu nhiên tất cả các bài đã học để kiểm tra kiến thức tổng quát.</p>
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
              className="w-full space-y-6 sm:space-y-8"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Nội dung ôn tập</h2>
                <button 
                  onClick={() => { playSound('click'); setMode('selection'); }}
                  className="text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors"
                >
                  Quay lại
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {BIOLOGY_DATA.map((topic, index) => (
                  <motion.button
                    key={topic.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleSelectTopic(topic)}
                    className="w-full p-4 sm:p-6 text-left bg-white border border-slate-100 rounded-2xl hover:border-slate-900 transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
                  >
                    <div className="space-y-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:translate-x-1 transition-transform">{topic.title}</h4>
                      <p className="text-[10px] text-slate-400">{topic.questions.length} câu hỏi</p>
                    </div>
                    <ArrowRight className="text-slate-200 group-hover:text-slate-900 transition-colors shrink-0 ml-4" size={20} />
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
              className="w-full max-w-2xl space-y-6 sm:space-y-8"
            >
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
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

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Question Type: Multiple Choice */}
              {currentQuestion.type === 'choice' && (
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
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
                          "p-4 sm:p-5 rounded-2xl border-2 text-left transition-all relative flex items-center justify-between group min-h-[64px]",
                          !isAnswered && "border-slate-100 hover:border-slate-900 bg-white",
                          isAnswered && option === currentQuestion.answer && "border-green-500 bg-green-50 text-green-900",
                          isAnswered && selectedAnswer === option && option !== currentQuestion.answer && "border-red-500 bg-red-50 text-red-900",
                          isAnswered && selectedAnswer !== option && option !== currentQuestion.answer && "border-slate-50 bg-white opacity-50"
                        )}
                      >
                        <div className="flex items-center gap-3 sm:gap-4 flex-1">
                          <span className={cn(
                            "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold transition-colors",
                            !isAnswered && "bg-slate-50 text-slate-400 group-hover:bg-slate-900 group-hover:text-white",
                            isCorrectResult && "bg-green-500 text-white",
                            isWrongResult && "bg-red-500 text-white",
                            isAnswered && !isCorrectResult && !isWrongResult && "bg-slate-100 text-slate-300"
                          )}>
                            {idx + 1}
                          </span>
                          <span className="font-medium text-sm sm:text-base leading-snug">{option}</span>
                        </div>
                        
                        {isCorrectResult && <CheckCircle2 className="text-green-500 shrink-0" size={18} />}
                        {isWrongResult && <XCircle className="text-red-500 shrink-0" size={18} />}
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {/* Question Type: True/False */}
              {currentQuestion.type === 'true-false' && (
                <div className="space-y-4">
                  {currentQuestion.statements.map((statement, idx) => (
                    <div key={statement.id} className="bg-white p-4 rounded-2xl border border-slate-100 space-y-3">
                      <p className="text-sm font-medium leading-relaxed">
                        <span className="font-bold mr-2">{statement.id}.</span>
                        {statement.text}
                      </p>
                      <div className="flex gap-2">
                        <button
                          disabled={isAnswered}
                          onClick={() => handleTFAnswer(statement.id, true)}
                          className={cn(
                            "flex-1 py-2 rounded-xl border-2 font-bold text-xs transition-all",
                            tfAnswers[statement.id] === true && !isAnswered && "border-slate-900 bg-slate-900 text-white",
                            tfAnswers[statement.id] !== true && !isAnswered && "border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200",
                            isAnswered && statement.answer === true && "border-green-500 bg-green-500 text-white",
                            isAnswered && tfAnswers[statement.id] === true && statement.answer !== true && "border-red-500 bg-red-500 text-white",
                            isAnswered && statement.answer !== true && tfAnswers[statement.id] !== true && "border-slate-100 bg-slate-50 text-slate-200"
                          )}
                        >
                          ĐÚNG
                        </button>
                        <button
                          disabled={isAnswered}
                          onClick={() => handleTFAnswer(statement.id, false)}
                          className={cn(
                            "flex-1 py-2 rounded-xl border-2 font-bold text-xs transition-all",
                            tfAnswers[statement.id] === false && !isAnswered && "border-slate-900 bg-slate-900 text-white",
                            tfAnswers[statement.id] !== false && !isAnswered && "border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200",
                            isAnswered && statement.answer === false && "border-green-500 bg-green-500 text-white",
                            isAnswered && tfAnswers[statement.id] === false && statement.answer !== false && "border-red-500 bg-red-500 text-white",
                            isAnswered && statement.answer !== false && tfAnswers[statement.id] !== false && "border-slate-100 bg-slate-50 text-slate-200"
                          )}
                        >
                          SAI
                        </button>
                      </div>
                    </div>
                  ))}
                  {!isAnswered && (
                    <button
                      onClick={handleValidateComposite}
                      disabled={Object.keys(tfAnswers).length < currentQuestion.statements.length}
                      className={cn(
                        "w-full py-4 rounded-2xl font-bold text-sm transition-all shadow-lg active:scale-[0.98]",
                        Object.keys(tfAnswers).length === currentQuestion.statements.length 
                          ? "bg-slate-900 text-white hover:bg-slate-800" 
                          : "bg-slate-100 text-slate-300 cursor-not-allowed"
                      )}
                    >
                      KIỂM TRA ĐÁP ÁN
                    </button>
                  )}
                </div>
              )}

              {/* Question Type: Matching */}
              {currentQuestion.type === 'matching' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {currentQuestion.pairs.map((pair, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row gap-2">
                        <div className="bg-slate-900 text-white p-4 rounded-xl flex-1 flex items-center justify-center font-bold text-sm">
                          {pair.left}
                        </div>
                        <div className="hidden sm:flex items-center text-slate-200">
                          <ArrowRight size={24} />
                        </div>
                        <div className="flex-[2] relative">
                          <select
                            disabled={isAnswered}
                            value={matchingAnswers[pair.left] || ''}
                            onChange={(e) => handleMatchingAnswer(pair.left, e.target.value)}
                            className={cn(
                              "w-full p-4 rounded-xl border-2 font-medium text-sm appearance-none bg-white",
                              !isAnswered && "border-slate-100 hover:border-slate-900",
                              isAnswered && matchingAnswers[pair.left] === pair.right && "border-green-500 bg-green-50 text-green-900 opacity-100",
                              isAnswered && matchingAnswers[pair.left] !== pair.right && "border-red-500 bg-red-50 text-red-900 opacity-100"
                            )}
                          >
                            <option value="">Chọn đáp án...</option>
                            {currentQuestion.pairs.map(p => (
                              <option key={p.right} value={p.right}>{p.right}</option>
                            ))}
                          </select>
                          {isAnswered && matchingAnswers[pair.left] !== pair.right && (
                            <p className="text-[10px] text-red-500 mt-1 font-bold">Đáp án đúng: {pair.right}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {!isAnswered && (
                    <button
                      onClick={handleValidateComposite}
                      disabled={Object.keys(matchingAnswers).length < currentQuestion.pairs.length}
                      className={cn(
                        "w-full py-4 rounded-2xl font-bold text-sm transition-all shadow-lg active:scale-[0.98]",
                        Object.keys(matchingAnswers).length === currentQuestion.pairs.length 
                          ? "bg-slate-900 text-white hover:bg-slate-800" 
                          : "bg-slate-100 text-slate-300 cursor-not-allowed"
                      )}
                    >
                      KIỂM TRA ĐÁP ÁN
                    </button>
                  )}
                </div>
              )}

              <div className="flex justify-between items-center text-slate-400 text-[10px] font-medium italic">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                  {currentQuestion.type === 'choice' && <span>Dùng phím 1-4 để chọn</span>}
                  <span className="hidden sm:inline">Enter để tiếp tục</span>
                </div>
                {isAnswered && (
                  <motion.button
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={handleNext}
                    className="flex items-center gap-2 text-slate-900 font-bold not-italic group"
                  >
                    <span className="text-xs">{currentIndex === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
              className="w-full max-w-lg space-y-8 sm:space-y-12 text-center"
            >
              <div className="space-y-6">
                <div className="inline-block p-4 sm:p-6 rounded-full bg-green-600 text-white mb-2 underline-none">
                  <CheckCircle2 size={40} className="sm:w-[48px] sm:h-[48px]" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase tracking-tighter">Hoàn thành!</h1>
                <div className="flex justify-center gap-8 sm:gap-12">
                  <div className="space-y-1">
                    <p className="text-4xl sm:text-5xl font-black text-slate-900">{score}/{questions.length}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Điểm số</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-4xl sm:text-5xl font-black text-slate-900">{Math.round((score / questions.length) * 100)}%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Độ chính xác</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs italic">Thời gian hoàn thành: {quizDuration} giây</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button 
                  onClick={() => handleStartRandom()}
                  className="flex items-center justify-center gap-3 py-4 sm:py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg text-sm sm:text-base"
                >
                  <RotateCcw size={18} />
                  ÔN LẠI TỪ ĐẦU
                </button>
                <Link 
                  href="/"
                  className="flex items-center justify-center gap-3 py-4 sm:py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:border-slate-900 transition-all active:scale-95 text-sm sm:text-base"
                >
                  <Home size={18} />
                  VỀ TRANG CHỦ
                </Link>
                </div>
                
                {wrongQuestions.length > 0 && (
                  <button 
                  onClick={handleReviewWrong}
                  className="flex items-center justify-center gap-3 py-4 sm:py-5 bg-red-50 text-red-600 border border-red-100 rounded-2xl font-bold hover:bg-red-100 transition-all active:scale-95 text-sm sm:text-base"
                >
                  <BookOpen size={18} />
                  ÔN LẠI CÂU SAI ({wrongQuestions.length})
                </button>
                )}
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

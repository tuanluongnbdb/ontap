'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Languages, Dna, ScrollText, Lock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const SUBJECTS = [
  {
    id: 'english',
    name: 'Tiếng Anh',
    icon: Languages,
    description: 'Luyện kỹ năng giao tiếp và ngữ pháp chuyên sâu.',
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-50',
    hoverBorder: 'hover:border-blue-500',
    dotColor: 'bg-blue-500'
  },
  {
    id: 'biology',
    name: 'Sinh Học',
    icon: Dna,
    description: 'Khám phá thế giới tự nhiên và sự sống con người.',
    colorClass: 'text-green-600',
    bgClass: 'bg-green-50',
    hoverBorder: 'hover:border-green-500',
    dotColor: 'bg-green-500'
  },
  {
    id: 'history',
    name: 'Lịch Sử',
    icon: ScrollText,
    description: 'Tìm hiểu về các nền văn minh và các sự kiện vĩ đại.',
    colorClass: 'text-orange-600',
    bgClass: 'bg-orange-50',
    hoverBorder: 'hover:border-orange-500',
    dotColor: 'bg-orange-500'
  },
];

export default function HomePage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans uppercase-none">
      {/* Header Navigation */}
      <nav className="px-6 py-8 sm:px-12 flex justify-between items-center bg-transparent">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">STUDYFLOW</span>
        </div>
        <div className="hidden sm:flex gap-8 text-sm font-medium text-slate-500 uppercase tracking-widest">
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-6 sm:px-12 py-12 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 leading-[1.1] mb-4">
              Hệ thống ôn tập <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Cuối học kỳ 2</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-slate-500 text-lg sm:text-xl font-medium italic"
            >
              Nâng cao hiệu quả học tập với phương pháp ôn tập thông minh.
            </motion.p>
          </motion.div>
        </div>

        {/* Subjects Grid */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6 mb-16 sm:grid-cols-3"
        >
          {SUBJECTS.map((subject) => {
            const Icon = subject.icon;
            const isSelected = selectedSubject === subject.id;

            return (
              <motion.button
                key={subject.id}
                id={`subject-${subject.id}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                }}
                onClick={() => setSelectedSubject(subject.id)}
                className={cn(
                  "group relative bg-white border p-8 rounded-2xl shadow-sm text-left transition-all duration-300",
                  isSelected 
                    ? `border-slate-800 ring-1 ring-slate-800 shadow-md` 
                    : `border-slate-200 ${subject.hoverBorder} hover:shadow-lg`
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                  subject.bgClass,
                  subject.colorClass
                )}>
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{subject.name}</h3>
                <div className="absolute top-4 right-4">
                  <div className={cn("w-2 h-2 rounded-full", subject.dotColor)}></div>
                </div>

                {isSelected && (
                  <motion.div 
                    layoutId="selection-glow"
                    className="absolute inset-0 rounded-2xl bg-slate-900/[0.03] -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Access Button (Locked State) */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {selectedSubject === 'history' || selectedSubject === 'biology' || selectedSubject === 'english' ? (
              <Link 
                href={selectedSubject === 'history' ? "/history" : `/biology?sub=${selectedSubject}`}
                className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95 uppercase"
              >
                BẮT ĐẦU ÔN TẬP
                <ArrowRight size={20} strokeWidth={2.5} />
              </Link>
            ) : (
              <button 
                id="access-button"
                disabled
                className="w-full sm:w-auto px-12 py-5 bg-slate-200 text-slate-400 rounded-2xl font-bold flex items-center justify-center gap-3 cursor-not-allowed transition-all uppercase"
              >
                <Lock size={20} strokeWidth={2.5} />
                BẮT ĐẦU ÔN TẬP
              </button>
            )}
            {selectedSubject !== 'history' && selectedSubject !== 'biology' && (
              <span className="text-sm text-slate-400 font-medium italic underline underline-offset-4 decoration-slate-200">
                * Vui lòng chọn môn học để tiếp tục
              </span>
            )}
          </motion.div>
        </div>
      </main>

      {/* Bottom Decorative Detail / Footer */}
      <footer className="px-6 py-8 sm:px-12 flex justify-between items-center border-t border-slate-100 bg-white">
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
        </div>
        <span className="text-xs text-slate-300 font-mono tracking-widest uppercase">v1.0.4 // ACADEMIC_PLATFORM</span>
      </footer>
    </div>
  );
}

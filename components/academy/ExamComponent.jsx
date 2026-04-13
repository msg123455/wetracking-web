"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { CheckCircle, XCircle, Trophy } from 'lucide-react';

export default function ExamComponent({ exam, profile, existingResult, onResult }) {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(existingResult || null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (Object.keys(answers).length < exam.questions.length) {
      alert('Por favor responde todas las preguntas');
      return;
    }
    setSubmitting(true);

    let correct = 0;
    exam.questions.forEach((q, i) => {
      if (answers[i] === q.correct_index) correct++;
    });

    const score = Math.round((correct / exam.questions.length) * 100);
    const passed = score >= (exam.min_score || 70);

    const answersArray = exam.questions.map((_, i) => answers[i] ?? -1);

    const prevResults = await base44.entities.AcademyExamResult.filter({
      user_email: profile.user_email,
      exam_id: exam.id
    });

    const attempt = prevResults.length + 1;

    const res = await base44.entities.AcademyExamResult.create({
      user_email: profile.user_email,
      user_name: profile.full_name,
      company: profile.company,
      exam_id: exam.id,
      score,
      passed,
      answers: answersArray,
      attempt_number: attempt
    });

    setResult(res);
    onResult && onResult(res);
    setSubmitting(false);
  };

  if (result) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${result.passed ? 'bg-green-100' : 'bg-red-100'}`}>
          {result.passed
            ? <Trophy className="w-12 h-12 text-green-600" />
            : <XCircle className="w-12 h-12 text-red-500" />}
        </div>
        <h2 className={`text-4xl font-extrabold mb-2 ${result.passed ? 'text-green-600' : 'text-red-500'}`}>
          {result.score}%
        </h2>
        <p className="text-2xl font-bold text-[#0b194f] mb-2">
          {result.passed ? '¡Aprobaste!' : 'No aprobaste'}
        </p>
        <p className="text-[#0b194f]/60 mb-6">
          Puntaje mínimo requerido: {exam.min_score || 70}%
        </p>
        {!result.passed && (
          <button
            onClick={() => { setResult(null); setAnswers({}); }}
            className="px-8 py-3 bg-[#007aed] text-white font-bold rounded-full hover:bg-[#0b194f] transition-colors"
          >
            Intentar de nuevo
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#0b194f]">{exam.title}</h2>
        <p className="text-[#0b194f]/60">Puntaje mínimo para aprobar: {exam.min_score || 70}%</p>
      </div>

      {exam.questions.map((q, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="bg-[#f5f7fa] rounded-2xl p-6"
        >
          <p className="font-bold text-[#0b194f] mb-4">
            {i + 1}. {q.question}
          </p>
          <div className="space-y-3">
            {q.options.map((opt, j) => (
              <button
                key={j}
                onClick={() => setAnswers({ ...answers, [i]: j })}
                className={`w-full text-left px-5 py-3 rounded-xl border-2 transition-all font-medium ${
                  answers[i] === j
                    ? 'border-[#007aed] bg-[#007aed]/10 text-[#007aed]'
                    : 'border-transparent bg-white text-[#0b194f]/70 hover:border-[#007aed]/30'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>
      ))}

      <button
        onClick={handleSubmit}
        disabled={submitting || Object.keys(answers).length < exam.questions.length}
        className="w-full py-4 bg-[#007aed] text-white font-bold rounded-xl hover:bg-[#0b194f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {submitting ? 'Enviando...' : 'Enviar Examen'}
      </button>
    </div>
  );
}


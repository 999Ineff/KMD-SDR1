import React, { useState } from 'react';

const scriptData = [...]; // (unchanged)

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!selectedCategory) {
    return (
      <div className="p-6 max-w-3xl mx-auto font-sans">
        <h1 className="text-3xl font-bold mb-6">SDR Script & Training</h1>
        <div className="space-y-4">
          {scriptData.map((cat, idx) => (
            <button
              key={idx}
              className="w-full text-left border rounded-xl shadow p-4 hover:bg-gray-100 transition-all"
              onClick={() => setSelectedCategory(idx)}
            >
              <h2 className="text-xl font-semibold">{cat.title}</h2>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const category = scriptData[selectedCategory];

  return (
    <div className="p-6 max-w-3xl mx-auto font-sans">
      <div
        className="text-gray-500 text-sm cursor-pointer mb-4 inline-block hover:underline"
        onClick={() => {
          setSelectedCategory(null);
          setExpandedIndex(null);
        }}
      >
        ← Back to all sections
      </div>

      <h2 className="text-2xl font-bold mb-4">{category.title}</h2>

      {category.sections.length === 0 ? (
        <p className="text-gray-600 italic">Coming soon...</p>
      ) : (
        category.sections.map((section, idx) => (
          <div key={idx} className="mb-4 border rounded-xl shadow">
            <button
              className="w-full text-left font-semibold text-lg p-4 bg-gray-50 hover:bg-gray-100 transition-all"
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
            >
              {section.title}
            </button>
            {expandedIndex === idx && (
              <div className="p-4 pt-0 text-gray-800 whitespace-pre-line border-t">
                {section.content}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

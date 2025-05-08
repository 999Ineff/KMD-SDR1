import React, { useState } from 'react';

const scriptData = [
  {
    title: 'Complete Call Flows',
    sections: [
      {
        title: 'Interested but already has their own system',
        content: `Me:
“Johnny, my name is Luis. Just curious—could you use more leads and appointments...`
      },
      {
        title: '“We’d love more business” – No Price Objection',
        content: `Me:
“Johnny, my name is Luis. Just curious—could you use more leads and appointments...`
      },
      {
        title: 'Interested, but tight on money',
        content: `Run the Scenario 2 pitch, and when cost comes up:
Me:
“Totally understand—let’s get you on a call with Kevin...”`
      },
      {
        title: 'Has a system, but skeptical',
        content: `This DM isn’t dismissive but more closed off than Scenario 1. They listen but are guarded...`
      },
    ],
  },
  {
    title: 'Knowledge Base',
    sections: [],
  },
  {
    title: 'FAQs',
    sections: [],
  },
  {
    title: 'SDR Call Objection Handling Scenarios',
    sections: [
      {
        title: "'We already do that.'",
        content: `DM: “We already do that.” (Flat tone, ready to hang up)...`
      },
      {
        title: "'We don’t do email marketing.'",
        content: `DM: “We don’t really do email marketing.”...`
      },
      {
        title: "'We generate all our own leads internally.'",
        content: `DM: “We’ve got reps calling and doing all that already.”...`
      },
      {
        title: "'We don’t have time for this.'",
        content: `DM: “I just don’t have time to take this on right now.”...`
      },
      {
        title: "'We’ve tried email marketing before—it didn’t work.'",
        content: `DM: “We’ve done email campaigns before. Didn't get anything from it.”...`
      },
      {
        title: "'We don’t have budget for that.'",
        content: `DM: “We just don’t have money for something like that right now.”...`
      },
      {
        title: "Fast Brush-Offs: 'Not interested.' / 'We’re good.' / 'Already have something.'",
        content: `DM: “We’re good, thanks.”...`
      },
    ],
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!selectedCategory) {
    return (
      <div className="p-6 max-w-3xl mx-auto font-sans">
        <h1 className="text-3xl font-bold mb-6">SDR Script & Training</h1>
        <div className="space-y-4">
          {scriptData.map((cat, idx) => (
            <div
              key={idx}
              className="border rounded-xl shadow p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedCategory(idx)}
            >
              <h2 className="text-xl font-semibold">{cat.title}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const category = scriptData[selectedCategory];

  return (
    <div className="p-6 max-w-3xl mx-auto font-sans">
      <div
        className="text-gray-500 text-sm cursor-pointer mb-4 inline-block"
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
              className="w-full text-left font-semibold text-lg p-4"
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
            >
              {section.title}
            </button>
            {expandedIndex === idx && (
              <div className="p-4 pt-0 text-gray-800 whitespace-pre-line">
                {section.content}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

import React, { useState } from 'react';

const scriptData = [
  {
    title: 'Complete Call Flows',
    sections: [
      {
        title: 'Interested but already has their own system',
        content: `Me:
“Johnny, my name is Luis. Just curious—could you use more leads and appointments for yourself or your sales team?”

DM:
“We already do our own lead generation and prospecting.” (But doesn’t hang up)

Me:
“That’s great. What methods are you using, and how are they working for you? Reps? CRM? Email?”

DM:
“We’re using X, Y, and/or Z, and it’s going well.”

(For us, it doesn’t matter what they use—LM offers the best ROI.)

Me:
“There are a lot of great ways to generate leads, and the top two will always be:

Sales reps—boots on the ground, cold outreach

And second, when done right—email marketing. It has the highest ROI of any method.

What Kevin, my boss and the company owner, specializes in is high-volume email campaigns:

Up to 3,000 emails daily

60,000 emails monthly

Infinitely scalable

While your current methods may be valuable, their reach can’t compare to this.

I’d love to get you on a quick call with Kevin. He can walk you through how his system maintains domain and server reputation while achieving excellent deliverability.

Within five minutes, he can show you a sample prospect list and break down the setup. He handles the entire buildout—server setup, copywriting, spyntax, deliverability, everything. It’s fully done-for-you.”

DM:
“You can go ahead and send the email, but like I said, we already have a system in place.”

Me:
“Perfect—I just hit send. Let me know if you received it.
Let’s get you on a call with Kevin—he has over 7 years of experience and has sent over 100 million emails. He’s an expert in this space, and within minutes he can share the prospect list and explain how it all works.”

Additional Note:

If they ask, “How are you different?” — your goal is not to be a subject matter expert. Keep it tight, get them to Kevin.

Me:
“The key difference is volume and deliverability.

Kevin sets up a private, dedicated server—not connected to your main domain—allowing for large-scale outreach while protecting your brand and domain reputation.

CRM-style email systems just don’t support this scale and can put your domain at risk.

We focus on:

Real decision-maker prospect lists

High-response block-style copy

Spyntax to ensure each email is unique

Automated systems requiring as little as 30 minutes a week once running.”`
      },
      {
        title: '“We’d love more business” – No Price Objection',
        content: `Me:
“Johnny, my name is Luis. Just curious—could you use more leads and appointments for yourself or your sales team?”

DM:
“Yes, definitely.”

Me:
“In sales and marketing, there are many methods to generate leads. The top two:

Sales reps doing cold outreach

Email marketing—which, when done right, has the highest ROI.

What Kevin specializes in is high-volume email outreach:

Up to 3,000 emails per day

60,000 per month

Fully scalable to your prospect list

We build lists of real decision-makers and launch campaigns from a dedicated, private server personalized for your organization.

What makes it effective:

Verified prospect list

30/20 warm-to-cold email strategy

Valuable, response-driven block-style copy (not Mailchimp-style brand awareness)

Spyntax

Full automation

I just sent over an email—let's get you on a quick call with Kevin. Within five minutes, he’ll show you the prospect list and walk through everything.”

DM:
“Sounds complicated / I can’t manage this.”

Me:
“Once the system is set up, Kevin will train either you or the right person on how to manage it.

The campaign manager is simple to use and requires just 20–30 minutes a week after the first two weeks. Kevin’s an expert—he’s sent over 100 million emails and is one of the top campaign managers in the country.

Let’s get you on a call with him so he can show you what to expect. I just hit send on the email—did you get it?”

Comment:
In this scenario, they agreed early—so no need to ask much about their current system. They likely don’t have one or aren’t proud of it.

If later they say:
“We use a CRM”
“We have reps calling all day”
→ Reframe using Scenario 1 rebuttals, then direct back to Kevin.

If they say:
“This sounds expensive”
“We don’t have time”
→ Lean into Kevin’s expertise, automation, and how he’ll walk them through everything.`
      },
      {
        title: 'Interested, but tight on money',
        content: `Run the Scenario 2 pitch, and when cost comes up:

Me:
“Totally understand—let’s get you on a call with Kevin first so he can show you the prospect list and explain how the system works.

We’re talking about 3,000 outbound messages per day—driving anywhere from 1 to 10 real leads daily.

If budget is a concern, there are a couple of setup options Kevin can walk through with you. He’ll tailor it to what makes the most sense for your business.”

(Internally, this refers to: complete up-front or white glove. The white glove might be more flexible for smaller budgets.)`
      },
      {
        title: 'Has a system, but skeptical',
        content: `This DM isn’t dismissive but more closed off than Scenario 1. They listen but are guarded. The goal:

Find out what they’re using
Separate our system clearly from theirs

Probing Questions:
“How are you currently generating inbound leads?”
“How many reps are on your team?”
“Do they do their own prospecting?”
“Running anything else for inbound?”
“Are you using email marketing?”
“At what scale—are you sending 3,000 a day?”
“Or using lower-volume CRM-style emails?”
“How’s that working for you?”

Use their answers to highlight limitations and bring them back to Kevin’s system: volume, deliverability, automation, done-for-you.`
      }
    ]
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
    sections: [...] // existing content unchanged
  }
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

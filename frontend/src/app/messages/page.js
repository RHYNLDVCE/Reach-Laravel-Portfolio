"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/messages")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setMessages(data.data);
        }
      })
      .catch((err) => console.error("Failed to load messages", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-xs uppercase tracking-widest font-mono text-neutral-500">
            Inbox
          </h1>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Submitted Inquiries ({messages.length})
          </p>
        </div>

        <button
          onClick={fetchMessages}
          className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-800 transition-colors cursor-pointer"
        >
          refresh ↻
        </button>
      </div>

      {loading ? (
        <p className="text-xs font-mono text-neutral-500">Loading messages from Laravel...</p>
      ) : messages.length === 0 ? (
        <div className="p-8 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 text-center space-y-3">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">No messages submitted yet.</p>
          <Link href="/contact" className="text-xs text-neutral-900 dark:text-white underline">
            Go to Contact page &rarr;
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200 dark:border-neutral-900 pb-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white">{msg.name}</span>
                  <a
                    href={`mailto:${msg.email}`}
                    className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors underline"
                  >
                    {msg.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-500">
                  <span>MSG-{String(msg.id).padStart(5, "0")}</span>
                  <span>&bull;</span>
                  <span>{new Date(msg.created_at).toLocaleString()}</span>
                </div>
              </div>

              {msg.subject && (
                <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                  <span className="text-neutral-400 dark:text-neutral-600">Subject:</span> {msg.subject}
                </div>
              )}

              <p className="text-xs text-neutral-800 dark:text-neutral-300 leading-relaxed whitespace-pre-wrap bg-neutral-100 dark:bg-neutral-900/50 p-3 rounded-lg border border-neutral-200 dark:border-neutral-900 font-mono">
                {msg.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

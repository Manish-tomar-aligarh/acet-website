// src/app/notices/page.tsx
'use client';
import { useEffect, useState } from 'react';

type Notice = {
  _id: string;
  title: string;
  body: string;
  tags: string[];
  pdfUrl?: string;
  createdAt?: string;
};

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/notices')
      .then(r => r.json())
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Notices</h1>
      <div className="grid gap-4">
        {notices.map(n => (
          <div key={n._id} className="p-4 bg-white rounded shadow">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{n.title}</h3>
              <span className="text-sm text-gray-500">{new Date(n.createdAt || '').toLocaleDateString()}</span>
            </div>
            <p className="mt-2 text-gray-700">{n.body}</p>
            {n.pdfUrl && (
              <a className="mt-2 inline-block text-blue-600" href={n.pdfUrl} target="_blank" rel="noreferrer">
                Download PDF
              </a>
            )}
            <div className="mt-2 text-sm text-gray-500">{(n.tags || []).join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// src/app/admin/notices/page.tsx
'use client';
import { useState } from 'react';

export default function AdminNotices() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [msg, setMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg('Saving...');
    const res = await fetch('/api/notices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-secret': (document.getElementById('admin-secret') as HTMLInputElement).value || '',
      },
      body: JSON.stringify({
        title,
        body,
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        pdfUrl: pdfUrl || undefined,
      }),
    });

    if (res.ok) {
      setMsg('Notice created ✅');
      setTitle(''); setBody(''); setTags(''); setPdfUrl('');
    } else {
      setMsg('Error creating notice (check secret).');
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Admin — Create Notice</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium">Admin Secret (paste from .env.local)</label>
        <input id="admin-secret" className="mt-1 p-2 border rounded w-full" placeholder="admin secret" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border rounded" required />
        <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Body" className="w-full p-2 border rounded" rows={4} required />
        <input value={tags} onChange={e => setTags(e.target.value)} placeholder="tags,comma,separated" className="w-full p-2 border rounded" />
        <input value={pdfUrl} onChange={e => setPdfUrl(e.target.value)} placeholder="PDF URL (optional)" className="w-full p-2 border rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Create</button>
      </form>

      <p className="mt-3 text-sm text-gray-600">{msg}</p>
    </div>
  );
}

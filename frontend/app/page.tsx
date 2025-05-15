// app/page.tsx
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Yebente ✨</h1>
      
      {/* Text input for articles/URLs */}
      <textarea 
        className="w-full p-4 border rounded-lg mb-4" 
        placeholder="Paste an article or YouTube URL..."
        rows={8}
      />

      {/* Remix button */}
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Remix with AI
      </button>

      {/* Output section */}
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">AI-Generated Posts</h2>
        {/* Dynamically generated posts will go here */}
      </div>
    </main>
  );
}
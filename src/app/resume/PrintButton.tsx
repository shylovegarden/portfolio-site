'use client';

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="text-sm font-semibold px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
    >
      Print / Save PDF
    </button>
  );
}

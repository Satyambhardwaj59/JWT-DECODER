import { Clipboard, ClipboardCheck, Download } from "lucide-react";
import { pretty } from "../utils/prettyPrint";
import { download } from "../utils/fileUtils";
import { useState } from "react";

export default function HeaderCard({ header }) {
  const [copied, setCopied] = useState(false);

  async function copyHeader() {
    if (!header) return;
    await navigator.clipboard.writeText(pretty(header));
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="bg-white rounded-2xl shadow p-4 space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Header</h2>
        <div className="flex items-center gap-2">
          <button
            disabled={!header}
            onClick={copyHeader}
            className="px-3 py-1.5 rounded-lg border hover:bg-gray-50"
          >
            {copied ? (
              <span className="inline-flex items-center gap-1 text-green-700">
                <ClipboardCheck className="h-4 w-4" /> Copied
              </span>
            ) : (
              <span className="inline-flex items-center gap-1">
                <Clipboard className="h-4 w-4" /> Copy
              </span>
            )}
          </button>
          <button
            disabled={!header}
            onClick={() => header && download("jwt-header.json", pretty(header))}
            className="px-3 py-1.5 rounded-lg border hover:bg-gray-50"
          >
            <Download className="h-4 w-4" /> JSON
          </button>
        </div>
      </div>
      <pre className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm overflow-auto min-h-[8rem]">
{header ? pretty(header) : "// decoded header will appear here"}
      </pre>
    </div>
  );
}

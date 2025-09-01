import React from "react";

const PayloadCard = ({ decoded }) => {
  if (!decoded) return null;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-2xl mt-6 bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Decoded JWT</h2>

        <div className="mb-4">
          <h3 className="font-semibold text-indigo-400">Header</h3>
          <pre className="bg-gray-900 p-3 rounded-lg overflow-x-auto text-sm">
            {JSON.stringify(decoded.header, null, 2)}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold text-indigo-400">Payload</h3>
          <pre className="bg-gray-900 p-3 rounded-lg overflow-x-auto text-sm">
            {JSON.stringify(decoded.payload, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PayloadCard;


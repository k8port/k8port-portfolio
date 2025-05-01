import React from 'react';

export default function DebugColors() {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-3xl font-bold mb-4">Color Debug</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Test direct color */}
        <div className="p-4 rounded-lg bg-blue-500">
          <p className="text-white">bg-blue-500 (Built-in)</p>
        </div>
        
        {/* Brand Colors */}
        <div className="p-4 rounded-lg bg-brand-primary">
          <p className="text-white">bg-brand-primary</p>
        </div>
        
        <div className="p-4 rounded-lg bg-brand-secondary">
          <p className="text-black">bg-brand-secondary</p>
        </div>
        
        <div className="p-4 rounded-lg bg-brand-tertiary">
          <p className="text-black">bg-brand-tertiary</p>
        </div>
        
        {/* Collection Colors */}
        <div className="p-4 rounded-lg bg-collection-1-orangewhite">
          <p className="text-black">bg-collection-1-orangewhite</p>
        </div>
        
        <div className="p-4 rounded-lg bg-collection-1-russianviolet">
          <p className="text-white">bg-collection-1-russianviolet</p>
        </div>
      </div>
    </div>
  );
} 
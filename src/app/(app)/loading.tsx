export default function Loading() {
  return (
    <div className="bg-bone-100 h-screen w-full flex flex-col gap-4 items-center justify-center absolute inset-0 z-50">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 bg-fuscous-700 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 bg-fuscous-700 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-fuscous-700 rounded-full animate-bounce"></div>
      </div>
      <h1 className="font-medium text-bone-800 uppercase tracking-widest animate-pulse-sm">
        ...Sabar...
      </h1>
    </div>
  );
}

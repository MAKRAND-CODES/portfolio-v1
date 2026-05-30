const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 -z-10">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full -translate-x-1/2" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />

    </div>
  );
};

export default BackgroundGrid;
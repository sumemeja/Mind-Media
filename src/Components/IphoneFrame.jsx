export default function IphoneFrame() {
  return (
    <div className="flex flex-col items-center">
      {/* Iphone frame */}
      <div className="relative w-[305px] h-[585px] bg-gradient-to-r from-[#37271d] to-[#bb642e] border-[5px] border-black rounded-[40px] overflow-hidden">
        
        {/* Iphone small black thing at the top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[25px] w-[90px] bg-transparent">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[25px] w-[137px] bg-gradient-to-r from-[#37271d] to-[#bb642e] rounded-b-[17px] border-b-[5px] border-l-[5px] border-r-[5px] border-black"></div>
        </div>

        {/* Embed Google Drive Video using iframe */}
        <iframe 
          src="https://drive.google.com/file/d/1V30_pPpp5-j4c1Oy7Bpj5PkGBItOSiX8/preview" 
          allow="autoplay" 
          className="absolute w-[94%] h-[85%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Credits */}
      <p className="mt-4 text-sm text-[#f6d4be] text-center font-mono">
        Video: Hamza Selimović, Cast: Kadir Kopić
      </p>
    </div>
  );
}
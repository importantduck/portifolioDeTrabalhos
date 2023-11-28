

export default function Menu(){
    return(
       <>

<div className="w-[240.93px] h-[700px] fixed">
    <div className="w-[240.93px] h-[700px] left-0 top-0 absolute bg-neutral-800" />
    <div className="w-[240.93px] h-[188.46px] left-0 top-0 absolute bg-zinc-800" />
    <img className="w-[84.91px] h-[84.91px] left-[78.01px] top-[17.95px] absolute rounded-full" src="data:image/png;base64,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" />
    <div className="left-[48.32px] top-[110.45px] absolute text-white text-xl font-bold font-['Inter']">Ruan Sampaio</div>
    <div className="left-[16.57px] top-[207.10px] absolute text-white text-lg font-bold font-['Inter']">País:</div>
    <div className="left-[16.57px] top-[239.55px] absolute text-white text-lg font-bold font-['Inter']">Cidade:</div>
    <div className="left-[16.57px] top-[271.99px] absolute text-white text-lg font-bold font-['Inter']">Idade:</div>
    <div className="left-[179.49px] top-[207.10px] absolute text-white text-lg font-medium font-['Inter']">Brasil</div>
    <div className="left-[107px] top-[239.55px] absolute text-white text-lg font-medium font-['Inter']">Guaratinguetá</div>
    <div className="left-[202.96px] top-[271.99px] absolute text-white text-lg font-medium font-['Inter']">23</div>
    <div className="left-[35.90px] top-[142.90px] absolute text-white text-sm font-medium font-['Inter']">Desenvolvedor Full-Stack</div>
    <div className="w-[232.64px] h-[0px] left-[4.14px] top-[304.44px] absolute border border-white"></div>
    <div className="w-[232.64px] h-[0px] left-[4.14px] top-[506.71px] absolute border border-white"></div>
    <div className="left-[93.20px] top-[316.17px] absolute text-white text-xl font-bold font-['Inter']">Skills</div>
    <div className="left-[80.08px] top-[519.13px] absolute text-white text-xl font-bold font-['Inter']">Idiomas</div>
    <img className="w-[80.85px] h-[48.32px] left-[22.09px] top-[567.46px] absolute" src="https://via.placeholder.com/81x48" />
    <img className="w-[80.85px] h-[48.32px] left-[137.38px] top-[567.46px] absolute" src="https://via.placeholder.com/81x48" />
    <div className="w-[34.52px] h-[34.52px] left-[57.30px] top-[660.65px] absolute bg-zinc-300 rounded-full" />
    <div className="w-[34.52px] h-[34.52px] left-[102.86px] top-[660.65px] absolute bg-zinc-300 rounded-full" />
    <div className="w-[34.52px] h-[34.52px] left-[148.42px] top-[660.65px] absolute bg-zinc-300 rounded-full" />
    <img className="w-[185.38px] h-[52.47px] left-[27.61px] top-[422.49px] absolute rounded-[26.23px]" src="https://via.placeholder.com/185x52" />
    <img className="w-[185.38px] h-[52.47px] left-[27.61px] top-[355.52px] absolute rounded-[24.85px]" src="https://via.placeholder.com/185x52" />
</div>
      
       </>
    )
}
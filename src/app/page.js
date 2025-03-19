
export default function Home() {
 return (
    <div className="wrapper p-[16px] pb-[100px]">
     {/*TOP BAR HEADER*/}
      <header className="db flex justify-between items-center">
       <h1 className="text-[50px] font-bold">Your Task</h1> 
       <img className="w-[24px] h-[24px]"
       src="/ham.jpg" />
      </header>
      
      {/* MAIN CONTENT*/}
      <main className="flex flex-col gap-[16px]">
        <input types="text" placeholder="Search" className="p-[16px] pl-[24px] border-gray-500 border-[1px] rounded-[100px] w-[100%]"/>
        <img className="rounded-[24px] w-[100%]" src="/gojo.jpeg"/>
        <img className="rounded-[24px] w-[100%]" src="/sukuna.jpg"/>
     </main>
    </div>
)
}

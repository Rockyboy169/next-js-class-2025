export default function ContactCard({name, des, imageUrl="/blankPhoto.png"}){
    return (
    <div className="shadow-md rounded-[16px] p-[16px] flex items-center gap-[8px] bg-blue-300" >
        <img src={imageUrl} className="w-[48px] h-[48px] rounded-[100px]" />
        <div>        
            <h2 className="text-[16px] font-bold text-black">{name}</h2>
            <p className="text-[12px] text-gray-500">{des}</p>
        </div>

    </div>
    )
}
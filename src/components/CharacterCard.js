export default function CharacterCard({name ,types}){
    return(
        <div className="shaow-md rounded-[8px] p-[16px] flex flex-col gap-[8px]">
            <div className="text-[16px] font-bold">{name}</div>
            <div className="text-[12px] text-gray-500">{types}</div>
        </div>
    )
}
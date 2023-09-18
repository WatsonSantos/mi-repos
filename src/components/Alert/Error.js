export default function Error({text}){
    return(
        <>
        <div className="bg-red-600 p-4 absolute top-4 md:top-10 md:right-4">
            <span className="text-white">{text}</span>
        </div>
        </>
    );
}
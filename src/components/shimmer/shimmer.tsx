export const ShimmerBody = () => {

    const dummyArray = [];

    for (let i = 0; i < 15; i++) {
        dummyArray.push(i)
    }

    return (
        <div className="size-full flex flex-wrap justify-around gap-5 m-6">
            {
                dummyArray.map((i) => (
                    <div key={i} className="size-80 wei p-2 bg-gray-200 border-none shadow-md rounded-2xl"></div>
                ))
            }
        </div>
    )
};
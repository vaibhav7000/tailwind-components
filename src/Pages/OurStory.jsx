export default function OurStory() {


    return (
        <div className="h-screen w-screen">
            <div className="w-[95%] mx-auto flex md:flex-col md:items-start lg:flex-row lg:gap-x-24 lg:items-center ">
                <div className="basis-[calc(50%-48px)] grow shrink-0 flex flex-col gap-y-10">
                    <div>
                        {content.title}
                    </div>


                    <div>
                        {content.description}
                    </div>

                </div>

                <div className="basis-[calc(50%-48px)] grow shrink-0 flex flex-row gap-6 flex-wrap">
                    {content.images.map(image => {
                        return (
                            <div className="basis-[calc(50%-12px)] grow-1 aspect-square">
                                <img className="w-full h-full aspect-square" src={image} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
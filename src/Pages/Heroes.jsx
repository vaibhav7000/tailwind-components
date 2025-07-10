export default function Heroes() {

// add content 

    return (
        <div className="w-screen h-screen overflow-y-scroll bg-neutral-950">
            <div className="flex flex-row flex-wrap w-[95%] mx-auto gap-6 justify-end">
                {content.map((hero, index) => {
                    return (
                        <div className={`flex ${index === 0 ? 'flex-row basis-full': 'flex-col flex-[32%]'} gap-6`}>
                            <div className="basis-2/3 aspect-video grow-0 shrink-0">
                                <img className="h-full w-full object-cover" src={hero.image}/>
                            </div>

                            <div className="flex flex-col gap-y-6">
                                <div className="text-white uppercase text-2xl">{hero.title}</div>
                                <div className="text-white text-lg">{hero.description}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
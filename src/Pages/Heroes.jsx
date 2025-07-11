export default function Heroes() {

    const content = [{
        image: "https://res.cloudinary.com/roundglass/image/upload/f_auto,c_crop,x_0,y_94,w_2560,h_1439/ar_16:9,c_fill,w_1000,g_face,q_auto/v1740135926/rg/collective/media/ladakh-tsewang-namgail-profile-courtesy_rvk7fq_sfrewe.jpg",
        title: "heroes",
        description: "Ladakh, Then and Now: In Conversation with Dr Tsewang Namgail"
    }, {
        image: "https://res.cloudinary.com/roundglass/image/upload/f_auto,c_crop,x_189,y_0,w_2075,h_3113/ar_2:3,c_fill,w_auto/g_auto,q_auto/v1740135905/rg/collective/media/ladakh-tsewang-namgail-profile-courtesy_luvmrf.jpg",
        title: "heroes",
        description: "Ladakh, Then and Now: In Conversation with Dr Tsewang Namgail"
    }, {
        image: "https://res.cloudinary.com/roundglass/image/upload/f_auto,c_crop,x_189,y_0,w_2075,h_3113/ar_2:3,c_fill,w_auto/g_auto,q_auto/v1740135905/rg/collective/media/ladakh-tsewang-namgail-profile-courtesy_luvmrf.jpg",
        title: "heroes",
        description: "Ladakh, Then and Now: In Conversation with Dr Tsewang Namgail"
    }, {
        image: "https://res.cloudinary.com/roundglass/image/upload/f_auto,c_crop,x_189,y_0,w_2075,h_3113/ar_2:3,c_fill,w_auto/g_auto,q_auto/v1740135905/rg/collective/media/ladakh-tsewang-namgail-profile-courtesy_luvmrf.jpg",
        title: "heroes",
        description: "Ladakh, Then and Now: In Conversation with Dr Tsewang Namgail"
    }]

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
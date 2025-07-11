export default function OurStory() {
    const content = {
        title: "Our Story",
        description: "Roundglass Sustain is a not-for-profit initiative dedicated to telling powerful stories about India’s natural world to inspire wonder, foster awareness, and drive conservation. Through evocative films, striking photography, insightful writing, and engaging infographics, we document the country’s rich biodiversity—creating a comprehensive, freely accessible digital encyclopedia of species and habitats.Our stories, rooted in science, are told in partnership with communities, scientists, conservationists, and regional storytellers, ensuring diverse voices and perspectives. By eliminating jargon and making knowledge accessible, we bridge the gap between science and the public, igniting empathy and responsibility toward nature.Our impact extends beyond storytelling—our content has influenced policy decisions, supported conservation efforts, and empowered grassroots initiatives. We share our work freely with schools, organizations, and governments, ensuring it serves as a resource for education and action. Roundglass Sustain is a platform for change, nurturing a deeper connection between people and the natural world.",
        images: [
            "https://res.cloudinary.com/roundglass/image/upload/w_800,f_auto,q_auto/v1751963758/sustain-v2/1%20OUR%20STORY-SaurabhSawant_Mushroom_Phansad_IMG_1080.jpg",

            "https://res.cloudinary.com/roundglass/image/upload/w_800,f_auto,q_auto/v1751963756/sustain-v2/2%20OUR%20STORY-Marasmius%20sp.-pinwheel-mushroom-_5000841_Saurabh_Marasmius_SGNP_MH_20190728.jpg",

            "https://res.cloudinary.com/roundglass/image/upload/w_800,f_auto,q_auto/v1752051580/sustain-v2/3%20OUR%20STORY%20blennies-polka-dotted-umeed-mistry.jpg"
        ]
    }


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
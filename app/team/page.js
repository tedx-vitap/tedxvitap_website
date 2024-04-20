import TeamCard from "../(components)/TeamCard"
import TeamData from "../(data)/team.json"

export default function Team() {
    return (
        <div className="max-w-screen-lg mx-auto md:px-8">
            <div className="pt-28 mb-8 text-2xl font-bold text-white sm:text-3xl md:mb-12 md:text-4xl">
                MEET THE TEAM
            </div>
            <div className="pt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-14 ">
                {TeamData.map((person) => (
                    <TeamCard
                        name={person.name}
                        position={person.position}
                        image={person.image}
                    />
                ))}            
            </div>
        </div>
    )
}
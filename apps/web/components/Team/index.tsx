// components/MeetOurTeam.tsx
export default function MeetOurTeam() {
  const team = [
    {
      name: "Akshat Sharma",
      role: "Frontend Developer",
      image: "https://via.placeholder.com/150",
      bio: "Passionate about building clean UI and crafting smooth user experiences.",
    },
    {
      name: "Priya Verma",
      role: "Backend Engineer",
      image: "https://via.placeholder.com/150",
      bio: "Loves scalable systems, APIs, and solving tricky backend challenges.",
    },
    {
      name: "Rohit Mehta",
      role: "AI/ML Researcher",
      image: "https://via.placeholder.com/150",
      bio: "Exploring the boundaries of AI to bring real-world impact.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-10">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white/5 border border-green-600/30 rounded-lg p-6 text-center hover:shadow-lg hover:scale-105 transition transform"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-green-500"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-green-400">{member.role}</p>
            <p className="text-gray-300 mt-3 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

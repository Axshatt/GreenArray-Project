// components/PlantCareList.tsx
export default function PlantCareList() {
  const careTips = [
    {
      icon: "🌿",
      title: "Watering",
      description:
        "Check soil moisture before watering. Water thoroughly when the top inch of soil feels dry. Avoid overwatering.",
    },
    {
      icon: "☀️",
      title: "Sunlight",
      description:
        "Understand your plant's light needs and place it accordingly.",
    },
    {
      icon: "🌱",
      title: "Soil",
      description:
        "Use a well-draining potting mix appropriate for your plant type.",
    },
    {
      icon: "🐛",
      title: "Pest Control",
      description:
        "Regularly inspect your plants for pests. Isolate and treat accordingly.",
    },
    {
      icon: "🌼",
      title: "Fertilizing",
      description:
        "Feed your plants during their growing season with a balanced liquid fertilizer.",
    },
    {
      icon: "♻️",
      title: "Repotting",
      description:
        "Repot your plant when it outgrows its current container.",
    },
    {
      icon: "🌡️",
      title: "Temperature & Humidity",
      description:
        "Be mindful of your plant's preferred temperature and humidity levels.",
    },
    {
      icon: "🪴",
      title: "Pruning",
      description:
        "Prune dead or yellowing leaves and stems to encourage healthy growth.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white/5 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">
        Plant Care Guidance
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careTips.map((tip, index) => (
          <li
            key={index}
            className="flex items-start gap-3 p-4 border border-white rounded-lg hover:bg-gray-600/10 transition"
          >
            <span className="text-2xl shrink-0">{tip.icon}</span>
            <div>
              <h3 className="font-semibold text-lg">{tip.title}</h3>
              <p className="text-gray-300">{tip.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from 'react';
import IconAssemble from '../assets/assemble.png';
import IconPerson from '../assets/person.png';
import IconShield from '../assets/shield.png';
import IconCompat from '../assets/high.png';

const FeatureCard = ({ icon, title, description }) => (
  <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
    <div className="relative p-6 space-y-6">
      <img src={icon} className="w-10" width="512" height="512" alt={`${title} icon`} />
      <div className="space-y-2">
        <h5 className="text-xl text-gray-900 font-bold transition group-hover:text-primary">{title}</h5>
        <p className="text-base text-gray-900">{description}</p>
      </div>
    </div>
  </div>
);

export const FeaturesSection = () => {
  const features = [
    {
      icon: IconCompat,
      title: 'Compatibility',
      description: (
        <div>
          <p>Heavy-Duty Aluminum Extrusion Included.</p>
          <p>Compatible with Johnson Hardware systems.</p>
          <p>
            Requires the <strong>10311005 Johnson Pocket Door Kit</strong> (sold separately):
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <a
                href="https://jhusa.net/10311005-pocket-door-part-set"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline hover:text-green-800 transition">
                Johnson Hardware Website
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.com/ACEPLANET-Commercial-Upgrades-Hardware-Capacity/dp/B0CFCYC2MK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline hover:text-green-800 transition">
                Buy on Amazon
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: IconShield,
      title: 'The Strongest',
      description: (
        <div>
          <p>Built tough to last. Our reinforced metal frame provides unmatched durability and strength for any project.</p>
          <p>Invest in the frame that holds up under pressure, ensuring a solid foundation every time.</p>
        </div>
      ),
    },
    {
      icon: IconAssemble,
      title: 'The Fastest',
      description: (
        <div>
          <p>Get the job done quicker. Our frame is designed for rapid assembly, saving you valuable time.</p>
          <p>Simplify your workflow and reduce labor costs without sacrificing quality or precision.</p>
        </div>
      ),
    },
    {
      icon: IconPerson,
      title: 'The Best',
      description: (
        <div>
          <p>Top quality at a competitive price.</p>
          <p>Experience premium design and performance without compromise.</p>
          <p>Elevate your projects with the frame crafted for reliability and aesthetic appeal.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="container m-auto py-10 px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 rounded-xl overflow-hidden">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
};

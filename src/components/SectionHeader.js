export const SectionHeader = ({ subheading, heading, description }) => {
  return (
    <div className="text-center mb-16">
      <p className="text-sm font-bold uppercase tracking-widest text-stone-900">{subheading}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">{heading}</h2>
      <p className="mx-auto mt-4 text-base font-normal text-gray-600 lg:text-lg lg:leading-8">{description}</p>
    </div>
  );
};

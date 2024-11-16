const CourseSection = () => {
  return (
      <section className="flex justify-center gap-8 mx-10 my-10">
          <div className="w-[calc(33.33%-1rem)] bg-red-500 h-48 rounded-md shadow-lg"></div>
          <div className="w-[calc(33.33%-1rem)] bg-yellow-500 h-48 rounded-md shadow-lg"></div>
          <div className="w-[calc(33.33%-1rem)] bg-purple-500 h-48 rounded-md shadow-lg"></div>
      </section>
  );
};

export default CourseSection;

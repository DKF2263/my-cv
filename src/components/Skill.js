function Skills() {
  return (
    <section className="py-10 px-6 bg-[#0b0b0d] text-white">
      <h2 className="text-2xl font-bold text-blue-400 mb-8 text-center uppercase tracking-wide">
        Skills
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-[#111827] p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">
            Programming Languages
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
          </ul>

          <h3 className="text-lg font-semibold text-blue-400 mt-6 mb-3">
            DBMS
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Microsoft SQL Server</li>
          </ul>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">
            Microcontroller Tools
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>MikroC PRO for PIC</li>
            <li>Proteus</li>
          </ul>

          <h3 className="text-lg font-semibold text-blue-400 mt-6 mb-3">
            Soft Skills & Languages
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Teamworking</li>
            <li>Problem-Solving</li>
            <li>Vietnamese, English (basic communication)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

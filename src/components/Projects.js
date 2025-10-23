function Projects() {
  return (
    <section className="py-10 px-6 bg-[#111827] text-white">
      <h2 className="text-2xl font-bold text-blue-400 mb-8 text-center uppercase tracking-wide">
        Personal Projects
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="p-6 border-l-4 border-blue-400 bg-[#1f2937] rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-white">
            Brainwave Signal Classification
          </h3>
          <p className="text-sm text-gray-400 italic mb-2">
            Nov 2021 – Jan 2022
          </p>
          <ul className="list-disc list-inside text-gray-300 text-justify leading-relaxed">
            <li>
              Classified EEG brainwave signals using DWT and MATLAB.
            </li>
            <li>
              Compared models: Naive Bayes, KNN, Ensemble, SVM.
            </li>
            <li>
              Applied in EEG denoising, Parkinson’s detection.
            </li>
          </ul>
          <p className="mt-3 text-gray-400">
            <span className="font-medium text-blue-400">Tools:</span> MATLAB, DWT, ML models
          </p>
        </div>

        <div className="p-6 border-l-4 border-green-400 bg-[#1f2937] rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-white">
            Simulation of a Traffic Light Circuit Using Digital ICs
          </h3>
          <p className="text-sm text-gray-400 italic mb-2">
            Dec 8, 2024 – Dec 24, 2024
          </p>
          <ul className="list-disc list-inside text-gray-300 text-justify leading-relaxed">
            <li>
              Designed and simulated a traffic light circuit using NE555, 4017, 74LS192, and 4511 ICs.
            </li>
            <li>
              Divided into pulse, counting, display, LED control blocks.
            </li>
            <li>
              Simulated in Proteus, tested on real hardware.
            </li>
          </ul>
          <p className="mt-3 text-gray-400">
            <span className="font-medium text-green-400">Tools:</span> Proteus, NE555, CD4017, PCB Layout
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

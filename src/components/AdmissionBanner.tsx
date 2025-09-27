export default function AdmissionBanner() {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Admissions Open Session 2025 - 26
      </h2>
      <p className="mb-4">Or click on 'Apply Here' to fill the form.</p>
      <div className="flex justify-center gap-4">
        <a
          href="/admissions"
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
        >
          For Online Admission - Apply Here
        </a>
        <a
          href="/admissions"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
        >
          Already Registered User - Click Here
        </a>
      </div>
    </section>
  );
}

// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Important Links */}
        <div>
          <h4 className="font-semibold mb-3">Important Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:text-white">Welcome ACET !</a></li>
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Refund and Cancellation</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">AICTE Approval Letter</a></li>
            <li><a href="#" className="hover:text-white">Accreditation Status</a></li>
            <li><a href="#" className="hover:text-white">Board of Governors</a></li>
            <li><a href="#" className="hover:text-white">Mandatory Disclosures</a></li>
            <li><a href="#" className="hover:text-white">AICTE Feedback</a></li>
            <li><a href="#" className="hover:text-white">Grievance Redressal Portal</a></li>
          </ul>
        </div>

        {/* Column 2: Reach Us */}
        <div>
          <h4 className="font-semibold mb-3">Reach Us</h4>
          <p className="text-sm">
            ALIGARH COLLEGE OF ENGINEERING AND TECHNOLOGY <br />
            3 KM FROM SASNI GATE, MATHURA ROAD, <br />
            ALIGARH-202001
          </p>
          <p className="mt-3 text-sm">
            📧 E-MAIL : <a href="mailto:mail@acetup.org" className="hover:text-white">mail@acetup.org</a>
          </p>
          <p className="text-sm">
            📱 Mobile No.: +91 9568200010, 62, 63, 64, 65, 71, 77
          </p>
        </div>

        {/* Column 3: Branding */}
        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} Aligarh College. 
          </p>
          
        </div>
      </div>

      {/* Bottom small strip */}
      <div className="bg-gray-800 text-center py-3 text-xs">All rights reserved.
        © {new Date().getFullYear()} Aligarh College of Engineering and Technology
      </div>
    </footer>
  );
}

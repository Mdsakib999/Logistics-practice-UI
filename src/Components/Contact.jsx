import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <div className="p-5 flex w-full ">
        {/* contact form */}
        <div className="w-4/10  mx-auto p-4">
          <form className="space-y-4">
            <button className="flex items-center w-40 h-9 bg-blue-900 text-white font-medium shadow-md hover:bg-violet-700 transition duration-300 ease-in-out mb-4">
              <span className="w-1/14 h-full bg-yellow-400"></span>
              <span className="flex-1 text-center font-semibold text-lg">
                Get in Touch
              </span>
            </button>
            <h2 className="font-bold text-gray-900 text-3xl mb-2">
              Need to make an Inquiry?
            </h2>

            <div className="grid grid-cols-4 gap-3">
              {/* First row: 2 + 2 */}
              <input
                type="text"
                placeholder="Your Name"
                className="col-span-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm bg-gray-100"
              />
              <input
                type="text"
                placeholder="Affiliation"
                className="col-span-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm bg-gray-100"
              />

              
              <input
                type="email"
                placeholder="Email"
                className="col-span-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm bg-gray-100"
              />
              <input
                type="text"
                placeholder="Number"
                className="col-span-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm bg-gray-100"
              />

              
              <input
                type="text"
                placeholder="Website"
                className="col-span-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm bg-gray-100"
              />
              <select className="col-span-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm bg-gray-100">
                <option value="">Inquiry Department</option>
                <option value="it">IT</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
                <option value="hr">HR</option>
              </select>

              {/* Full width fields */}
              <input
                type="text"
                placeholder="Topic"
                className="col-span-4 rounded-md border border-gray-300 px-3 py-1.5 text-sm bg-gray-100"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="col-span-4 rounded-md border border-gray-300 px-3 py-1.5 text-sm bg-gray-100"
              />
            </div>

            <button className="flex items-center w-44 h-13 bg-blue-900 text-white font-medium shadow-md hover:bg-violet-700 transition duration-300 ease-in-out mt-2">
              <span className="flex-1 text-center font-semibold text-lg">
                Send Message
              </span>
            </button>
          </form>
        </div>

        {/* part 2 */}
        {/* Contact Text */}
        <div className="pl-10 w-6/10 pt-16">
          <div className="space-y-2">
            <p className="text-sm  opacity-60">Get in Touch With Us</p>
            <h4 className="font-bold text-3xl">
              We take care about transportation for your business.
            </h4>
            <p className="opacity-70">
              <span className="font-bold">Transit</span> has experience in
              handling the formalities and documentation required for your
              imports and exports. We work with all international station to
              guarantee that your load will safely reach without any delays.
            </p>
          </div>
          <div className="space-y-2 mt-2">
            <h4 className="text-xl font-bold py-5">New York</h4>
            <div className="flex gap-2">
              <IoLocationSharp
                className="text-white bg-blue-950 p-2 rounded-full"
                size={30}
              />
              <div>
                2405 Beverley Rd Brooklyn, New York 11226 United States.
              </div>
            </div>

            <div className="flex gap-2">
              <IoCallSharp
                className="text-white bg-blue-950 p-2 rounded-full"
                size={30}
              />
              <div>+1 212 425 8617</div>
            </div>
          </div>
          <div className="space-y-2 mt-10 flex gap-8">
            <div className="flex items-center gap-1">
              <IoLocationSharp className="text-gray-600 " size={30} />
              <div>FaceBook</div>
            </div>

            <div className="flex items-center gap-1">
              <FaTwitter className="text-gray-600 " size={30} />
              <div>Twitter</div>
            </div>

            <div className="flex items-center gap-1">
              <FaLinkedin className="text-gray-600 " size={30} />
              <div>LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

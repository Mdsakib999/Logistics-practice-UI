import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

const LatestNews = () => {
  return (
    <div className="p-10 ">
      <button className="flex items-center w-40 h-9 bg-blue-900 text-white font-medium shadow-md hover:bg-violet-700 transition duration-300 ease-in-out mb-4">
        <span className="w-1/14 h-full bg-yellow-400"></span>
        <span className="flex-1 text-center font-semibold text-lg">
          Our Blog
        </span>
      </button>
      <h2 className="font-bold text-gray-900 text-4xl mb-2">Our Latest News</h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src="https://i.ibb.co.com/zWStRbsc/blog1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex gap-8">
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt className="text-gray-600 " size={20} />
                <div>24 Jan</div>
              </div>

              <div className="flex items-center gap-1">
                <FaRegClock className="text-gray-600 " size={20} />
                <div>4 min read</div>
              </div>
            </div>

            <h2 className="card-title">Your Logistic Solution</h2>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src="https://i.ibb.co.com/N6TTV6pB/blog2.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex gap-8">
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt className="text-gray-600 " size={20} />
                <div>24 Jan</div>
              </div>

              <div className="flex items-center gap-1">
                <FaRegClock className="text-gray-600 " size={20} />
                <div>4 min read</div>
              </div>
            </div>

            <h2 className="card-title">
              Following the quality of our service thus having gained trust of
              our many clients.
            </h2>
            <p>
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src="https://i.ibb.co.com/hJVCMR3Z/blog3.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex gap-8">
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt className="text-gray-600 " size={20} />
                <div>24 Jan</div>
              </div>

              <div className="flex items-center gap-1">
                <FaRegClock className="text-gray-600 " size={20} />
                <div>4 min read</div>
              </div>
            </div>

            <h2 className="card-title">
              Our global logistics expertise, advanced supply chain technology &
              customized solutions.
            </h2>
            <p>
              Logistics solutions will help you analyze, develop and implement
              successful supply chain management strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;

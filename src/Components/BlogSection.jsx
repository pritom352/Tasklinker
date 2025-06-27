import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "5 Tips to Win More Freelance Bids",
      date: "June 25, 2025",
      summary:
        "Want to get more freelance projects? Learn how to write a compelling bid...",
      content:
        "Here are 5 detailed tips:\n\n1. Personalize your bid.\n2. Show previous related work.\n3. Keep your pricing competitive.\n4. Respond quickly.\n5. Build long-term relationships with clients.",
    },
    {
      id: 2,
      title: "How to Post the Perfect Task",
      date: "June 22, 2025",
      summary:
        "A well-written task helps you get better freelancers. Here's how to do it...",
      content:
        "To post an effective task:\n\n- Be clear and specific.\n- Add proper deadlines.\n- Set a realistic budget.\n- Mention required skills.\n- Use simple language.",
    },
    {
      id: 3,
      title: "Secure Payments: What You Must Know",
      date: "June 20, 2025",
      summary:
        "Make sure your payments are secure on freelance platforms. Learn what to check...",
      content:
        "Always:\n\n- Use platform’s built-in payment gateway.\n- Avoid direct payments.\n- Verify freelancer profiles.\n- Check reviews and ratings.",
    },
  ];

  return (
    <section className="mt-20 py-15 rounded-2xl bg-base-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">
          📚 <span className="text-blue-500">Latest</span> Blog Posts
        </h2>
        <p className=" mt-2">
          Tips & resources to boost your freelancing journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="card bg-base-200 shadow-xl p-5">
            <div className="mb-3 flex items-center text-sm ">
              <FaCalendarAlt className="mr-2" />
              {blog.date}
            </div>
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className=" mb-4">{blog.summary}</p>
            <button
              onClick={() => setSelectedBlog(blog)}
              className="px-3 py-2 relative rounded group overflow-hidden font-medium bg-base-300 text-purple-600 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-500 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-base-100">
                Read More
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <dialog id="blog_modal" className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="text-2xl font-bold mb-2">{selectedBlog.title}</h3>
            <p className="text-sm  mb-4">
              <FaCalendarAlt className="inline-block mr-1" />
              {selectedBlog.date}
            </p>
            <pre className="whitespace-pre-wrap ">{selectedBlog.content}</pre>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={() => setSelectedBlog(null)}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default BlogSection;

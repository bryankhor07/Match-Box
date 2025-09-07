export default function BlogPage() {
  // Mock blog posts – replace with data from your DB or CMS
  const posts = [
    {
      id: 1,
      title: "How to Create the Perfect Match Profile",
      excerpt:
        "Learn the best practices for writing a bio, choosing photos, and making a great first impression.",
      date: "September 1, 2025",
    },
    {
      id: 2,
      title: "Strict vs Relaxed Matching – Which is Right for You?",
      excerpt:
        "Explore the pros and cons of being selective with your matches vs keeping your options open.",
      date: "August 22, 2025",
    },
    {
      id: 3,
      title: "Top 5 Dating Safety Tips",
      excerpt:
        "Your safety is our priority. Here are practical tips to keep in mind while meeting new people.",
      date: "August 5, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Blog</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Insights, tips, and stories to help you make the most of your
            matchmaking journey.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <a
                  href={`/blog/${post.id}`}
                  className="text-pink-500 hover:text-pink-600 font-medium"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Blog = () => {
  return (
    <div className="pt-6 md:pt-12">
      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Explore Insights, Tips, and Stories for Everyday Life
      </h2>
      <p className="mx-auto my-4 max-w-xl px-8 text-center text-slate-600">
        Welcome to our Blog Hub, where captivating content awaits! From
        lifestyle tips to trending stories, we've got you covered. Our goal is
        to inform, inspire, and entertain with diverse articles tailored to your
        interests. Join our community for a journey of discovery. Explore,
        enjoy, and stay informed!
      </p>
      <div className="flex justify-center">
        <button className="rounded-lg border-2 px-4 py-2">Explore blogs</button>
      </div>

      {/* CTA */}

      <h3 className="text-center text-2xl font-semibold md:text-3xl">
        Recent Posts
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {/* Map the posts */}
          <h4 className="text-medium text-lg"></h4>
          <p className="text-slate-600"></p>
        </div>
      </h3>
    </div>
  );
};

export default Blog;

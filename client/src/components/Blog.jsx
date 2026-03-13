import { blogs } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => (
  <section className="bg-dark py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-white mb-4 uppercase tracking-widest">Lastest Blog Posts</h2>
        <p className="text-muted">Tools and strategies modern teams need to help their companies grow.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-6">
              <img src={post.img} alt={post.title} className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <span className="text-primary text-sm font-bold uppercase">{post.tag}</span>
            <div className="flex justify-between items-start mt-2 mb-4">
              <h3 className="text-xl font-bold text-white">{post.title}</h3>
              <ArrowUpRight className="text-white group-hover:text-primary transition" />
            </div>
            <p className="text-muted text-sm mb-6">{post.desc}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-600" /> {/* Placeholder for Avatar */}
              <div>
                <p className="text-white text-sm font-bold">{post.author}</p>
                <p className="text-muted text-xs">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Blog;
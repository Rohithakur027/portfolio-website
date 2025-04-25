"use client"

import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
import { blogPosts } from "@/components/blog-section"
import { Card } from "@/components/ui/card"

type BlogPostParams = {
  params: {
    slug: string
  }
}

export default function BlogPostPageClient({ params }: BlogPostParams) {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
              <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>
        </div>

        <article>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="blog-content">
            {post.id === "building-scalable-react-applications" && (
              <>
                <p>
                  As React applications grow in size and complexity, maintaining a scalable and organized codebase
                  becomes increasingly important. In this article, we'll explore strategies and best practices for
                  building React applications that can scale effectively.
                </p>

                <h2>Component Organization</h2>
                <p>
                  One of the most important aspects of a scalable React application is how you organize your components.
                  A well-structured component hierarchy can make your codebase more maintainable and easier to navigate.
                </p>

                <h3>Atomic Design Methodology</h3>
                <p>
                  Consider adopting the Atomic Design methodology, which breaks down components into five distinct
                  categories:
                </p>
                <ul>
                  <li>
                    <strong>Atoms:</strong> Basic building blocks like buttons, inputs, and labels
                  </li>
                  <li>
                    <strong>Molecules:</strong> Simple groups of UI elements functioning together (e.g., a form input
                    with label)
                  </li>
                  <li>
                    <strong>Organisms:</strong> Complex UI components composed of molecules and atoms
                  </li>
                  <li>
                    <strong>Templates:</strong> Page-level objects that place components into a layout
                  </li>
                  <li>
                    <strong>Pages:</strong> Specific instances of templates with real content
                  </li>
                </ul>

                <h2>State Management</h2>
                <p>As your application grows, managing state becomes more complex. Consider these approaches:</p>

                <h3>Local vs. Global State</h3>
                <p>
                  Not all state needs to be global. Keep state as local as possible to components that need it. Only
                  elevate state to a global store when it's truly needed across multiple components.
                </p>

                <pre>
                  <code>{`// Local state example
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}</code>
                </pre>

                <h3>State Management Libraries</h3>
                <p>For complex applications, consider using state management libraries:</p>
                <ul>
                  <li>
                    <strong>Redux:</strong> Predictable state container with a single store
                  </li>
                  <li>
                    <strong>Zustand:</strong> Lightweight state management with hooks
                  </li>
                  <li>
                    <strong>Jotai/Recoil:</strong> Atomic state management
                  </li>
                  <li>
                    <strong>Context API:</strong> Built-in React solution for passing data through the component tree
                  </li>
                </ul>

                <h2>Code Splitting</h2>
                <p>
                  As your application grows, bundle size can become an issue. Implement code splitting to load only
                  what's necessary:
                </p>

                <pre>
                  <code>{`// Using React.lazy for code splitting
const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}`}</code>
                </pre>

                <h2>Performance Optimization</h2>
                <p>Optimize rendering performance with React's built-in features:</p>
                <ul>
                  <li>
                    Use <code>React.memo</code> for component memoization
                  </li>
                  <li>
                    Implement <code>useCallback</code> for stable function references
                  </li>
                  <li>
                    Use <code>useMemo</code> to memoize expensive calculations
                  </li>
                  <li>
                    Virtualize long lists with libraries like <code>react-window</code>
                  </li>
                </ul>

                <h2>Testing Strategy</h2>
                <p>A comprehensive testing strategy is crucial for maintaining a scalable application:</p>
                <ul>
                  <li>
                    <strong>Unit tests:</strong> Test individual components and functions
                  </li>
                  <li>
                    <strong>Integration tests:</strong> Test how components work together
                  </li>
                  <li>
                    <strong>End-to-end tests:</strong> Test complete user flows
                  </li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Building scalable React applications requires thoughtful architecture, state management, and
                  performance optimization. By following these best practices, you can create applications that remain
                  maintainable and performant as they grow in size and complexity.
                </p>
              </>
            )}

            {post.id === "power-of-server-components-nextjs" && (
              <>
                <p>
                  Next.js introduced Server Components as a revolutionary way to build React applications. This feature
                  fundamentally changes how we think about rendering and data fetching in React applications.
                </p>

                <h2>What Are Server Components?</h2>
                <p>
                  Server Components are React components that render exclusively on the server. Unlike traditional React
                  components that execute in the browser, Server Components run only on the server and stream their
                  output to the client.
                </p>

                <h3>Key Benefits</h3>
                <ul>
                  <li>
                    <strong>Zero JavaScript footprint:</strong> Server Components don't send any JavaScript to the
                    client, reducing bundle size
                  </li>
                  <li>
                    <strong>Direct backend access:</strong> Can directly access databases, file systems, and other
                    server resources
                  </li>
                  <li>
                    <strong>Improved performance:</strong> Reduced client-side JavaScript and faster initial page loads
                  </li>
                  <li>
                    <strong>Progressive enhancement:</strong> Works even with JavaScript disabled in the browser
                  </li>
                </ul>

                <h2>Server Components vs. Client Components</h2>
                <p>
                  In Next.js, components are Server Components by default. They can access server-side resources
                  directly but cannot use client-side features like React hooks or browser APIs.
                </p>

                <p>
                  Client Components, marked with the <code>'use client'</code> directive, work like traditional React
                  components with full access to browser APIs and React's interactive features.
                </p>

                <pre>
                  <code>{`// Server Component (default)
export default function ServerComponent() {
  // Can access server resources directly
  // Cannot use hooks or browser APIs
  return <div>Rendered on the server</div>;
}

// Client Component
'use client'

import { useState } from 'react';

export default function ClientComponent() {
  // Can use hooks and browser APIs
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code>
                </pre>

                <h2>Data Fetching with Server Components</h2>
                <p>One of the most powerful aspects of Server Components is their ability to fetch data directly:</p>

                <pre>
                  <code>{`// Data fetching in a Server Component
export default async function UserProfile({ userId }) {
  // Direct database access without exposing credentials to the client
  const user = await db.users.findUnique({ where: { id: userId } });
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}</code>
                </pre>

                <h3>Benefits Over Traditional Data Fetching</h3>
                <ul>
                  <li>No need for loading states in many cases</li>
                  <li>No client-server waterfalls</li>
                  <li>Secure access to sensitive resources</li>
                  <li>Reduced client-side JavaScript</li>
                </ul>

                <h2>Architectural Patterns</h2>
                <p>Server Components enable new architectural patterns in Next.js applications:</p>

                <h3>Interleaving Server and Client Components</h3>
                <p>
                  You can nest Client Components inside Server Components and vice versa, creating a hybrid rendering
                  approach:
                </p>

                <pre>
                  <code>{`// Server Component with nested Client Component
export default function Page() {
  // Server-side data fetching
  const products = await getProducts();
  
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
      <AddToCartButton /> {/* Client Component */}
    </div>
  );
}

// Client Component
'use client'
function AddToCartButton() {
  return <button onClick={() => addToCart()}>Add to Cart</button>;
}`}</code>
                </pre>

                <h2>Conclusion</h2>
                <p>
                  Server Components represent a paradigm shift in React development, especially within the Next.js
                  framework. By moving rendering and data fetching to the server, they enable more performant, secure,
                  and maintainable applications. As you build with Next.js, understanding when and how to use Server
                  Components will be crucial for creating optimal user experiences.
                </p>
              </>
            )}

            {post.id === "optimizing-database-queries" && (
              <>
                <p>
                  Database performance is often the bottleneck in web applications. In this article, we'll explore
                  practical techniques for optimizing database queries to improve the overall performance of your web
                  applications.
                </p>

                <h2>Understanding Query Performance</h2>
                <p>
                  Before optimizing queries, it's important to understand what makes a query slow. Common factors
                  include:
                </p>
                <ul>
                  <li>Missing indexes</li>
                  <li>Retrieving unnecessary data</li>
                  <li>Inefficient join operations</li>
                  <li>Suboptimal query patterns</li>
                  <li>Database schema design issues</li>
                </ul>

                <h2>Essential Optimization Techniques</h2>

                <h3>1. Use Proper Indexing</h3>
                <p>
                  Indexes are perhaps the most important tool for query optimization. They allow the database to find
                  data without scanning entire tables.
                </p>

                <pre>
                  <code>{`-- Adding an index to a frequently queried column
CREATE INDEX idx_users_email ON users(email);

-- Composite index for queries that filter on multiple columns
CREATE INDEX idx_products_category_price ON products(category_id, price);`}</code>
                </pre>

                <p>
                  Remember that while indexes speed up reads, they slow down writes and take up storage space. Index
                  strategically based on your query patterns.
                </p>

                <h3>2. Select Only What You Need</h3>
                <p>
                  Avoid using <code>SELECT *</code> and instead specify only the columns you actually need:
                </p>

                <pre>
                  <code>{`-- Instead of this
SELECT * FROM users WHERE status = 'active';

-- Do this
SELECT id, name, email FROM users WHERE status = 'active';`}</code>
                </pre>

                <h3>3. Optimize JOIN Operations</h3>
                <p>JOINs can be expensive, especially when dealing with large tables:</p>
                <ul>
                  <li>Ensure joined columns are indexed</li>
                  <li>Join on columns with similar data types</li>
                  <li>Consider denormalizing data for read-heavy operations</li>
                </ul>

                <h3>4. Use Query Pagination</h3>
                <p>For large result sets, implement pagination to limit the amount of data returned:</p>

                <pre>
                  <code>{`-- Pagination with LIMIT and OFFSET
SELECT id, title, created_at 
FROM posts 
ORDER BY created_at DESC 
LIMIT 20 OFFSET 40; -- Page 3 with 20 items per page

-- More efficient pagination with keyset pagination
SELECT id, title, created_at 
FROM posts 
WHERE created_at < '2023-01-15' -- Last item from previous page
ORDER BY created_at DESC 
LIMIT 20;`}</code>
                </pre>

                <h3>5. Avoid N+1 Query Problems</h3>
                <p>
                  The N+1 query problem occurs when you fetch a list of items and then make a separate query for each
                  item's related data:
                </p>

                <pre>
                  <code>{`// Inefficient approach (N+1 problem)
const posts = await db.posts.findMany();
for (const post of posts) {
  // This makes a separate query for each post!
  post.comments = await db.comments.findMany({ 
    where: { postId: post.id } 
  });
}

// Better approach with a single JOIN or eager loading
const posts = await db.posts.findMany({
  include: { comments: true }
});`}</code>
                </pre>

                <h2>Advanced Optimization Strategies</h2>

                <h3>1. Query Caching</h3>
                <p>For data that doesn't change frequently, implement caching:</p>
                <ul>
                  <li>Application-level caching with Redis or Memcached</li>
                  <li>ORM-level query result caching</li>
                  <li>Database query cache (when appropriate)</li>
                </ul>

                <h3>2. Database-Specific Optimizations</h3>
                <p>Different databases have specific optimization techniques:</p>
                <ul>
                  <li>
                    <strong>PostgreSQL:</strong> Use EXPLAIN ANALYZE to understand query execution plans
                  </li>
                  <li>
                    <strong>MySQL:</strong> Optimize table structures with proper data types
                  </li>
                  <li>
                    <strong>MongoDB:</strong> Create compound indexes for common query patterns
                  </li>
                </ul>

                <h3>3. Consider Database Sharding</h3>
                <p>
                  For very large datasets, consider horizontal partitioning (sharding) to distribute data across
                  multiple servers.
                </p>

                <h2>Monitoring and Continuous Improvement</h2>
                <p>Database optimization is an ongoing process:</p>
                <ul>
                  <li>Implement query performance monitoring</li>
                  <li>Set up alerts for slow queries</li>
                  <li>Regularly review and optimize the most frequently executed queries</li>
                  <li>Consider using specialized tools like pganalyze or SolarWinds Database Performance Analyzer</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Optimizing database queries is a critical skill for building performant web applications. By
                  implementing these techniques, you can significantly improve your application's response times and
                  user experience. Remember that optimization should be data-driven—focus your efforts on the queries
                  that are actually causing performance issues in your application.
                </p>
              </>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-4">Continue Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((relatedPost) => relatedPost.id !== post.id)
                .slice(0, 2)
                .map((relatedPost, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                    <div className="flex">
                      <div className="relative w-24 h-24">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold mb-1 line-clamp-2">{relatedPost.title}</h4>
                        <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
                          <Link
                            href={`/blog/${relatedPost.id}`}
                            className="flex items-center gap-1 text-primary text-sm"
                          >
                            Read <ArrowRight className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

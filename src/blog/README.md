# Blog Posts

This folder contains the blog functionality for your portfolio website.

## How to Add New Blog Posts

### Method 1: Edit the posts.js file (Recommended)

1. Open `src/blog/posts.js`
2. Add a new object to the `blogPosts` array
3. Include the following properties:
   - `id`: Unique identifier for the post (e.g., "my-new-post")
   - `title`: The title of your blog post
   - `date`: Publication date (e.g., "2025-08-06")
   - `excerpt`: Brief description that appears in the blog list
   - `content`: The full markdown content of your post

### Example:

```javascript
{
  id: "my-new-post",
  title: "My New Blog Post",
  date: "2025-08-06",
  excerpt: "This is a brief description of my new blog post.",
  content: `# My New Blog Post

This is the content of my blog post written in **Markdown**.

## Features

- Supports all Markdown syntax
- Code highlighting
- Responsive design
- Easy to maintain

\`\`\`javascript
console.log("Hello, World!");
\`\`\`

Happy writing!`
}
```

### Method 2: Create individual .md files (Advanced)

If you prefer to work with individual markdown files:

1. Create a new `.md` file in the `src/blog/` folder
2. Add frontmatter with metadata
3. Write your content in Markdown
4. Import and add to the posts configuration

## Markdown Features Supported

- **Headers**: `# ## ###`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Lists**: `- item` or `1. item`
- **Code**: `` `code` ``
- **Code blocks**: ```` ```javascript ```
- **Links**: `[text](url)`
- **Images**: `![alt](url)`

## Tips

- Keep your `id` values unique and URL-friendly
- Use descriptive titles and excerpts
- Include code examples with proper syntax highlighting
- Add images to make your posts more engaging
- Keep your content well-structured with headers

## File Structure

```
src/blog/
├── posts.js          # Blog posts configuration
├── README.md         # This file
└── first-post.md     # Sample markdown file (optional)
```

Your blog posts will automatically appear on your website once you save the changes! 
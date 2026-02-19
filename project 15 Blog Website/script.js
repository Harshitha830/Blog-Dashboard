const blogs = [
    {
        id: 1,
        title: "Mastering JavaScript Basics",
        category: "Programming",
        author: "Harshitha",
        date: "Feb 15, 2026",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500",
        description: "Learn variables, loops, and functions in a simple way. Perfect for beginners starting their coding journey.",
        content: "JavaScript is the backbone of modern web development. In this comprehensive guide, we'll explore the fundamental concepts that every developer needs to know. We'll start with variables and data types, move through control structures like loops and conditionals, and finally master functions. By the end, you'll have a solid foundation to build upon."
    },
    {
        id: 2,
        title: "Top 5 Career Tips for Students",
        category: "Career",
        author: "Harshitha",
        date: "Feb 12, 2026",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
        description: "Improve your resume and skills with these proven strategies for landing your dream job.",
        content: "Building a successful career starts with the right foundation. Here are five essential tips: 1) Build a strong portfolio showcasing your projects, 2) Network actively on LinkedIn and attend tech events, 3) Contribute to open-source projects, 4) Keep learning new technologies, 5) Practice coding interviews regularly. Remember, consistency is key to success."
    },
    {
        id: 3,
        title: "Introduction to React Hooks",
        category: "Programming",
        author: "Harshitha",
        date: "Feb 10, 2026",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
        description: "Discover the power of React Hooks and how they simplify state management in functional components.",
        content: "React Hooks revolutionized how we write React applications. useState and useEffect are the most commonly used hooks that allow you to add state and lifecycle methods to functional components. This guide will walk you through practical examples and best practices for using hooks effectively in your projects."
    },
    {
        id: 4,
        title: "AI and Machine Learning Trends 2026",
        category: "Technology",
        author: "Harshitha",
        date: "Feb 8, 2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",
        description: "Explore the latest trends in AI and ML that are shaping the future of technology.",
        content: "Artificial Intelligence continues to transform industries at an unprecedented pace. From generative AI to advanced natural language processing, 2026 is seeing breakthrough innovations. This article explores the top trends including multimodal AI, AI ethics, edge AI computing, and how these technologies are being integrated into everyday applications."
    },
    {
        id: 5,
        title: "Healthy Work-Life Balance Tips",
        category: "Lifestyle",
        author: "Harshitha",
        date: "Feb 5, 2026",
        image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=500",
        description: "Maintain productivity while taking care of your mental and physical health.",
        content: "In today's fast-paced tech world, maintaining work-life balance is crucial. Set clear boundaries between work and personal time, take regular breaks, exercise daily, and don't forget to disconnect from screens. Remember, your health is your greatest asset. Implement these strategies to create a sustainable and fulfilling lifestyle."
    },
    {
        id: 6,
        title: "CSS Grid vs Flexbox: When to Use What",
        category: "Programming",
        author: "Harshitha",
        date: "Feb 3, 2026",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500",
        description: "A comprehensive comparison of CSS Grid and Flexbox with practical examples.",
        content: "Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Flexbox excels at one-dimensional layouts (rows or columns), while Grid is perfect for two-dimensional layouts. Learn when to use each, how to combine them, and see real-world examples that will improve your web design skills."
    },
    {
        id: 7,
        title: "Cloud Computing Essentials",
        category: "Technology",
        author: "Harshitha",
        date: "Feb 1, 2026",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
        description: "Understanding AWS, Azure, and Google Cloud platforms for modern applications.",
        content: "Cloud computing has become essential for modern software development. This guide covers the basics of major cloud platforms, including compute services, storage solutions, and deployment strategies. Whether you're building a startup or scaling an enterprise application, understanding cloud infrastructure is crucial for success."
    },
    {
        id: 8,
        title: "Building Your Personal Brand",
        category: "Career",
        author: "Harshitha",
        date: "Jan 28, 2026",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=500",
        description: "Learn how to establish yourself as an expert in your field through content and networking.",
        content: "Your personal brand is your professional reputation. Start by defining your niche, create valuable content consistently, engage with your community, and showcase your expertise. Use platforms like LinkedIn, Twitter, and GitHub to build visibility. Remember, authenticity is key – be genuine and provide real value to your audience."
    }
];

let filteredBlogs = [...blogs];

function displayBlogs(blogsToShow) {
    const grid = document.getElementById('blogsGrid');
    grid.innerHTML = '';
    
    blogsToShow.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}" class="blog-img">
            <div class="blog-content">
                <span class="blog-category">${blog.category}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-desc">${blog.description}</p>
                <div class="blog-meta">
                    <span><i class="fas fa-user"></i> ${blog.author}</span>
                    <span><i class="fas fa-calendar"></i> ${blog.date}</span>
                </div>
            </div>
        `;
        card.onclick = () => openModal(blog);
        grid.appendChild(card);
    });
}

function openModal(blog) {
    const modal = document.getElementById('blogModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${blog.title}</h2>
            <div class="modal-meta">
                <span><i class="fas fa-user"></i> ${blog.author}</span>
                <span><i class="fas fa-calendar"></i> ${blog.date}</span>
                <span><i class="fas fa-tag"></i> ${blog.category}</span>
            </div>
        </div>
        <img src="${blog.image}" alt="${blog.title}" class="modal-img">
        <p class="modal-text">${blog.content}</p>
    `;
    
    modal.style.display = 'block';
}

document.querySelector('.close').onclick = () => {
    document.getElementById('blogModal').style.display = 'none';
};

window.onclick = (e) => {
    const modal = document.getElementById('blogModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};

document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        filteredBlogs = category === 'all' ? [...blogs] : blogs.filter(b => b.category === category);
        displayBlogs(filteredBlogs);
    };
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const results = filteredBlogs.filter(blog => 
        blog.title.toLowerCase().includes(query) || 
        blog.description.toLowerCase().includes(query)
    );
    displayBlogs(results);
});

document.getElementById('themeToggle').onclick = () => {
    document.body.classList.toggle('dark');
    const icon = document.querySelector('#themeToggle i');
    icon.className = document.body.classList.contains('dark') ? 'fas fa-sun' : 'fas fa-moon';
};

displayBlogs(blogs);

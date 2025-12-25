// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blogs",
          title: "blogs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-off-topic",
          title: "off-topic",
          description: "A collection of my hobbies.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/offtopic/";
          },
        },{id: "post-submodular-functions-theory-exact-minimization-and-approximate-maximization",
        
          title: "Submodular Functions: Theory, Exact Minimization, and Approximate Maximization",
        
        description: "An exploration of submodular optimization: from Lovász extension and exact minimization to randomized greedy algorithms for NP-hard maximization problems.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/submodular%20function.pdf";
          
        },
      },{id: "post-presentation-decision-transformer-rl-via-sequence-modeling",
        
          title: "Presentation: Decision Transformer: RL via Sequence Modeling",
        
        description: "Slides for my presentation on casting reinforcement learning as a sequence modeling problem using Transformers. A video of my presentation is also available on youtube.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/Decision%20Transformer.pdf";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-my-smart-memory",
          title: 'My Smart Memory',
          description: "Developed a full-stack RAG application using Azure SQL database and OpenAI. Features vector similarity search for long-term conversation memory, implemented with React, Node.js, and LangChain to enable context-aware AI interactions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/my-smart-memory/";
            },},{id: "projects-uncertainty-aware-collision-avoidance-through-safe-reinforcement-learning",
          title: 'Uncertainty-Aware Collision Avoidance through Safe Reinforcement Learning',
          description: "Proposed a constrained MDP framework using lagrange PPO and behavior cloning for navigating unsignalized intersections under uncertainty. The method achieves a 100% success rate and zero-shot generalization to out-of-distribution agent behaviors (e.g., zigzagging), validated via high-fidelity simulation and hardware-in-the-loop experiments on Jackal robots.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/safe-rl/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%78%32%35%33@%63%6F%72%6E%65%6C%6C.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/menghan-xu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/menghan-xuu", "_blank");
        },
      },];

// Blog posts configuration
// To add a new blog post, simply add a new object to this array

export const blogPosts = [
  {
    id: "hidden-dangers-data-augmentation",
    title: "The Hidden Dangers of Data Augmentation: A Benchmark Story",
    date: "2025-08-08",
    excerpt: "A controlled experiment reveals that some popular data augmentation techniques can actually harm your model's performance. Here’s what happened when I put them to the test.",
    content: `
## So, Data Augmentation is Always a Good Idea, Right? I Decided to Check.

Anyone who's spent time in machine learning has heard the advice: if you want a better model, get more data. And if you can't get more data, you should augment what you have. It’s become a standard part of the playbook, something I've always taken as a given.

But recently I started to wonder. Is it *always* a good idea? What if, for certain problems, these trusted techniques were actually making things worse? I got curious and decided to run a quick, honest experiment.

I set up a simple testbed. I took a standard time series dataset of household energy usage and built a basic LSTM model to predict high vs. low energy consumption. It worked okay, giving me a baseline accuracy of about 87.35%. This was my score to beat.

Then, I took the training data and created three new versions, each using a classic augmentation technique: Jittering (adding a bit of noise), Time Warping (stretching and squeezing the timeline), and Scaling (changing the magnitude).

Here’s where things got really interesting.

Adding a little noise (Jittering) gave me a small but real performance boost, just as you'd expect. But the other two, Time Warping and Scaling, actually made the model *worse*. Time Warping, in particular, dropped the accuracy by over a full percentage point.

My gut feeling is that for data with strong, cyclical patterns like energy usage, messing with the timeline or the magnitude is just too destructive. It breaks the very patterns the model is trying to learn. It's a classic case of the "cure" being worse than the disease.

This little experiment was a huge eye-opener for me. It proved that the common wisdom of just throwing augmentation at a problem is a risky, unpredictable game of trial-and-error. That's a massive waste of time and resources for anyone building AI.

And that’s the whole reason I'm starting my new project, which I'm calling Hermes. The goal is to build a tool that can intelligently figure out the best augmentation strategy for a given dataset, instead of just guessing. It's an ambitious idea, but this first experiment proves how necessary it is.

I'm just getting started, but you can follow my progress over at my GitHub. It's going to be a fun ride.
`
  }
];

// Helper function to get a post by ID
export const getPostById = (id) => {
  return blogPosts.find(post => post.id === id);
};

// Helper function to get all posts
export const getAllPosts = () => {
  return blogPosts;
};
